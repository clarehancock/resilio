// Real SCF top-12 domains (by relevance to ISO 27001, 27701, 42001, NIS2, DORA, SOC 2, EU AI Act).
// Each domain gets a small set of genuinely distinct named practices - siblings, not
// pipeline stages - the same way Pragmatic's columns hold different activities, not
// steps of one activity.

const PILLARS = [
  { id: "ai", name: "AI Governance" },
  { id: "privacy", name: "Privacy" },
  { id: "security", name: "Security" },
];

const DOMAINS = [
  {
    code: "AAT",
    name: "AI & Autonomous Technologies",
    color: "#8C4B6B",
    pillar: "ai",
    activities: [
      { id: "safeguards", label: "Trustworthy AI Safeguards" },
      { id: "testing", label: "AI Testing & Validation" },
    ],
  },
  {
    code: "PRI",
    name: "Data Privacy",
    color: "#4A5D8A",
    pillar: "privacy",
    activities: [
      { id: "program", label: "Privacy Program" },
      { id: "rights", label: "Data Subject Rights Management" },
      { id: "protection", label: "Personal Data Protection" },
    ],
  },
  {
    code: "DCH",
    name: "Data Classification & Handling",
    color: "#7A6A9E",
    pillar: "privacy",
    activities: [
      { id: "classification", label: "Data & Asset Classification" },
      { id: "handling", label: "Data Handling, Disposal & Scanning" },
    ],
  },
  {
    code: "GOV",
    name: "Security, Compliance & Resilience Governance",
    color: "#6B4C3A",
    pillar: "security",
    activities: [
      { id: "program", label: "Governance Program & Charter" },
      { id: "docs", label: "Roles, Responsibilities & Documentation" },
    ],
  },
  {
    code: "RSK",
    name: "Risk Management",
    color: "#A23E33",
    pillar: "security",
    activities: [
      { id: "identify", label: "Risk Identification & Assessment" },
      { id: "treat", label: "Risk Treatment Planning" },
      { id: "monitor", label: "Risk Monitoring & Response" },
    ],
  },
  {
    code: "TPM",
    name: "Third-Party Management",
    color: "#B8863B",
    pillar: "security",
    activities: [
      { id: "inventory", label: "Vendor Inventory & Due Diligence" },
      { id: "contracts", label: "Contractual Safeguards" },
      { id: "monitor", label: "Vendor Monitoring & Breach Notification" },
    ],
  },
  {
    code: "HRS",
    name: "Human Resources Security",
    color: "#5B7553",
    pillar: "security",
    activities: [
      { id: "onboarding", label: "Personnel Screening & Onboarding" },
      { id: "roles", label: "Role & Privilege Management" },
      { id: "offboarding", label: "Offboarding, Sanctions & Investigations" },
    ],
  },
  {
    code: "BCD",
    name: "Business Continuity & Disaster Recovery",
    color: "#33586B",
    pillar: "security",
    activities: [
      { id: "program", label: "BC/DR Program & Planning" },
      { id: "backup", label: "Backup & Recovery Operations" },
      { id: "review", label: "Post-Incident Review & Lessons Learned" },
    ],
  },
  {
    code: "CPL",
    name: "Compliance",
    color: "#3E6B65",
    pillar: "security",
    activities: [
      { id: "program", label: "Regulatory Compliance Program" },
      { id: "monitoring", label: "Compliance Monitoring & Evidence" },
      { id: "handling", label: "Non-Compliance Handling" },
    ],
  },
  {
    code: "IRO",
    name: "Incident Response",
    color: "#C1666B",
    pillar: "security",
    activities: [
      { id: "readiness", label: "IR Program & Readiness" },
      { id: "detection", label: "Incident Detection & Tracking" },
      { id: "handling", label: "Incident Handling & Recovery" },
    ],
  },
  {
    code: "PRM",
    name: "Project & Resource Management",
    color: "#6B8E6B",
    pillar: "security",
    activities: [
      { id: "portfolio", label: "Security Portfolio & Resource Management" },
      { id: "sdlc", label: "Secure Development Lifecycle" },
    ],
  },
  {
    code: "IAC",
    name: "Identification & Authentication",
    color: "#4B6B8C",
    pillar: "security",
    activities: [
      { id: "governance", label: "Identity & Access Governance" },
      { id: "provisioning", label: "Provisioning & De-provisioning" },
      { id: "review", label: "Access Review & Emergency Access" },
    ],
  },
];