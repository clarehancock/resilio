// ---- State ----
// ratings: { "CODE-activityId": { competency, priority, driver, currentPractice, aiEstimatedLevel, aiReasoning, aiAssessedAt } }
let ratings = {};
let ASSESSEE = null; // { id, name }

const DRIVERS = [
  { id: "strategic", label: "Strategic choice" },
  { id: "regulatory", label: "Regulatory deadline" },
  { id: "audit", label: "Audit finding" },
  { id: "contractual", label: "Contractual" },
];

function cellKey(domainCode, activityId) {
  return `${domainCode}-${activityId}`;
}

async function updateRating(domainCode, activityId, patch) {
  const key = cellKey(domainCode, activityId);
  const current = ratings[key] || { competency: null, priority: null, driver: null, currentPractice: null };
  const next = { ...current, ...patch };
  ratings[key] = next; // optimistic
  renderAll();
  try {
    await apiSaveRating(ASSESSEE.id, key, {
      competency: next.competency,
      priority: next.priority,
      driver: next.driver,
      currentPractice: next.currentPractice,
    });
  } catch (err) {
    console.error("Failed to save rating:", err);
    ratings[key] = current; // revert
    renderAll();
  }
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
          currentPractice: r.currentPractice,
          aiEstimatedLevel: r.aiEstimatedLevel,
          aiReasoning: r.aiReasoning,
          gap: r.priority - r.competency,
        });
      }
    }
  }
  return out;
}

// ---- Identity gate ----
// Name-only, no auth: re-entering the same name returns the same person's data.
// This is intentional for an internal prototype - see README for the tradeoff.

function renderGate(errorMsg) {
  const root = document.getElementById("gate-root");
  document.getElementById("page-root").hidden = true;
  root.innerHTML = `
    <div class="gate-wrap">
      <div class="gate-card">
        <div class="eyebrow">SCF-ANCHORED &middot; PROTOTYPE</div>
        <h1 class="gate-title">The GRC Practice Framework</h1>
        <p class="gate-subtitle">What's your name? Enter the same name next time to pick up where you left off.</p>
        <form id="gate-form">
          <input type="text" id="gate-name" class="gate-input" placeholder="e.g. Dave" autocomplete="off" data-lpignore="true" autofocus />
          <button type="submit" class="gate-btn">Continue</button>
        </form>
        ${errorMsg ? `<div class="gate-error">${errorMsg}</div>` : ""}
      </div>
    </div>
  `;
  document.getElementById("gate-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("gate-name").value.trim();
    if (!name) return;
    try {
      const assessee = await apiFindOrCreateAssessee(name);
      localStorage.setItem("grc-assessee", JSON.stringify(assessee));
      await startApp(assessee);
    } catch (err) {
      renderGate(err.message || "Something went wrong - is the backend running?");
    }
  });
}

async function startApp(assessee) {
  ASSESSEE = assessee;
  try {
    ratings = await apiFetchRatings(assessee.id);
  } catch (err) {
    renderGate(err.message || "Couldn't load your data - is the backend running?");
    return;
  }
  document.getElementById("gate-root").innerHTML = "";
  renderPageShell();
  document.getElementById("page-root").hidden = false;
  renderAll();
}

function switchUser() {
  localStorage.removeItem("grc-assessee");
  ASSESSEE = null;
  ratings = {};
  document.getElementById("page-root").hidden = true;
  renderGate();
}

function renderPageShell() {
  const root = document.getElementById("page-root");
  root.innerHTML = `
    <header class="header">
      <div class="header-top">
        <div class="eyebrow">SCF-ANCHORED &middot; PROTOTYPE</div>
        <button class="switch-user-btn" id="switch-user-btn">${ASSESSEE.name} &middot; switch user</button>
      </div>
      <h1>The GRC Practice Framework</h1>
      <p class="subtitle">
        Security, Privacy &amp; AI Governance activities, drawn from the real Secure Controls
        Framework (SCF) and mapped to ISO 27001, ISO 27701, ISO 42001, NIS2, DORA, SOC 2 and the
        EU AI Act. Score your competency and priority for each activity to build a focused roadmap.
      </p>
    </header>

    <nav class="tabs" id="tabs">
      <button class="tab active" data-tab="grid">Framework Grid</button>
      <button class="tab" data-tab="matrix">Priority Matrix</button>
      <button class="tab" data-tab="focus">Focus Roadmap</button>
    </nav>

    <main>
      <section id="view-grid" class="view"></section>
      <section id="view-matrix" class="view" hidden></section>
      <section id="view-focus" class="view" hidden></section>
    </main>
  `;

  document.getElementById("tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.dataset.tab;
    document.querySelectorAll(".view").forEach((v) => (v.hidden = true));
    document.getElementById(`view-${target}`).hidden = false;
  });

  document.getElementById("switch-user-btn").addEventListener("click", switchUser);
}

// ---- Grid view ----

const NAVY = "#264160";
const BOX_H = 66, BOX_MARGIN = 16;
const SLOT = BOX_H + BOX_MARGIN; // total vertical space one box occupies

function renderGrid() {
  const el = document.getElementById("view-grid");
  const totalCells = DOMAINS.reduce((n, d) => n + d.activities.length, 0);
  const ratedCount = allRatedCells().length;

  const byFn = {};
  FUNCTIONS.forEach((fn) => (byFn[fn.id] = []));
  DOMAINS.forEach((domain) => {
    domain.activities.forEach((activity) => {
      byFn[activity.fn].push({ domain, activity });
    });
  });

  // Split each column's own items roughly evenly above/below - pure visual balance,
  // not a semantic grouping. The extra item (for odd counts) goes above.
  const splits = {};
  FUNCTIONS.forEach((fn) => {
    const n = byFn[fn.id].length;
    const aboveCount = Math.ceil(n / 2);
    splits[fn.id] = { above: byFn[fn.id].slice(0, aboveCount), below: byFn[fn.id].slice(aboveCount) };
  });

  const aboveHeight = Math.max(...FUNCTIONS.map((f) => splits[f.id].above.length)) * SLOT;
  const belowHeight = Math.max(...FUNCTIONS.map((f) => splits[f.id].below.length)) * SLOT;

  const renderBox = ({ domain, activity }) => {
    const key = cellKey(domain.code, activity.id);
    const r = ratings[key];
    const rated = r && r.competency != null && r.priority != null;
    const ringStyle = rated ? `box-shadow:0 0 0 3px ${gapColor(r.priority - r.competency)}` : "";
    const title = rated
      ? `${activity.label} (${domain.code}) — Competency ${r.competency}, Priority ${r.priority}`
      : `${activity.label} (${domain.code}) — not yet rated`;
    return `
      <button class="activity-box" style="background:${NAVY};${ringStyle}"
        data-domain="${domain.code}" data-activity="${activity.id}" title="${title}">
        <span class="scf-tag">${domain.code}</span>
        ${activity.label}
      </button>`;
  };

  const columns = FUNCTIONS.map((fn) => {
    const { above, below } = splits[fn.id];
    return `
      <div class="domain-column">
        <div class="above-region" style="height:${aboveHeight}px">${above.map(renderBox).join("")}</div>
        <div class="domain-label">${fn.name}</div>
        <div class="below-region" style="height:${belowHeight}px">${below.map(renderBox).join("")}</div>
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
  const rating = ratings[key] || { competency: null, priority: null, driver: null, currentPractice: null };

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

        <div class="practice-row">
          <div class="label">What do you currently do here?</div>
          <div class="hint">Optional — a few sentences on your actual current practice. This will be used later to give you more tailored guidance.</div>
          <textarea class="practice-input" id="practice-input" rows="3" data-lpignore="true" data-1p-ignore data-bwignore data-form-type="other" placeholder="e.g. We run an annual risk assessment led by IT, but it's not tied to a formal register...">${rating.currentPractice || ""}</textarea>
          <div class="practice-save-row">
            <button class="practice-save-btn" id="practice-save-btn">Save note</button>
            <span class="practice-saved-msg" id="practice-saved-msg" hidden>Saved &#10003;</span>
          </div>
        </div>

        <div class="ai-check-row">
          <div class="label">AI reality check</div>
          <div class="hint">Compares your self-rating against the real SCF maturity levels, based on what you described above.</div>
          <div id="ai-check-area">${renderAiCheckArea(rating)}</div>
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

  root.querySelector("#practice-input").addEventListener("blur", (e) => {
    updateRating(domainCode, activityId, { currentPractice: e.target.value });
    // no re-render of the modal here - would drop focus mid-edit; the grid/matrix/focus views
    // update via updateRating's renderAll(), the modal itself stays as-is.
  });

  root.querySelector("#practice-save-btn").addEventListener("click", () => {
    const value = root.querySelector("#practice-input").value;
    updateRating(domainCode, activityId, { currentPractice: value });
    const msg = root.querySelector("#practice-saved-msg");
    msg.hidden = false;
    clearTimeout(msg._hideTimer);
    msg._hideTimer = setTimeout(() => {
      msg.hidden = true;
    }, 2000);
  });

  const attachAiCheckHandler = () => {
    const btn = root.querySelector("#ai-check-btn");
    if (!btn) return;
    btn.addEventListener("click", async () => {
      const area = root.querySelector("#ai-check-area");
      const currentText = root.querySelector("#practice-input").value;
      area.innerHTML = `<div class="ai-loading">Checking against the real maturity levels...</div>`;
      try {
        const domainCmm = (typeof SCF_DETAIL !== "undefined" && SCF_DETAIL.domainCmm[domainCode]) || [];
        const result = await apiRequestAssessment({
          assesseeId: ASSESSEE.id,
          activityKey: key,
          domainName: domain.name,
          domainCode: domain.code,
          activityLabel: activity.label,
          competency: rating.competency,
          priority: rating.priority,
          driver: rating.driver,
          currentPractice: currentText,
          cmmLevels: domainCmm,
        });
        ratings[key] = { ...ratings[key], aiEstimatedLevel: result.estimatedLevel, aiReasoning: result.reasoning };
        area.innerHTML = renderAiCheckArea(ratings[key]);
        attachAiCheckHandler();
      } catch (err) {
        area.innerHTML = `<div class="ai-check-error">${err.message}</div>` + renderAiCheckArea(rating, true);
        attachAiCheckHandler();
      }
    });
  };
  attachAiCheckHandler();
}

function renderAiCheckArea(rating, keepButtonOnly) {
  const btnLabel = rating.aiEstimatedLevel != null ? "Re-check" : "Check my rating";
  const btn = `<button class="ai-check-btn" id="ai-check-btn">${btnLabel}</button>`;
  if (keepButtonOnly || rating.aiEstimatedLevel == null) return btn;

  const diff = rating.competency != null ? rating.aiEstimatedLevel - rating.competency : null;
  const diffText =
    diff == null
      ? ""
      : diff === 0
      ? "That matches your self-rating."
      : diff > 0
      ? `That's higher than your self-rating of ${rating.competency} — you may be underselling yourself.`
      : `That's lower than your self-rating of ${rating.competency} — worth a closer look.`;

  return `
    <div class="ai-result-card">
      <div class="ai-result-head">AI estimate: Level ${rating.aiEstimatedLevel} <span class="ai-result-diff">${diffText}</span></div>
      <div class="ai-result-text">${rating.aiReasoning}</div>
    </div>
    ${btn}`;
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

  const SIZE = 560,
    PAD = 48;
  const scale = (v) => PAD + ((v - 0.5) / 5) * (SIZE - PAD * 2);
  const scaleY = (v) => SIZE - PAD - ((v - 0.5) / 5) * (SIZE - PAD * 2);
  const mid = scale(3); // true center of the 1-5 scale, not 2.5

  let points = "";
  cells.forEach((c) => {
    const fn = FUNCTIONS.find((f) => f.id === c.activity.fn);
    const x = scale(c.competency);
    const y = scaleY(c.priority);
    points += `<circle cx="${x}" cy="${y}" r="7" fill="${fn.color}" fill-opacity="0.88" stroke="#fff" stroke-width="1.5"
      class="matrix-dot" data-domain="${c.domain.code}" data-activity="${c.activity.id}"
      data-label="${c.activity.label}" data-fn="${fn.name}" data-code="${c.domain.code}"
      data-c="${c.competency}" data-p="${c.priority}" />`;
  });

  const legend = FUNCTIONS.filter((fn) => cells.some((c) => c.activity.fn === fn.id))
    .map((fn) => `<div class="legend-item"><span class="legend-swatch" style="background:${fn.color}"></span>${fn.name}</div>`)
    .join("");

  el.innerHTML = `
    <p class="matrix-intro">Each point is a scored activity, colored by function. Low competency + high priority (top left) is where to focus next.</p>
    <div class="matrix-panel">
      <div class="quadrant-label" style="top:22px;left:30px;color:var(--red)">FIX NOW</div>
      <div class="quadrant-label" style="top:22px;right:20px;color:var(--green)">PROTECT</div>
      <div class="quadrant-label" style="bottom:40px;left:30px;color:var(--muted)">MONITOR</div>
      <div class="quadrant-label" style="bottom:40px;right:20px;color:var(--amber)">MAINTAIN</div>
      <svg viewBox="0 0 ${SIZE} ${SIZE}" style="width:100%;height:auto;display:block" id="matrix-svg">
        <line x1="${mid}" y1="${PAD}" x2="${mid}" y2="${SIZE - PAD}" stroke="var(--border)" stroke-dasharray="4 4" />
        <line x1="${PAD}" y1="${mid}" x2="${SIZE - PAD}" y2="${mid}" stroke="var(--border)" stroke-dasharray="4 4" />
        <line x1="${PAD}" y1="${SIZE - PAD}" x2="${SIZE - PAD}" y2="${SIZE - PAD}" stroke="var(--border)" />
        <line x1="${PAD}" y1="${PAD}" x2="${PAD}" y2="${SIZE - PAD}" stroke="var(--border)" />
        <text x="${SIZE / 2}" y="${SIZE - 12}" text-anchor="middle" font-size="12" fill="var(--muted)" font-family="IBM Plex Sans">Competency</text>
        <text x="16" y="${SIZE / 2}" text-anchor="middle" font-size="12" fill="var(--muted)" font-family="IBM Plex Sans" transform="rotate(-90 16 ${SIZE / 2})">Priority</text>
        ${points}
      </svg>
    </div>
    <div class="matrix-legend">${legend}</div>
    <div class="matrix-tooltip" id="matrix-tooltip" hidden></div>
  `;

  const tooltip = document.getElementById("matrix-tooltip");
  el.querySelectorAll(".matrix-dot").forEach((dot) => {
    dot.addEventListener("mouseenter", () => {
      tooltip.innerHTML = `${dot.dataset.code} &middot; ${dot.dataset.label}`;
      tooltip.hidden = false;
    });
    dot.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.clientX + 14 + "px";
      tooltip.style.top = e.clientY + 14 + "px";
    });
    dot.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });
    dot.addEventListener("click", () => {
      openModal(dot.dataset.domain, dot.dataset.activity);
    });
  });
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
    .map((c) => {
      const key = cellKey(c.domain.code, c.activity.id);
      const detail = (typeof SCF_DETAIL !== "undefined" && SCF_DETAIL.activityControls[key]) || null;
      const cmm = (typeof SCF_DETAIL !== "undefined" && SCF_DETAIL.domainCmm[c.domain.code]) || null;
      const currentLevel = cmm ? cmm.find((l) => l.level === c.competency) : null;
      const targetLevel = cmm ? cmm.find((l) => l.level === 5) : null;

      const controlsHtml = detail
        ? detail
            .map(
              (ctrl) => `
          <div class="control-item">
            <span class="control-id">${ctrl.id}</span>
            <span class="control-name">${ctrl.name}</span>
            <div class="control-desc">${ctrl.description}</div>
          </div>`
            )
            .join("")
        : "";

      const levelsHtml = currentLevel && targetLevel
        ? `
          <div class="level-compare">
            <div class="level-card">
              <div class="level-card-head">Where you are — Level ${currentLevel.level}: ${currentLevel.label}</div>
              <div class="level-card-text">${currentLevel.text}</div>
            </div>
            <div class="level-card level-card-target">
              <div class="level-card-head">Level 5: ${targetLevel.label}</div>
              <div class="level-card-text">${targetLevel.text}</div>
            </div>
          </div>`
        : "";

      const practiceHtml = c.currentPractice
        ? `<div class="practice-card"><div class="practice-card-head">What you said you currently do</div><div class="practice-card-text">${c.currentPractice}</div></div>`
        : `<button class="practice-card practice-card-empty" data-domain="${c.domain.code}" data-activity="${c.activity.id}">+ Add what you currently do here, to get more tailored guidance later</button>`;

      return `
      <div class="focus-item">
        <button class="focus-row" style="border-left:4px solid ${gapColor(c.gap)}" data-key="${key}">
          <div>
            <div class="meta">${c.domain.code}${c.driver ? " &middot; " + DRIVERS.find((d) => d.id === c.driver)?.label : ""}</div>
            <div class="activity">${c.activity.label}</div>
          </div>
          <div class="focus-scores">
            <div class="focus-score-dot"><div class="value">${c.competency}</div><div class="label">C</div></div>
            <div class="focus-score-dot"><div class="value">${c.priority}</div><div class="label">P</div></div>
            <div class="focus-gap" style="color:${gapColor(c.gap)}">+${c.gap}</div>
            <span class="focus-chevron">&rsaquo;</span>
          </div>
        </button>
        <div class="focus-detail" id="detail-${key}" hidden>
          ${practiceHtml}
          ${levelsHtml}
          ${detail ? `<div class="controls-head">Controls behind this activity (SCF)</div><div class="controls-list">${controlsHtml}</div>` : ""}
          <button class="edit-rating-btn" data-domain="${c.domain.code}" data-activity="${c.activity.id}">Update rating</button>
        </div>
      </div>`;
    })
    .join("");

  el.innerHTML = `
    <p class="focus-intro">Scored activities where priority outweighs competency, ranked by the size of the gap. Click any item to see what good looks like.</p>
    <div class="focus-list">${rows}</div>
  `;

  el.querySelectorAll(".focus-row").forEach((row) => {
    row.addEventListener("click", () => {
      const panel = document.getElementById(`detail-${row.dataset.key}`);
      const wasHidden = panel.hidden;
      el.querySelectorAll(".focus-detail").forEach((p) => (p.hidden = true));
      el.querySelectorAll(".focus-row").forEach((r) => r.classList.remove("expanded"));
      if (wasHidden) {
        panel.hidden = false;
        row.classList.add("expanded");
      }
    });
  });

  el.querySelectorAll(".edit-rating-btn, .practice-card-empty").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(btn.dataset.domain, btn.dataset.activity);
    });
  });
}

// ---- Render everything ----

function renderAll() {
  try {
    renderGrid();
  } catch (err) {
    console.error("Grid render failed:", err);
    document.getElementById("view-grid").innerHTML = `<div class="empty-state">Something went wrong rendering the grid: ${err.message}. Check the browser console for details.</div>`;
  }
  try {
    renderMatrix();
  } catch (err) {
    console.error("Matrix render failed:", err);
    document.getElementById("view-matrix").innerHTML = `<div class="empty-state">Something went wrong rendering the matrix: ${err.message}. Check the browser console for details.</div>`;
  }
  try {
    renderFocus();
  } catch (err) {
    console.error("Focus render failed:", err);
    document.getElementById("view-focus").innerHTML = `<div class="empty-state">Something went wrong rendering the roadmap: ${err.message}. Check the browser console for details.</div>`;
  }
}

// ---- Init ----

(function init() {
  let cached = null;
  try {
    cached = JSON.parse(localStorage.getItem("grc-assessee") || "null");
  } catch (e) {
    cached = null;
  }

  if (cached && cached.id && cached.name) {
    startApp(cached);
  } else {
    renderGate();
  }
})();