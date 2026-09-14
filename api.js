// Point this at your deployed backend. For local dev with `npm run dev` in server/,
// the default (http://localhost:4000) just works. Override by setting
// window.GRC_API_URL before this script loads (see index.html).
const API_URL = window.GRC_API_URL || "http://localhost:4000";

async function apiFindOrCreateAssessee(name) {
  const res = await fetch(`${API_URL}/api/assessees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to identify you");
  return res.json(); // { id, name }
}

async function apiFetchRatings(assesseeId) {
  const res = await fetch(`${API_URL}/api/ratings?assessee_id=${assesseeId}`);
  if (!res.ok) throw new Error("Failed to load your ratings");
  return res.json(); // { "DOMAIN-activityId": { competency, priority, driver, currentPractice, aiEstimatedLevel, aiReasoning, aiAssessedAt } }
}

async function apiSaveRating(assesseeId, activityKey, patch) {
  const res = await fetch(`${API_URL}/api/ratings/${assesseeId}/${activityKey}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Failed to save");
  return res.json();
}

async function apiRequestAssessment(payload) {
  const res = await fetch(`${API_URL}/api/assess`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Assessment failed");
  return data; // { estimatedLevel, reasoning }
}