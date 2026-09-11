// Real SCF top-12 domains (by relevance to ISO 27001, 27701, 42001, NIS2, DORA, SOC 2, EU AI Act).
// Each domain gets a small set of genuinely distinct named practices - siblings, not
// pipeline stages - the same way Pragmatic's columns hold different activities, not
// steps of one activity.

const FUNCTIONS = [
  { id: "govern", name: "Govern" },
  { id: "identify", name: "Identify" },
  { id: "protect", name: "Protect" },
  { id: "detect", name: "Detect" },
  { id: "respond", name: "Respond" },
  { id: "recover", name: "Recover" },
];

const DOMAINS = [
  {
    code: "AAT",
    name: "AI & Autonomous Technologies",
    color: "#8C4B6B",
    activities: [
      { id: "safeguards", label: "Trustworthy AI Safeguards", fn: "protect" },
      { id: "testing", label: "AI Testing & Validation", fn: "detect" },
    ],
  },
  {
    code: "GOV",
    name: "Security, Compliance & Resilience Governance",
    color: "#6B4C3A",
    activities: [
      { id: "program", label: "Governance Program & Charter", fn: "govern" },
      { id: "docs", label: "Roles, Responsibilities & Documentation", fn: "govern" },
    ],
  },
  {
    code: "RSK",
    name: "Risk Management",
    color: "#A23E33",
    activities: [
      { id: "identify", label: "Risk Identification & Assessment", fn: "identify" },
      { id: "treat", label: "Risk Treatment Planning", fn: "protect" },
      { id: "monitor", label: "Risk Monitoring", fn: "detect" },
    ],
  },
  {
    code: "CPL",
    name: "Compliance",
    color: "#3E6B65",
    activities: [
      { id: "program", label: "Regulatory Compliance Program", fn: "govern" },
      { id: "monitoring", label: "Compliance Monitoring & Evidence", fn: "detect" },
      { id: "handling", label: "Non-Compliance Handling", fn: "respond" },
    ],
  },
  {
    code: "PRI",
    name: "Data Privacy",
    color: "#4A5D8A",
    activities: [
      { id: "program", label: "Privacy Program", fn: "govern" },
      { id: "rights", label: "Data Subject Rights Management", fn: "respond" },
      { id: "protection", label: "Personal Data Protection", fn: "protect" },
    ],
  },
  {
    code: "DCH",
    name: "Data Classification & Handling",
    color: "#7A6A9E",
    activities: [
      { id: "classification", label: "Data & Asset Classification", fn: "identify" },
      { id: "handling", label: "Data Handling, Disposal & Scanning", fn: "protect" },
    ],
  },
  {
    code: "TPM",
    name: "Third-Party Management",
    color: "#B8863B",
    activities: [
      { id: "inventory", label: "Vendor Inventory & Due Diligence", fn: "identify" },
      { id: "contracts", label: "Contractual Safeguards", fn: "protect" },
      { id: "monitor", label: "Vendor Breach Monitoring", fn: "detect" },
    ],
  },
  {
    code: "HRS",
    name: "Human Resources Security",
    color: "#5B7553",
    activities: [
      { id: "onboarding", label: "Personnel Screening & Onboarding", fn: "identify" },
      { id: "roles", label: "Role & Privilege Management", fn: "protect" },
      { id: "offboarding", label: "Offboarding, Sanctions & Investigations", fn: "respond" },
    ],
  },
  {
    code: "BCD",
    name: "Business Continuity & Disaster Recovery",
    color: "#33586B",
    activities: [
      { id: "program", label: "BC/DR Program & Planning", fn: "govern" },
      { id: "backup", label: "Backup & Recovery Operations", fn: "protect" },
      { id: "review", label: "Post-Incident Review & Lessons Learned", fn: "recover" },
    ],
  },
  {
    code: "IRO",
    name: "Incident Response",
    color: "#C1666B",
    activities: [
      { id: "readiness", label: "IR Program & Readiness", fn: "govern" },
      { id: "detection", label: "Incident Detection & Tracking", fn: "detect" },
      { id: "handling", label: "Incident Handling & Recovery", fn: "respond" },
    ],
  },
  {
    code: "PRM",
    name: "Project & Resource Management",
    color: "#6B8E6B",
    activities: [
      { id: "portfolio", label: "Security Portfolio & Resource Management", fn: "govern" },
      { id: "sdlc", label: "Secure Development Lifecycle", fn: "protect" },
    ],
  },
  {
    code: "IAC",
    name: "Identification & Authentication",
    color: "#4B6B8C",
    activities: [
      { id: "governance", label: "Identity & Access Governance", fn: "govern" },
      { id: "provisioning", label: "Provisioning & De-provisioning", fn: "protect" },
      { id: "review", label: "Access Review", fn: "detect" },
    ],
  },
];