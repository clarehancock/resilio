// ---- State ----
// ratings: { "CODE-function": { competency, priority, driver } }
let ratings = {};
try {
  ratings = JSON.parse(localStorage.getItem("grc-ratings") || "{}");
} catch (e) {
  ratings = {};
}

const DRIVERS = [
  { id: "strategic", label: "Strategic choice" },
  { id: "regulatory", label: "Regulatory deadline" },
  { id: "audit", label: "Audit finding" },
  { id: "contractual", label: "Contractual" },
];

function cellKey(domainCode, activityId) {
  return `${domainCode}-${activityId}`;
}

function saveRatings() {
  localStorage.setItem("grc-ratings", JSON.stringify(ratings));
}

function updateRating(domainCode, activityId, patch) {
  const key = cellKey(domainCode, activityId);
  const current = ratings[key] || { competency: null, priority: null, driver: null };
  ratings[key] = { ...current, ...patch };
  saveRatings();
  renderAll();
}

function gapColor(gap) {
  if (gap >= 3) return "var(--red)";
  if (gap >= 1) return "var(--amber)";
  return "var(--green)";
}

function allRatedCells() {
  const out = [];
  for (const domain of DOMAINS) {
    for (const activity of domain.activities) {
      const r = ratings[cellKey(domain.code, activity.id)];
      if (r && r.competency != null && r.priority != null) {
        out.push({
          domain,
          activity,
          competency: r.competency,
          priority: r.priority,
          driver: r.driver,
          gap: r.priority - r.competency,
        });
      }
    }
  }
  return out;
}

// ---- Tabs ----

document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  const target = btn.dataset.tab;
  document.querySelectorAll(".view").forEach((v) => (v.hidden = true));
  document.getElementById(`view-${target}`).hidden = false;
});

// ---- Grid view ----

function renderGrid() {
  const el = document.getElementById("view-grid");
  const totalCells = DOMAINS.reduce((n, d) => n + d.activities.length, 0);
  const ratedCount = allRatedCells().length;

  const columns = FUNCTIONS.map((fn) => {
    const items = [];
    DOMAINS.forEach((domain) => {
      domain.activities.forEach((activity) => {
        if (activity.fn === fn.id) items.push({ domain, activity });
      });
    });

    const boxes = items
      .map(({ domain, activity }) => {
        const key = cellKey(domain.code, activity.id);
        const r = ratings[key];
        const rated = r && r.competency != null && r.priority != null;
        const ringStyle = rated ? `box-shadow:0 0 0 3px ${gapColor(r.priority - r.competency)}` : "";
        const title = rated
          ? `${activity.label} (${domain.code}) — Competency ${r.competency}, Priority ${r.priority}`
          : `${activity.label} (${domain.code}) — not yet rated`;
        return `
          <button class="activity-box" style="background:${fn.color};${ringStyle}"
            data-domain="${domain.code}" data-activity="${activity.id}" title="${title}">
            <span class="scf-tag">${domain.code}</span>
            ${activity.label}
          </button>`;
      })
      .join("");

    return `
      <div class="domain-column">
        <div class="box-stack">${boxes}</div>
        <div class="domain-label">${fn.name}</div>
      </div>`;
  }).join("");

  el.innerHTML = `
    <div class="grid-meta"><strong>${ratedCount} / ${totalCells}</strong> activities scored — click any box to rate it</div>
    <div class="grid-scroll">
      <div class="domain-row">${columns}</div>
    </div>
  `;

  el.querySelectorAll(".activity-box").forEach((box) => {
    box.addEventListener("click", () => {
      openModal(box.dataset.domain, box.dataset.activity);
    });
  });
}

// ---- Modal ----

function openModal(domainCode, activityId) {
  const domain = DOMAINS.find((d) => d.code === domainCode);
  const activity = domain.activities.find((a) => a.id === activityId);
  const key = cellKey(domainCode, activityId);
  const rating = ratings[key] || { competency: null, priority: null, driver: null };

  const root = document.getElementById("modal-root");

  const scoreButtons = (kind, value, colorClass) =>
    [1, 2, 3, 4, 5]
      .map(
        (n) => `<button class="score-btn ${n === value ? "selected " + colorClass : ""}" data-kind="${kind}" data-value="${n}">${n}</button>`
      )
      .join("");

  const driverChips = DRIVERS.map(
    (d) => `<button class="driver-chip ${rating.driver === d.id ? "selected" : ""}" data-driver="${d.id}">${d.label}</button>`
  ).join("");

  const gap = rating.competency != null && rating.priority != null ? rating.priority - rating.competency : null;
  const gapText =
    gap == null
      ? ""
      : `<div class="gap-summary">Gap: <strong style="color:${gapColor(gap)}">${gap}</strong>${
          gap >= 3 ? " — urgent focus area" : gap >= 1 ? " — worth attention" : " — currently in good shape"
        }</div>`;

  root.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop">
      <div class="modal">
        <div class="modal-head">
          <div>
            <div class="modal-meta"><span class="dot" style="background:${domain.color}"></span>SCF &middot; ${domain.code}</div>
            <h3>${activity.label}</h3>
          </div>
          <button class="modal-close" id="modal-close">&times;</button>
        </div>

        <div class="score-row">
          <div class="label">Competency</div>
          <div class="hint">How good are we at this today?</div>
          <div class="score-buttons">${scoreButtons("competency", rating.competency, "competency")}</div>
        </div>

        <div class="score-row">
          <div class="label">Priority</div>
          <div class="hint">How much does improving this matter right now?</div>
          <div class="score-buttons">${scoreButtons("priority", rating.priority, "priority")}</div>
        </div>

        <div class="driver-row">
          <div class="label">What's driving the priority?</div>
          <div class="driver-chips">${driverChips}</div>
        </div>

        <div id="gap-summary">${gapText}</div>
      </div>
    </div>
  `;

  root.querySelector("#modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "modal-backdrop") closeModal();
  });
  root.querySelector("#modal-close").addEventListener("click", closeModal);

  root.querySelectorAll(".score-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const kind = btn.dataset.kind;
      const value = Number(btn.dataset.value);
      updateRating(domainCode, activityId, { [kind]: value });
      openModal(domainCode, activityId);
    });
  });

  root.querySelectorAll(".driver-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const driverId = chip.dataset.driver;
      const current = ratings[key] || {};
      updateRating(domainCode, activityId, { driver: current.driver === driverId ? null : driverId });
      openModal(domainCode, activityId);
    });
  });
}

function closeModal() {
  document.getElementById("modal-root").innerHTML = "";
}

// ---- Matrix view ----

function renderMatrix() {
  const el = document.getElementById("view-matrix");
  const cells = allRatedCells();

  if (cells.length === 0) {
    el.innerHTML = `<div class="empty-state">Score a few activities in the Framework Grid to see them plotted here.</div>`;
    return;
  }

  const W = 640,
    H = 420,
    PAD = 44;
  const scale = (v) => PAD + ((v - 0.5) / 5) * (W - PAD * 2);
  const scaleY = (v) => H - PAD - ((v - 0.5) / 5) * (H - PAD * 2);

  let points = "";
  cells.forEach((c) => {
    const x = scale(c.competency);
    const y = scaleY(c.priority);
    points += `<circle cx="${x}" cy="${y}" r="6" fill="${c.domain.color}" fill-opacity="0.85">
      <title>${c.domain.code}\n${c.activity.label}\nC${c.competency} P${c.priority}</title>
    </circle>`;
  });

  const midX = scale(2.5),
    midY = scaleY(2.5);

  const legend = Object.values(
    cells.reduce((acc, c) => {
      acc[c.domain.code] = c.domain;
      return acc;
    }, {})
  )
    .map((d) => `<div class="legend-item"><span class="legend-swatch" style="background:${d.color}"></span>${d.name}</div>`)
    .join("");

  el.innerHTML = `
    <p class="matrix-intro">Each point is a scored activity. Low competency + high priority (top left) is where to focus next.</p>
    <div class="matrix-panel">
      <div class="quadrant-label" style="top:22px;left:30px;color:var(--red)">FIX NOW</div>
      <div class="quadrant-label" style="top:22px;right:20px;color:var(--green)">PROTECT</div>
      <div class="quadrant-label" style="bottom:40px;left:30px;color:var(--muted)">MONITOR</div>
      <div class="quadrant-label" style="bottom:40px;right:20px;color:var(--amber)">MAINTAIN</div>
      <svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block">
        <line x1="${midX}" y1="${PAD}" x2="${midX}" y2="${H - PAD}" stroke="var(--border)" stroke-dasharray="4 4" />
        <line x1="${PAD}" y1="${midY}" x2="${W - PAD}" y2="${midY}" stroke="var(--border)" stroke-dasharray="4 4" />
        <line x1="${PAD}" y1="${H - PAD}" x2="${W - PAD}" y2="${H - PAD}" stroke="var(--border)" />
        <line x1="${PAD}" y1="${PAD}" x2="${PAD}" y2="${H - PAD}" stroke="var(--border)" />
        <text x="${W / 2}" y="${H - 10}" text-anchor="middle" font-size="12" fill="var(--muted)" font-family="IBM Plex Sans">Competency</text>
        <text x="16" y="${H / 2}" text-anchor="middle" font-size="12" fill="var(--muted)" font-family="IBM Plex Sans" transform="rotate(-90 16 ${H / 2})">Priority</text>
        ${points}
      </svg>
    </div>
    <div class="matrix-legend">${legend}</div>
  `;
}

// ---- Focus view ----

function renderFocus() {
  const el = document.getElementById("view-focus");
  const cells = allRatedCells();

  if (cells.length === 0) {
    el.innerHTML = `<div class="empty-state">Score a few activities in the Framework Grid to generate a roadmap.</div>`;
    return;
  }

  const sorted = cells.filter((c) => c.gap > 0).sort((a, b) => b.gap - a.gap);

  if (sorted.length === 0) {
    el.innerHTML = `<div class="empty-state">No urgent gaps — every scored activity has priority at or below competency. Nice work.</div>`;
    return;
  }

  const rows = sorted
    .map(
      (c) => `
    <button class="focus-row" style="border-left:4px solid ${gapColor(c.gap)}" data-domain="${c.domain.code}" data-activity="${c.activity.id}">
      <div>
        <div class="meta">${c.domain.code}${c.driver ? " &middot; " + DRIVERS.find((d) => d.id === c.driver)?.label : ""}</div>
        <div class="activity">${c.activity.label}</div>
      </div>
      <div class="focus-scores">
        <div class="focus-score-dot"><div class="value">${c.competency}</div><div class="label">C</div></div>
        <div class="focus-score-dot"><div class="value">${c.priority}</div><div class="label">P</div></div>
        <div class="focus-gap" style="color:${gapColor(c.gap)}">+${c.gap}</div>
      </div>
    </button>`
    )
    .join("");

  el.innerHTML = `
    <p class="focus-intro">Scored activities where priority outweighs competency, ranked by the size of the gap.</p>
    <div class="focus-list">${rows}</div>
  `;

  el.querySelectorAll(".focus-row").forEach((row) => {
    row.addEventListener("click", () => openModal(row.dataset.domain, row.dataset.activity));
  });
}

// ---- Render everything ----

function renderAll() {
  renderGrid();
  renderMatrix();
  renderFocus();
}

renderAll();