import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:8000")
  .split(",")
  .map((s) => s.trim());
app.use(cors({ origin: allowedOrigins }));

app.get("/health", (req, res) => res.json({ ok: true }));

// ---- Assessees (name-only identity, no auth) ----

function nameKey(name) {
  return String(name || "").trim().toLowerCase();
}

app.post("/api/assessees", async (req, res) => {
  const { name } = req.body;
  const key = nameKey(name);
  if (!key) return res.status(400).json({ error: "Name is required" });

  try {
    // Find first - re-entering the same name (case-insensitive) returns the same record.
    const existing = await pool.query("SELECT id, name FROM assessees WHERE name_key = $1", [key]);
    if (existing.rows.length > 0) {
      return res.json(existing.rows[0]);
    }
    const inserted = await pool.query(
      "INSERT INTO assessees (name, name_key) VALUES ($1, $2) RETURNING id, name",
      [String(name).trim(), key]
    );
    res.json(inserted.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to find or create assessee" });
  }
});

// ---- Ratings, scoped per assessee ----

// Returns all ratings for one assessee as an object keyed by activity_key,
// matching the shape the frontend already uses internally.
app.get("/api/ratings", async (req, res) => {
  const assesseeId = Number(req.query.assessee_id);
  if (!Number.isInteger(assesseeId)) {
    return res.status(400).json({ error: "assessee_id query param is required" });
  }
  try {
    const result = await pool.query(
      `SELECT activity_key, competency, priority, driver, current_practice,
              ai_estimated_level, ai_reasoning, ai_assessed_at
       FROM ratings WHERE assessee_id = $1`,
      [assesseeId]
    );
    const map = {};
    for (const row of result.rows) {
      map[row.activity_key] = {
        competency: row.competency,
        priority: row.priority,
        driver: row.driver,
        currentPractice: row.current_practice,
        aiEstimatedLevel: row.ai_estimated_level,
        aiReasoning: row.ai_reasoning,
        aiAssessedAt: row.ai_assessed_at,
      };
    }
    res.json(map);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load ratings" });
  }
});

// Upsert one activity's rating for one assessee.
app.put("/api/ratings/:assesseeId/:activityKey", async (req, res) => {
  const assesseeId = Number(req.params.assesseeId);
  const { activityKey } = req.params;
  const { competency, priority, driver, currentPractice } = req.body;

  if (!Number.isInteger(assesseeId) || !activityKey) {
    return res.status(400).json({ error: "Invalid assessee or activity" });
  }
  const validScore = (v) => v === null || v === undefined || (Number.isInteger(v) && v >= 1 && v <= 5);
  if (!validScore(competency) || !validScore(priority)) {
    return res.status(400).json({ error: "competency and priority must be integers 1-5 or null" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO ratings (assessee_id, activity_key, competency, priority, driver, current_practice, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, now())
       ON CONFLICT (assessee_id, activity_key) DO UPDATE SET
         competency = $3, priority = $4, driver = $5, current_practice = $6, updated_at = now()
       RETURNING activity_key, competency, priority, driver, current_practice`,
      [assesseeId, activityKey, competency ?? null, priority ?? null, driver ?? null, currentPractice ?? null]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save rating" });
  }
});

// ---- AI assessment: compares self-rating + described practice against real CMM levels ----

app.post("/api/assess", async (req, res) => {
  const { assesseeId, activityKey, domainName, domainCode, activityLabel, competency, priority, driver, currentPractice, cmmLevels } = req.body;

  if (!Number.isInteger(assesseeId) || !activityKey) {
    return res.status(400).json({ error: "Invalid assessee or activity" });
  }
  if (!currentPractice || currentPractice.trim().length < 10) {
    return res.status(400).json({ error: "Add a bit more detail about what you currently do before requesting an assessment." });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: "Server is missing ANTHROPIC_API_KEY - set it in server/.env" });
  }

  const levelsText = (cmmLevels || [])
    .map((l) => `Level ${l.level} - ${l.label}: ${l.text}`)
    .join("\n\n");

  const driverText = driver ? driver : "not specified";

  const prompt = `You are assessing a GRC maturity self-rating against the real SCF (Secure Controls Framework) maturity model.

Domain: ${domainName} (${domainCode})
Activity: ${activityLabel}

The person rated themselves:
- Competency: ${competency} out of 5 (how good they think they are today)
- Priority: ${priority} out of 5 (how much they think it matters)
- What's driving the priority: ${driverText}

Here is what they said they currently do, in their own words:
"${currentPractice}"

Here are the real maturity level definitions for this domain (SCR-CMM):

${levelsText}

Task: based ONLY on what they described doing, estimate which maturity level (0-5) their actual practice reflects - independent of what they rated themselves. Then briefly compare that to their self-rating of ${competency}.

Respond with ONLY valid JSON, no markdown fences, no other text, in this exact shape:
{"estimatedLevel": <integer 0-5>, "reasoning": "<2-4 sentences, direct and specific, referencing what they said they do. If their self-rating and your estimate differ, say so plainly and explain the gap either direction. Be honest, not just reassuring.>"}`;

  try {
    const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 400,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!claudeRes.ok) {
      const errText = await claudeRes.text();
      console.error("Claude API error:", claudeRes.status, errText);
      return res.status(502).json({ error: "The AI assessment request failed. Check the server logs." });
    }

    const claudeData = await claudeRes.json();
    const textBlock = claudeData.content.find((b) => b.type === "text");
    let parsed;
    try {
      const cleaned = (textBlock?.text || "").replace(/```json|```/g, "").trim();
      parsed = JSON.parse(cleaned);
    } catch (parseErr) {
      console.error("Failed to parse Claude response as JSON:", textBlock?.text);
      return res.status(502).json({ error: "Got an unexpected response format from the AI. Try again." });
    }

    await pool.query(
      `UPDATE ratings SET ai_estimated_level = $1, ai_reasoning = $2, ai_assessed_at = now()
       WHERE assessee_id = $3 AND activity_key = $4`,
      [parsed.estimatedLevel, parsed.reasoning, assesseeId, activityKey]
    );

    res.json({ estimatedLevel: parsed.estimatedLevel, reasoning: parsed.reasoning });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to run the assessment" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`GRC framework API listening on http://localhost:${port}`));
