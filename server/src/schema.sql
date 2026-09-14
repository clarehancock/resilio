-- Assessees: name-only identity, no auth. Re-entering the same name (case-insensitive)
-- returns the same record. Duplicate names collide on purpose - see README for why
-- that's an accepted tradeoff for this prototype.
CREATE TABLE IF NOT EXISTS assessees (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  name_key TEXT NOT NULL UNIQUE, -- lower(trim(name)), used for case-insensitive lookup
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- One row per (assessee, activity). activity_key matches the frontend's cellKey format
-- exactly: "{domainCode}-{activityId}", e.g. "RSK-identify". The activity catalog itself
-- (domains, functions, activities, CMM text, controls) stays static in the frontend's
-- data.js / scf-detail.js - this table only holds per-person dynamic state.
CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  assessee_id INT NOT NULL REFERENCES assessees(id) ON DELETE CASCADE,
  activity_key TEXT NOT NULL,
  competency INT CHECK (competency BETWEEN 1 AND 5),
  priority INT CHECK (priority BETWEEN 1 AND 5),
  driver TEXT CHECK (driver IN ('strategic', 'regulatory', 'audit', 'contractual') OR driver IS NULL),
  current_practice TEXT,
  ai_estimated_level INT CHECK (ai_estimated_level BETWEEN 0 AND 5),
  ai_reasoning TEXT,
  ai_assessed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (assessee_id, activity_key)
);
