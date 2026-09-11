// Real SCF data: per-domain CMM maturity rubric + relevant controls per activity.
// Extracted from the SCF dataset, keyed the same way ratings are (domainCode-activityId).
const SCF_DETAIL = {
  "domainCmm": {
    "AAT": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Artificial Intelligence and Autonomous Technology (AAT) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with AAT domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa AAT-related processes are expected to follow the organization's existing processes (e.g., incident response, asset management, change control, risk assessments, etc.).\n\u25aa No formal Governance, Risk & Compliance (GRC) team exists to provide AAT oversight, where the Chief Information Officer (CIO), or similar function, governs technology decisions what is acceptable for AAT within the organization."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Artificial Intelligence and Autonomous Technology (AAT) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with AAT domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with AAT domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with AAT  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Artificial Intelligence (AI)-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Asset management may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel.\n\u25aa AAT is regarded as a technology and governed by the entity's existing IT governance practices.\n\u25aa No formal Governance, Risk & Compliance (GRC) team exists to provide oversight of AAT-related activities. GRC functions are assigned to existing IT and/or cybersecurity personnel."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Artificial Intelligence and Autonomous Technology (AAT) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with AAT domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with AAT domain capabilities are well-documented and kept current by process owners.\n\u25aa An Artificial Intelligence Governance (AIG) team, or similar function, is appropriately staffed and supported to implement and maintain AAT domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of AI governance, risk management and compliance operations (e.g., dedicated AI governance platform).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with AAT domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to ensure policies, processes, procedures and practices related to the mapping, measuring and managing of AAT-related risks are in place, transparent and implemented effectively."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Utilize SCR-CMM Level 3 criteria definitions:\n\u25aa There are no defined Level 4 criteria, since it is reasonable to assume a quantitatively-controlled process is not necessary to operationalize this control. \n\u25aa While it may be possible to develop \u201cmetrics-driven\u201d capabilities for this control, the criteria would be organization-specific to define."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "GOV": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Cybersecurity & Data Protection Governance (GOV) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with GOV domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Governance-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa No formal Governance, Risk & Compliance (GRC) team exists. GRC roles are assigned to existing IT/cybersecurity personnel.\n\u25aa Cybersecurity and data protection governance is informally assigned as an additional duty to existing IT/cybersecurity personnel.\n\u25aa Basic procedures are established for important tasks, but are ad hoc and not formally documented.\n\u25aa The responsibility for developing and operating cybersecurity and data privacy procedures are up to the business process owner(s) to determine, including the definition and enforcement of roles and responsibilities.\n\u25aa Governance documentation is made available to internal personnel (e.g., policies, standards, procedures, etc.).\n\u25aa IT /cyber engineering governance is decentralized, with the responsibility for implementing and testing cybersecurity and data protection controls being assigned to the business process owner(s), including the definition and enforcement of roles and responsibilities."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Cybersecurity & Data Protection Governance (GOV) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with GOV domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with GOV domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with GOV  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Governance-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa No formal Governance, Risk & Compliance (GRC) team exists. GRC roles are assigned to existing IT and/or cybersecurity personnel.\n\u25aa IT and/or cybersecurity personnel ensure cybersecurity policies and standards are aligned with a leading cybersecurity framework (e.g., SCF, NIST 800-53, NIST 800-171, ISO 27002 or NIST Cybersecurity Framework).\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to implement and manage the organization's internal control system.\n\u25aa Legal representation is consulted on an as-needed basis."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Cybersecurity & Data Protection Governance (GOV) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with GOV domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with GOV domain capabilities are well-documented and kept current by process owners.\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, is appropriately staffed and supported to implement and maintain GOV domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of governance, risk management and compliance operations (e.g., GRC platform).\n\u25aa An implemented and operational capability exists to  facilitate the implementation of security, compliance and resilience governance controls."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Cybersecurity & Data Protection Governance (GOV) capabilities, in addition to being standardized across the entity and centrally managed to ensure consistency across Technology Assets, Applications, Services and/or Data (TAASD), efforts are metrics driven to provide sufficient insight for decision makers to predict optimal performance, ensure continued operations and/or identify areas for improvement. Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Applicable SCR-CMM Level 3 (Well Defined) capabilities are implemented and operational.\n\u25aa Metrics reporting includes quantitative analysis of Key Performance Indicators (KPIs).\n\u25aa Metrics reporting includes quantitative analysis of Key Risk Indicators (KRIs).\n\u25aa Scope of metrics, KPIs and KRIs covers organization-wide cybersecurity and data protection controls, including functions performed by third-parties.\n\u25aa Organizational leadership maintains a formal process to objectively review and respond to metrics, KPIs and KRIs (e.g., monthly or quarterly review).\n\u25aa Based on metrics analysis, process improvement recommendations are submitted for review and are handled in accordance with change control processes.\n\u25aa Business and technical stakeholders are involved in reviewing and approving proposed changes to evolve capabilities."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "RSK": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Risk Management (RSK) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with RSK domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Risk management-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa IT and/or cybersecurity personnel use an informal process to identify, assess, remediate and report on risk.\n\u25aa Risk management processes (e.g., risk assessments) focus on protecting High Value Assets (HVAs), including environments where sensitive/regulated data is stored, transmitted and processed.\n\u25aa Data/process owners are expected to self-manage risks associated with their Technology Assets, Applications, Services and/or Data (TAASD), based on the organization's published policies and standards, including the identification, remediation and reporting of risks."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Risk Management (RSK) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with RSK domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with RSK domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with RSK  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Risk management-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Risk management may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel.\n\u25aa Risk management processes (e.g., risk assessments) and technologies focus on protecting High Value Assets (HVAs), including environments where sensitive/regulated data is stored, transmitted and processed.\n\u25aa IT and/or cybersecurity personnel implement and maintain a form of Risk Management Program (RMP) that provides operational guidance on how risk is identified, assessed, remediated and reported.\n\u25aa Data/process owners are expected to self-manage risks associated with their systems, applications, services and data, based on the organization's published policies and standards, including the identification, remediation and reporting of risks.\n\u25aa Business process owners (BPOs) are made aware of cybersecurity and data protection risk(s)."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Risk Management (RSK) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with RSK domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with RSK domain capabilities are well-documented and kept current by process owners.\n\u25aa A risk management team, or similar function, is appropriately staffed and supported to implement and maintain RSK domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of risk management operations (e.g., risk management solution, GRC platform, TPRM tool, etc.).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with RSK domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to facilitate the implementation of strategic, operational and tactical risk management controls."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Risk Management (RSK) capabilities, in addition to being standardized across the entity and centrally managed to ensure consistency across Technology Assets, Applications, Services and/or Data (TAASD), efforts are metrics driven to provide sufficient insight for decision makers to predict optimal performance, ensure continued operations and/or identify areas for improvement. Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Applicable SCR-CMM Level 3 (Well Defined) capabilities are implemented and operational.\n\u25aa Metrics reporting includes quantitative analysis of Key Performance Indicators (KPIs).\n\u25aa Metrics reporting includes quantitative analysis of Key Risk Indicators (KRIs).\n\u25aa Scope of metrics, KPIs and KRIs covers organization-wide cybersecurity and data protection controls, including functions performed by third-parties.\n\u25aa Organizational leadership maintains a formal process to objectively review and respond to metrics, KPIs and KRIs (e.g., monthly or quarterly review).\n\u25aa Based on metrics analysis, process improvement recommendations are submitted for review and are handled in accordance with change control processes.\n\u25aa Business and technical stakeholders are involved in reviewing and approving proposed changes to evolve capabilities."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "CPL": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Compliance (CPL) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with CPL domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Compliance management-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa Compliance efforts are  narrowly-limited to certain compliance requirements.\n\u25aa IT and/or cybersecurity personnel use an informal process to govern statutory, regulatory and contractual compliance obligations."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Compliance (CPL) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with CPL domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with CPL domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with CPL  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Compliance management controls-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Compliance management may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel.\n\u25aa External compliance requirements for cybersecurity and data privacy are identified and documented, based on applicable laws, regulations and contractual obligations.\n\u25aa IT and/or cybersecurity perform an informal annual review of existing compliance requirements and research evolving or new requirements."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Compliance (CPL) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with CPL domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with CPL domain capabilities are well-documented and kept current by process owners.\n\u25aa A Governance, Risk & Compliance (GRC) team, or similar function, is appropriately staffed and supported to implement and maintain CPL domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of governance, risk management and compliance operations (e.g., GRC platform).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with CPL domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to facilitate the identification and implementation of relevant statutory, regulatory and contractual controls."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Utilize SCR-CMM Level 3 criteria definitions:\n\u25aa There are no defined Level 4 criteria, since it is reasonable to assume a quantitatively-controlled process is not necessary to operationalize this control. \n\u25aa While it may be possible to develop \u201cmetrics-driven\u201d capabilities for this control, the criteria would be organization-specific to define."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "PRI": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Privacy (PRI) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with PRI domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Data privacy-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa No formal data privacy team exists. Privacy roles are assigned to existing IT / cybersecurity.\n\u25aa Data/process owners are expected to take the initiative to work with Data Protection Officers (DPOs) to ensure applicable statutory, regulatory and contractual obligations are properly addressed, including the storage, transmission and processing of sensitive/regulated data.\n\u25aa No formal data privacy principles are identified for the organization.\n\u25aa Data/process owners perform their own Data Protection Impact Assessment (DPIA)."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Privacy (PRI) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with PRI domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with PRI domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with PRI  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Data privacy management-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Data privacy management may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel.\n\u25aa A qualified individual is formally assigned as the Chief Privacy Officer (CPO), or similar role, to lead the organization's data privacy program. This individual may be assigned to multiple data privacy-related roles.\n\u25aa The data privacy program is developed to work with IT and cybersecurity staff to ensure that applicable statutory, regulatory and/or contractual data privacy obligations for Personal Data (PD) are properly identified and implemented."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Privacy (PRI) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with PRI domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with PRI domain capabilities are well-documented and kept current by process owners.\n\u25aa A data privacy team, or similar function, is appropriately staffed and supported to implement and maintain PRI domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of data privacy operations (e.g., privacy notice management software, customer management solution, etc.).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with PRI domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to facilitate the implementation and operation of data protection controls throughout the data lifecycle to ensure all forms of Personal Data (PD) are processed lawfully, fairly and transparently."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Privacy (PRI) capabilities, in addition to being standardized across the entity and centrally managed to ensure consistency across Technology Assets, Applications, Services and/or Data (TAASD), efforts are metrics driven to provide sufficient insight for decision makers to predict optimal performance, ensure continued operations and/or identify areas for improvement. Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Applicable SCR-CMM Level 3 (Well Defined) capabilities are implemented and operational.\n\u25aa Metrics reporting includes quantitative analysis of Key Performance Indicators (KPIs).\n\u25aa Metrics reporting includes quantitative analysis of Key Risk Indicators (KRIs).\n\u25aa Scope of metrics, KPIs and KRIs covers organization-wide cybersecurity and data protection controls, including functions performed by third-parties.\n\u25aa Organizational leadership maintains a formal process to objectively review and respond to metrics, KPIs and KRIs (e.g., monthly or quarterly review).\n\u25aa Based on metrics analysis, process improvement recommendations are submitted for review and are handled in accordance with change control processes.\n\u25aa Business and technical stakeholders are involved in reviewing and approving proposed changes to evolve capabilities."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "DCH": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Data Classification & Handling (DCH) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with DCH domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Data management-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa A basic data classification process exists to identify categories of sensitive/regulated data for compliance-related protection requirements.\n\u25aa Data protection controls are primarily administrative in nature (e.g., policies & standards) to classify, protect and dispose of systems and data, including storage media."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Data Classification & Handling (DCH) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with DCH domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with DCH domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with DCH  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Data classification and handling-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Data classification and handling management may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel.\n\u25aa A formalized data classification scheme exists to identify categories of data, based on protection requirements from applicable laws, regulations and/or contractual obligations.\n\u25aa TAASD are categorized according to data classification and business criticality.\n\u25aa Data classification and handling criteria govern requirements protect sensitive/regulated regardless of where it is stored, processed and/or transmitted.\n\u25aa The data retention process is manual and IT and/or cybersecurity personnel work with business stakeholders and process owners to manage the process."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Data Classification & Handling (DCH) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with DCH domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with DCH domain capabilities are well-documented and kept current by process owners.\n\u25aa A Governance, Risk & Compliance (GRC) team, or similar function, is appropriately staffed and supported to implement and maintain DCH domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of data classification and handling operations (e.g., GRC platform).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with DCH domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to facilitate the implementation of data protection controls."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Data Classification & Handling (DCH) capabilities, in addition to being standardized across the entity and centrally managed to ensure consistency across Technology Assets, Applications, Services and/or Data (TAASD), efforts are metrics driven to provide sufficient insight for decision makers to predict optimal performance, ensure continued operations and/or identify areas for improvement. Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Applicable SCR-CMM Level 3 (Well Defined) capabilities are implemented and operational.\n\u25aa Metrics reporting includes quantitative analysis of Key Performance Indicators (KPIs).\n\u25aa Metrics reporting includes quantitative analysis of Key Risk Indicators (KRIs).\n\u25aa Scope of metrics, KPIs and KRIs covers organization-wide cybersecurity and data protection controls, including functions performed by third-parties.\n\u25aa Organizational leadership maintains a formal process to objectively review and respond to metrics, KPIs and KRIs (e.g., monthly or quarterly review).\n\u25aa Based on metrics analysis, process improvement recommendations are submitted for review and are handled in accordance with change control processes.\n\u25aa Business and technical stakeholders are involved in reviewing and approving proposed changes to evolve capabilities."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "TPM": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Third-Party Management (TPM) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with TPM domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Third-party management-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa No centralized inventory of External Service Providers (ESP) is maintained.\n\u25aa ESP are not formally managed according to criticality."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Third-Party Management (TPM) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with TPM domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with TPM domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with TPM  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Third-party management-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Asset management may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Third-Party Management (TPM) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with TPM domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with TPM domain capabilities are well-documented and kept current by process owners.\n\u25aa A procurement team, or similar function, is appropriately staffed and supported to implement and maintain TPM domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of third-party management operations (e.g., TPRM risk management solution, vendor management solution, etc.).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with TPM domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to facilitate the implementation of third-party management controls."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Third-Party Management (TPM) capabilities, in addition to being standardized across the entity and centrally managed to ensure consistency across Technology Assets, Applications, Services and/or Data (TAASD), efforts are metrics driven to provide sufficient insight for decision makers to predict optimal performance, ensure continued operations and/or identify areas for improvement. Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Applicable SCR-CMM Level 3 (Well Defined) capabilities are implemented and operational.\n\u25aa Metrics reporting includes quantitative analysis of Key Performance Indicators (KPIs).\n\u25aa Metrics reporting includes quantitative analysis of Key Risk Indicators (KRIs).\n\u25aa Scope of metrics, KPIs and KRIs covers organization-wide cybersecurity and data protection controls, including functions performed by third-parties.\n\u25aa Organizational leadership maintains a formal process to objectively review and respond to metrics, KPIs and KRIs (e.g., monthly or quarterly review).\n\u25aa Based on metrics analysis, process improvement recommendations are submitted for review and are handled in accordance with change control processes.\n\u25aa Business and technical stakeholders are involved in reviewing and approving proposed changes to evolve capabilities."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "HRS": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Human Resources Security (HRS) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with HRS domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Personnel management-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa The Human Resources (HR) department provides guidance on secure HR practices for hiring, retaining and terminating employees, contractors and other personnel that work on behalf of the organization.\n\u25aa HR maintains a current list of authorized personnel and facilitates the implementation of physical access management controls."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Human Resources Security (HRS) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with HRS domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with HRS domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with HRS  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Personnel management-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Personnel management is decentralized at a localized/regionalized function, where there are non-standardized methods to govern personnel matters across the organization.\n\u25aa Localized HR practices are implemented for hiring, managing, training, investigating and terminating employees, contractors and other personnel that work on behalf of the organization.\n\u25aa The HR department works with cybersecurity personnel to facilitate workforce development and awareness to help ensure secure practices are implemented."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Human Resources Security (HRS) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with HRS domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with HRS domain capabilities are well-documented and kept current by process owners.\n\u25aa A Human Resources (HR) team, or similar function, is appropriately staffed and supported to implement and maintain HRS domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of human resources security operations (e.g., personnel management software solution, etc.).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with HRS domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to facilitate the implementation of personnel security controls."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Human Resources Security (HRS) capabilities, in addition to being standardized across the entity and centrally managed to ensure consistency across Technology Assets, Applications, Services and/or Data (TAASD), efforts are metrics driven to provide sufficient insight for decision makers to predict optimal performance, ensure continued operations and/or identify areas for improvement. Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Applicable SCR-CMM Level 3 (Well Defined) capabilities are implemented and operational.\n\u25aa Metrics reporting includes quantitative analysis of Key Performance Indicators (KPIs).\n\u25aa Metrics reporting includes quantitative analysis of Key Risk Indicators (KRIs).\n\u25aa Scope of metrics, KPIs and KRIs covers organization-wide cybersecurity and data protection controls, including functions performed by third-parties.\n\u25aa Organizational leadership maintains a formal process to objectively review and respond to metrics, KPIs and KRIs (e.g., monthly or quarterly review).\n\u25aa Based on metrics analysis, process improvement recommendations are submitted for review and are handled in accordance with change control processes.\n\u25aa Business and technical stakeholders are involved in reviewing and approving proposed changes to evolve capabilities."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "BCD": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Business Continuity & Disaster Recovery (BCD) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with BCD domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Contingency management-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa Limited technologies exist to support near real-time network infrastructure failover (e.g., redundant ISPs, redundant power, etc.).\n\u25aa IT and/or cybersecurity personnel develop limited Disaster Recovery Plans (DRP) to recover business-critical Technology Assets, Applications and/or Services (TAAS) and services."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Business Continuity & Disaster Recovery (BCD) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with BCD domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with BCD domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with BCD  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Business Continuity / Disaster Recovery (BC/DR)-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa BC/DR may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel.\n\u25aa Business stakeholders and process owners identify business-critical TAASD and External Service Providers (ESPs).\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to identify single points of failure from a TAASD perspective.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to develop BC/DR plans to recover business-critical TAASD.\n\u25aa Data/process owners conduct a Business Impact Analysis (BIA) at least annually, or after any major technology or process change, to identify TAASD that are critical to the business, as well as single points of failure.\n\u25aa Business stakeholders and process owners designate alternative decision-makers if primary decision-makers are unavailable."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Business Continuity & Disaster Recovery (BCD) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with BCD domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with BCD domain capabilities are well-documented and kept current by process owners.\n\u25aa A Business Continuity & Disaster Recovery (BC/DR) team, or similar function, is appropriately staffed and supported to implement and maintain BCD domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of BC/DR operations (e.g., BC/DR planning software, Disaster Recovery as a Service (DRaaS), Orchestration and Automation Tools, etc.).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with BCD domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to facilitate the implementation of contingency planning controls to help ensure resilient Technology Assets, Applications and/or Services (TAAS) (e.g., Continuity of Operations Plan (COOP) or BC/DR playbooks)."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Business Continuity & Disaster Recovery (BCD) capabilities, in addition to being standardized across the entity and centrally managed to ensure consistency across Technology Assets, Applications, Services and/or Data (TAASD), efforts are metrics driven to provide sufficient insight for decision makers to predict optimal performance, ensure continued operations and/or identify areas for improvement. Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Applicable SCR-CMM Level 3 (Well Defined) capabilities are implemented and operational.\n\u25aa Metrics reporting includes quantitative analysis of Key Performance Indicators (KPIs).\n\u25aa Metrics reporting includes quantitative analysis of Key Risk Indicators (KRIs).\n\u25aa Scope of metrics, KPIs and KRIs covers organization-wide cybersecurity and data protection controls, including functions performed by third-parties.\n\u25aa Organizational leadership maintains a formal process to objectively review and respond to metrics, KPIs and KRIs (e.g., monthly or quarterly review).\n\u25aa Based on metrics analysis, process improvement recommendations are submitted for review and are handled in accordance with change control processes.\n\u25aa Business and technical stakeholders are involved in reviewing and approving proposed changes to evolve capabilities."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "IRO": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Incident Response (IRO) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with IRO domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Incident response-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa IT and/or cybersecurity personnel use an informal process to facilitate incident management operations that cover preparation, detection and analysis, containment, eradication and recovery."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Incident Response (IRO) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with IRO domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with DCH domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with IRO  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Incident response-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Incident response management may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel.\n\u25aa IT and/or cybersecurity personnel operate an incident response capability using a documented and tested Incident Response Plan (IRP) to facilitate incident management operations that cover preparation, detection and analysis, containment, eradication and recovery.\n\u25aa IT and/or cybersecurity personnel facilitate prompt response to suspected or confirmed security incidents, including timely notification to affected stakeholders."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Incident Response (IRO) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with IRO domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Cybersecurity personnel operate an incident response capability using a documented and tested Incident Response Plan (IRP) to facilitate incident management operations that cover preparation, detection and analysis, containment, eradication and recovery.\n\u25aa An incident response team, or similar function, is appropriately staffed and supported to implement and maintain IRO domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of incident response operations (e.g., incident management software, etc.).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with IRO domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to implement and govern processes and documentation to facilitate an organization-wide response capability for cybersecurity and data protection-related incidents."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Utilize SCR-CMM Level 3 criteria definitions:\n\u25aa There are no defined Level 4 criteria, since it is reasonable to assume a quantitatively-controlled process is not necessary to operationalize this control. \n\u25aa While it may be possible to develop \u201cmetrics-driven\u201d capabilities for this control, the criteria would be organization-specific to define."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "PRM": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Project & Resource Management (PRM) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with PRM domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Project management-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa IT and/or cybersecurity personnel work with data/process owners to help ensure secure practices are implemented throughout the System Development Lifecycle (SDLC) for all high-value projects."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Project & Resource Management (PRM) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with PRM domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with PRM domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with PRM  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Project & Resource Management -related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines).\n\u25aa Project & Resource Management may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel.\n\u25aa The Chief Information Officer (CIO), or similar function, analyzes the organization's business strategy and prioritizes the objectives and resourcing of the security function, based on broader business requirements.\n\u25aa A Project Management Office (PMO), or project management function, enables the implementation of cybersecurity and data protection-related resource planning controls across the System Development Lifecycle (SDLC) for all high-value projects.\n\u25aa Quarterly Business Review (QBR), or similar status reporting, exists to provide recurring reports on the state of the cybersecurity and data protection program."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Project & Resource Management (PRM) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with PRM domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with PRM domain capabilities are well-documented and kept current by process owners.\n\u25aa A Project Management Office (PMO), or similar function, is appropriately staffed and supported to implement and maintain PRM domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of project and resource management operations (e.g., project management solution, etc.).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with PRM domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa The Chief Information Officer (CIO), or similar function, analyzes the organization's business strategy and prioritizes the objectives and resourcing of the security function, based on broader business requirements.\n\u25aa An implemented and operational capability exists to facilitate the implementation of resource planning controls that provide a portfolio management approach to achieve security, compliance and resilience objectives."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Utilize SCR-CMM Level 3 criteria definitions:\n\u25aa There are no defined Level 4 criteria, since it is reasonable to assume a quantitatively-controlled process is not necessary to operationalize this control. \n\u25aa While it may be possible to develop \u201cmetrics-driven\u201d capabilities for this control, the criteria would be organization-specific to define."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ],
    "IAC": [
      {
        "level": 0,
        "label": "Not Performed",
        "text": "Practices are non-existent, based on the inability to demonstrate an implemented and operational capability. A reasonable person would conclude the control is not being performed."
      },
      {
        "level": 1,
        "label": "Performed Informally",
        "text": "Identification & Authentication (IAC) domain capabilities are ad hoc and inconsistent. Capability criteria associated with this control may include:\n\u25aa Policies, standards & procedures associated with IAC domain capabilities provide limited coverage due to the depth and breadth of the existing documentation.\n\u25aa Identity & Access Management (IAM)-related activities are decentralized (e.g., a localized/regionalized function) and uses non-standardized methods to implement secure, resilient and compliant practices.\n\u25aa IAM controls are primarily administrative in nature (e.g., policies & standards) to manage accounts and permissions.\n\u25aa IT and/or cybersecurity personnel identify and implement IAM cybersecurity and data protection controls that are appropriate to address applicable statutory, regulatory and contractual requirements.\n\u25aa Active Directory (AD), or a similar technologies, are used to centrally manage identities and permissions, but asset/process owners are authorized to operate a decentralized access control program for their specific Technology Assets, Applications, Services and/or Data (TAASD)."
      },
      {
        "level": 2,
        "label": "Planned & Tracked",
        "text": "Identification & Authentication (IAC) capabilities are requirements-driven, but are not standardized across the entity (e.g., local/regional level consistency). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with IAC domain capabilities are formally documented and centrally-managed by the entity.\n\u25aa Standardized Operating Procedures (SOP) associated with IAC domain capabilities are documented and maintained by process owners.\n\u25aa IT and/or cybersecurity personnel work with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with IAC  domain capabilities to address applicable statutory, regulatory and/or contractual requirements for Technology Assets, Applications, Services and/or Data (TAASD).\n\u25aa Identity & Access Management (IAM)-related controls are primarily administrative and preventative in nature (e.g., policies, standards, procedures & guidelines) to enforce Logical Access Control (LAC).\n\u25aa IAM may be a defined function (e.g., team or department) or assigned as an additional duty to existing IT and/or cybersecurity personnel to implement Role Based Access Control (RBAC) practices for the management of user, group and system accounts, including privileged accounts.\n\u25aa A directory services technology is used to centrally manage identities and permissions with RBAC. Due to technical or business limitations, asset/process owners are empowered to operate a decentralized access control program for their specific Technology Assets, Applications and/or Services (TAAS) that cannot be integrated into directory services.\n\u25aa Configuration management and IAM functions collaborate to ensure Secure Baseline Configurations (SBC) enforce \u201cleast privileges\u201d on TAAS.\n\u25aa IAM restricts the assignment of privileged accounts to entity-defined personnel and/or roles (privilege assignment requires management approval)."
      },
      {
        "level": 3,
        "label": "Well Defined",
        "text": "Identification & Authentication (IAC) capabilities are standardized across the entity for applicability to People, Processes, Technologies, Data and/or Facilities (PPTDF) to ensure consistency for Technology Assets, Applications, Services and/or Data (TAASD). Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Policies and standards associated with IAC domain capabilities are formally documented and centrally-managed by the entity's Governance, Risk & Compliance (GRC) team, or similar function.\n\u25aa Standardized Operating Procedures (SOP) associated with IAC domain capabilities are well-documented and kept current by process owners.\n\u25aa An Identity & Access Management (IAM) team, or similar function, is appropriately staffed and supported to implement and maintain IAC domain capabilities.\n\u25aa Technology is leveraged to enhance the efficiency and accuracy of IAM operations (e.g., directory services, Authenticate, Authorize and Audit (AAA) solution, etc.).\n\u25aa The entity's Governance, Risk & Compliance (GRC) team, or similar function, works with business stakeholders and process owners to appropriately scope and reasonably implement cybersecurity and data protection controls associated with IAC domain capabilities to address Minimum Compliance Requirements (MCR) (e.g., applicable statutory, regulatory and/or contractual requirements) and Discretionary Security Requirements (DSR) (e.g., entity-required controls).\n\u25aa An implemented and operational capability exists to facilitate the implementation of identification and access management controls."
      },
      {
        "level": 4,
        "label": "Quantitatively Controlled",
        "text": "Identification & Authentication (IAC) capabilities, in addition to being standardized across the entity and centrally managed to ensure consistency across Technology Assets, Applications, Services and/or Data (TAASD), efforts are metrics driven to provide sufficient insight for decision makers to predict optimal performance, ensure continued operations and/or identify areas for improvement. Capability criteria associated with this control reasonably expect the following criteria to exist:\n\u25aa Applicable SCR-CMM Level 3 (Well Defined) capabilities are implemented and operational.\n\u25aa Metrics reporting includes quantitative analysis of Key Performance Indicators (KPIs).\n\u25aa Metrics reporting includes quantitative analysis of Key Risk Indicators (KRIs).\n\u25aa Scope of metrics, KPIs and KRIs covers organization-wide cybersecurity and data protection controls, including functions performed by third-parties.\n\u25aa Organizational leadership maintains a formal process to objectively review and respond to metrics, KPIs and KRIs (e.g., monthly or quarterly review).\n\u25aa Based on metrics analysis, process improvement recommendations are submitted for review and are handled in accordance with change control processes.\n\u25aa Business and technical stakeholders are involved in reviewing and approving proposed changes to evolve capabilities."
      },
      {
        "level": 5,
        "label": "Continuously Improving",
        "text": "Utilize SCR-CMM Level 3 or Level 4 (if available) criteria definitions:\n\u25aa There are no defined Level 5 criteria, since it is reasonable to assume a continuously-improving process is not necessary to operationalize this control. \n\u25aa Level 5 capabilities should be considered \u201cworld-class\u201d where the control builds on Level 4 capabilities, but are continuously improving through Artificial Intelligence (AI) and/or Machine Learning (ML) technologies.\n\u25aa While it may be possible to develop responsive capabilities for this control through the use of AI and/or ML technologies, the criteria would be organization-specific to define."
      }
    ]
  },
  "activityControls": {
    "AAT-safeguards": [
      {
        "id": "AAT-01.2",
        "name": "Trustworthy AI & Autonomous Technologies",
        "description": "Mechanisms exist to ensure Artificial Intelligence (AI) and Autonomous Technologies (AAT) are designed to be reliable, safe, fair, secure, resilient, transparent, explainable and data privacy-enhanced to minimize emergent properties or unintended consequences."
      },
      {
        "id": "AAT-12",
        "name": "AI & Autonomous Technologies Intellectual Property Infringement Protections",
        "description": "Mechanisms exist to prevent third-party Intellectual Property (IP) rights infringement by Artificial Intelligence (AI) and Autonomous Technologies (AAT)."
      },
      {
        "id": "AAT-12.2",
        "name": "Data Source Integrity",
        "description": "Mechanisms exist to protect the integrity of source data to prevent accidental contamination or malicious corruption (e.g., data poisoning) that could compromise the performance of Artificial Intelligence and Autonomous Technologies (AAT)."
      },
      {
        "id": "AAT-15",
        "name": "AI & Autonomous Technologies Viability Decisions",
        "description": "Mechanisms exist to define the criteria as to whether Artificial Intelligence (AI) and Autonomous Technologies (AAT) achieved intended purposes and stated objectives to determine whether its development or deployment should proceed."
      },
      {
        "id": "AAT-15.2",
        "name": "Responsibility To Supersede, Deactivate and/or Disengage AI & Autonomous Technologies",
        "description": "Mechanisms exist to define the criteria and responsible party(ies) for superseding, disengaging or deactivating Artificial Intelligence (AI) and Autonomous Technologies (AAT) that demonstrate performance or outcomes inconsistent with intended use."
      }
    ],
    "AAT-testing": [
      {
        "id": "AAT-10",
        "name": "Artificial Intelligence Test, Evaluation, Validation & Verification (AI TEVV)",
        "description": "Mechanisms exist to implement Artificial Intelligence Test, Evaluation, Validation & Verification (AI TEVV) practices to enable Artificial Intelligence (AI) and Autonomous Technologies (AAT)-related security, resilience and compliance-related conformity testing throughout the lifecycle of the AAT."
      },
      {
        "id": "AAT-10.1",
        "name": "AI TEVV Trustworthiness Assessment",
        "description": "Mechanisms exist to evaluate Artificial Intelligence (AI) and Autonomous Technologies (AAT) for trustworthy behavior and operation including security, anonymization and disaggregation of captured and stored data for approved purposes."
      },
      {
        "id": "AAT-10.4",
        "name": "AI TEVV Safety Demonstration",
        "description": "Mechanisms exist to demonstrate the Artificial Intelligence (AI) and Autonomous Technologies (AAT) to be deployed are safe, residual risk does not exceed the organization's risk tolerance and can fail safely, particularly if made to operate beyond its knowledge limits."
      },
      {
        "id": "AAT-10.10",
        "name": "AI TEVV Results Evaluation",
        "description": "Mechanisms exist to evaluate the results of Artificial Intelligence Test, Evaluation, Validation & Verification (AI TEVV) to determine the viability of the proposed Artificial Intelligence (AI) and Autonomous Technologies (AAT)."
      },
      {
        "id": "AAT-10.3",
        "name": "AI TEVV Trustworthiness Demonstration",
        "description": "Mechanisms exist to demonstrate the Artificial Intelligence (AI) and Autonomous Technologies (AAT) to be deployed are:\n(1) Valid;\n(2) Reliable; and\n(3) Operate as intended, based on approved designs."
      }
    ],
    "GOV-program": [
      {
        "id": "GOV-01",
        "name": "Security, Compliance & Resilience Program (SCRP)",
        "description": "Mechanisms exist to facilitate the implementation of security, compliance and resilience governance controls."
      },
      {
        "id": "GOV-02",
        "name": "Publishing Security, Compliance & Resilience Documentation",
        "description": "Mechanisms exist to establish, maintain and disseminate policies, standards and procedures necessary for secure, compliant and resilient capabilities."
      },
      {
        "id": "GOV-04",
        "name": "Assigned Security, Compliance & Resilience Responsibilities",
        "description": "Mechanisms exist to assign one or more qualified individuals with the mission and resources to centrally-manage, coordinate, develop, implement and maintain an enterprise-wide Security, Compliance & Resilience Program (SCRP)."
      },
      {
        "id": "GOV-12",
        "name": "Forced Technology Transfer (FTT)",
        "description": "Mechanisms exist to avoid and/or constrain the forced exfiltration of sensitive and/or regulated information (e.g., Intellectual Property (IP)) to the host government for purposes of market access or market management practices."
      },
      {
        "id": "GOV-13",
        "name": "State-Sponsored Espionage",
        "description": "Mechanisms exist to constrain the host government's ability to leverage the organization's Technology Assets, Applications and/or Services (TAAS) for economic or political espionage and/or cyberwarfare activities."
      }
    ],
    "GOV-docs": [
      {
        "id": "GOV-01",
        "name": "Security, Compliance & Resilience Program (SCRP)",
        "description": "Mechanisms exist to facilitate the implementation of security, compliance and resilience governance controls."
      },
      {
        "id": "GOV-02",
        "name": "Publishing Security, Compliance & Resilience Documentation",
        "description": "Mechanisms exist to establish, maintain and disseminate policies, standards and procedures necessary for secure, compliant and resilient capabilities."
      },
      {
        "id": "GOV-04",
        "name": "Assigned Security, Compliance & Resilience Responsibilities",
        "description": "Mechanisms exist to assign one or more qualified individuals with the mission and resources to centrally-manage, coordinate, develop, implement and maintain an enterprise-wide Security, Compliance & Resilience Program (SCRP)."
      },
      {
        "id": "GOV-12",
        "name": "Forced Technology Transfer (FTT)",
        "description": "Mechanisms exist to avoid and/or constrain the forced exfiltration of sensitive and/or regulated information (e.g., Intellectual Property (IP)) to the host government for purposes of market access or market management practices."
      },
      {
        "id": "GOV-13",
        "name": "State-Sponsored Espionage",
        "description": "Mechanisms exist to constrain the host government's ability to leverage the organization's Technology Assets, Applications and/or Services (TAAS) for economic or political espionage and/or cyberwarfare activities."
      }
    ],
    "RSK-identify": [
      {
        "id": "RSK-04",
        "name": "Risk Assessment",
        "description": "Mechanisms exist to conduct recurring assessments of risk that includes the likelihood and magnitude of harm, from unauthorized access, use, disclosure, disruption, modification or destruction of the organization's Technology Assets, Applications, Services and/or Data (TAASD)."
      },
      {
        "id": "RSK-04.1",
        "name": "Risk Register",
        "description": "Mechanisms exist to maintain a risk register that facilitates monitoring and reporting of risks."
      },
      {
        "id": "RSK-06",
        "name": "Risk Remediation",
        "description": "Mechanisms exist to remediate risks to an acceptable level."
      },
      {
        "id": "RSK-09",
        "name": "Supply Chain Risk Management (SCRM) Plan",
        "description": "Mechanisms exist to develop a plan for Supply Chain Risk Management (SCRM) associated with the development, acquisition, maintenance and disposal of Technology Assets, Applications and/or Services (TAAS), including documenting selected mitigating actions and monitoring performance against those plans."
      },
      {
        "id": "RSK-01.1",
        "name": "Risk Framing",
        "description": "Mechanisms exist to identify:\n(1) Assumptions affecting risk assessments, risk response and risk monitoring;\n(2) Constraints affecting risk assessments, risk response and risk monitoring;\n(3) The organizational risk tolerance; and\n(4) Priorities, benefits and trade-offs considered by the organization for managing risk."
      }
    ],
    "RSK-treat": [
      {
        "id": "RSK-06.3",
        "name": "Risk Treatment Options",
        "description": "Mechanisms exist to select appropriate risk treatment options, based on applicable risk assessment findings, including:\n(1) Mitigating the risk to an acceptable level;\n(2) Avoiding the risk (e.g., terminating the project);\n(3) Transferring the risk to a third party (e.g., insurance, service provider, etc.); or\n(4) Accepting the risk."
      },
      {
        "id": "RSK-06.4",
        "name": "Risk Treatment Plan (RTP)",
        "description": "Mechanisms exist to formalize a Risk Treatment Plan (RTP) that applicable stakeholders will utilize to remediate identified risks according to a defined timeline."
      },
      {
        "id": "RSK-01.2",
        "name": "Risk Management Resourcing",
        "description": "Mechanisms exist to reduce the magnitude or likelihood of potential impacts by resourcing the capability required to manage technology-related risks."
      },
      {
        "id": "RSK-04.4",
        "name": "Risk Assessment Stakeholder Involvement",
        "description": "Mechanisms exist to:\n(1) Define applicable stakeholders for each risk assessment;\n(2) Involve identified stakeholders in the risk assessment process; and\n(3) Provide identified stakeholders with results of the risk assessment, upon completion."
      },
      {
        "id": "RSK-09.2",
        "name": "AI & Autonomous Technologies Supply Chain Impacts",
        "description": "Mechanisms exist to address Artificial Intelligence (AI) and Autonomous Technologies (AAT)-related risks and benefits arising from the organization's supply chain, including third-party software and data."
      }
    ],
    "RSK-monitor": [
      {
        "id": "RSK-11",
        "name": "Risk Monitoring",
        "description": "Mechanisms exist to ensure risk monitoring as an integral part of the continuous monitoring strategy that includes monitoring the effectiveness of security, compliance and resilience controls, compliance and change management."
      }
    ],
    "CPL-program": [
      {
        "id": "CPL-01",
        "name": "Statutory, Regulatory & Contractual Compliance",
        "description": "Mechanisms exist to facilitate the identification and implementation of relevant statutory, regulatory and contractual controls."
      },
      {
        "id": "CPL-01.4",
        "name": "Conformity Assessment",
        "description": "Mechanisms exist to conduct assessments to demonstrate security, compliance and/or resilience capability conformity with applicable cybersecurity and data protection laws, regulations and/or contractual obligations."
      },
      {
        "id": "CPL-11",
        "name": "Dual Use Technology",
        "description": "Mechanisms exist to govern technologies and/or data that have potential:\n(1) \"Dual-use\u201d capabilities for civil and military;\n(2) Use by terrorists; and/or \n(3) Weapons of Mass Destruction (WMD) applications."
      },
      {
        "id": "CPL-11.1",
        "name": "USML or CCL Identification",
        "description": "Mechanisms exist to identify if the organization handles United States Munitions List (USML) or Commerce Control List (CCL):\n(1) Items;\n(2) Technical data; and/or\n(3) Provides defense services."
      },
      {
        "id": "CPL-11.2",
        "name": "Export-Controlled Access Restrictions",
        "description": "Mechanisms exist to restrict logical and physical access to United States (US) export-controlled data to US: \n(1) Citizens; and/or\n(2) Green Card holders."
      }
    ],
    "CPL-monitoring": [
      {
        "id": "CPL-02",
        "name": "Security, Compliance & Resilience Controls Oversight",
        "description": "Mechanisms exist to provide a security, compliance and resilience controls oversight function that reports to the organization's executive leadership."
      },
      {
        "id": "CPL-03",
        "name": "Control Conformity Monitoring",
        "description": "Mechanisms exist to validate that Technology Assets, Applications, Services and/or Data (TAASD) conform to the organization's security, compliance and/or resilience policies, standards and other applicable requirements."
      },
      {
        "id": "CPL-02.2",
        "name": "Periodic Audits",
        "description": "Mechanisms exist to conduct periodic audits of security, compliance and resilience controls to evaluate conformity with the organization's documented policies, standards and procedures."
      },
      {
        "id": "CPL-03.2",
        "name": "Functional Review Of Security, Compliance & Resilience Controls",
        "description": "Mechanisms exist to regularly review Technology Assets, Applications and/or Services (TAAS) for adherence to the organization's security, compliance and/or resilience policies and standards."
      },
      {
        "id": "CPL-03.1",
        "name": "Independent Assessors",
        "description": "Mechanisms exist to utilize independent assessors to evaluate security, compliance and resilience at planned intervals or when the Technology Asset, Application and/or Service (TAAS) undergoes significant changes."
      }
    ],
    "CPL-handling": [
      {
        "id": "CPL-01.1",
        "name": "Non-Compliance Oversight",
        "description": "Mechanisms exist to document and review instances of non-compliance with statutory, regulatory and/or contractual obligations to develop appropriate risk mitigation actions."
      },
      {
        "id": "CPL-07",
        "name": "Grievances",
        "description": "Mechanisms exist to govern the intake and analysis of grievances related to the organization's cybersecurity and/or data protection practices."
      },
      {
        "id": "CPL-07.1",
        "name": "Grievance Response",
        "description": "Mechanisms exist to respond to legitimate grievances related to the organization's cybersecurity and/or data protection practices."
      },
      {
        "id": "CPL-05",
        "name": "Legal Assessment of Investigative Inquires",
        "description": "Mechanisms exist to determine whether a government agency has an applicable and valid legal basis to request data from the organization and what further steps need to be taken, if necessary."
      },
      {
        "id": "CPL-05.1",
        "name": "Investigation Request Notifications",
        "description": "Mechanisms exist to notify customers about investigation request notifications, unless the applicable legal basis for a government agency's action prohibits notification (e.g., potential criminal prosecution)."
      }
    ],
    "PRI-program": [
      {
        "id": "PRI-01",
        "name": "Data Privacy Program",
        "description": "Mechanisms exist to facilitate the implementation and operation of data protection controls throughout the data lifecycle to ensure all forms of Personal Data (PD) are processed lawfully, fairly and transparently."
      },
      {
        "id": "PRI-18",
        "name": "Data Controller Communications",
        "description": "Mechanisms exist to receive and process data controller communications pertaining to:\n(1) Receiving and responding to data subject requests;\n(2) Updating/correcting Personal Data (PD); \n(3) Accounting for disclosures of PD; and\n(4) Accounting for PD that is stored, processed and/or transmitted on behalf of the data controller."
      }
    ],
    "PRI-rights": [
      {
        "id": "PRI-06.1",
        "name": "Correcting Inaccurate Personal Data (PD)",
        "description": "Mechanisms exist to maintain a process for:\n(1) Data subjects to have inaccurate Personal Data (PD) maintained by the organization corrected or amended; and\n(2) Disseminating corrections or amendments of PD to other authorized users of the PD."
      },
      {
        "id": "PRI-06.4",
        "name": "Data Subject Feedback Management",
        "description": "Mechanisms exist to maintain a process to efficiently and effectively respond to requests, complaints, concerns and/or questions from authenticated data subjects about Personal Data (PD) the organization collects, receives, processes, stores, transmits, shares, updates and/or disposes."
      },
      {
        "id": "PRI-06.5",
        "name": "Right to Erasure",
        "description": "Mechanisms exist to maintain a process to erase a data subject's Personal Data (PD), in accordance with applicable laws, regulations and contractual obligations pertaining to the retention of their PD."
      },
      {
        "id": "PRI-06.2",
        "name": "Notice of Correction or Processing Change",
        "description": "Mechanisms exist to notify affected data subjects if their Personal Data (PD) has been corrected, amended or deleted."
      },
      {
        "id": "PRI-06.3",
        "name": "Appeal Adverse Decision",
        "description": "Mechanisms exist to maintain a process for data subjects to appeal an adverse decision."
      }
    ],
    "PRI-protection": [
      {
        "id": "PRI-16",
        "name": "Potential Human Rights Abuses",
        "description": "Mechanisms exist to constrain the supply of physical and/or digital activity logs to the host government that can directly lead to contravention of the Universal Declaration of Human Rights (UDHR), as well as other applicable statutory, regulatory and/or contractual obligations."
      },
      {
        "id": "PRI-01.11",
        "name": "Reasonable Data Privacy Practices",
        "description": "Mechanisms exist to limit the collection, receiving, processing, storage, transmission, sharing, updating and/or disposal of Personal Data (PD) according to reasonable consumer expectations for what is necessary and proportionate."
      },
      {
        "id": "PRI-01.6",
        "name": "Security of Personal Data (PD)",
        "description": "Mechanisms exist to ensure Personal Data (PD) is protected by logical and physical security safeguards that are sufficient and appropriately scoped to protect the confidentiality and integrity of the PD."
      },
      {
        "id": "PRI-01.7",
        "name": "Limiting Personal Data (PD) Disclosures",
        "description": "Mechanisms exist to limit the disclosure of Personal Data (PD) to authorized parties for the sole purpose for which the PD was obtained."
      },
      {
        "id": "PRI-01.8",
        "name": "Data Fiduciary",
        "description": "Mechanisms exist to appoint an individual to determine the following criteria about Personal Data (PD):\n(1) The purpose why PD is necessary; \n(2) Authorized methods to collect, receive, process, store, transmit, share, update and/or dispose PD; and\n(3) Authorized parties PD may be shared with."
      }
    ],
    "DCH-classification": [
      {
        "id": "DCH-02",
        "name": "Data & Asset Classification",
        "description": "Mechanisms exist to ensure data and assets are categorized in accordance with applicable statutory, regulatory and contractual requirements."
      },
      {
        "id": "DCH-24",
        "name": "Information Location",
        "description": "Mechanisms exist to identify and document the location of information and the specific system components on which the information resides."
      },
      {
        "id": "DCH-14.3",
        "name": "Data Access Mapping",
        "description": "Mechanisms exist to leverage data-specific Access Control Lists (ACL) or Interconnection Security Agreements (ISAs) to generate a logical map of the parties with whom sensitive and/or regulated data is shared."
      },
      {
        "id": "DCH-19",
        "name": "Geographic Location of Data",
        "description": "Mechanisms exist to inventory, document and maintain data flows for data that is resident (permanently or temporarily) within a service's geographically distributed applications (physical and virtual), infrastructure, systems components and/or shared with other third-parties."
      },
      {
        "id": "DCH-22.3",
        "name": "Primary Source Personal Data (PD) Collection",
        "description": "Mechanisms exist to collect Personal Data (PD) directly from the individual."
      }
    ],
    "DCH-handling": [
      {
        "id": "DCH-01.1",
        "name": "Data Stewardship",
        "description": "Mechanisms exist to ensure data stewardship is assigned, documented and communicated."
      },
      {
        "id": "DCH-03.1",
        "name": "Disclosure of Information",
        "description": "Mechanisms exist to restrict the disclosure of sensitive and/or regulated data to authorized parties with a need to know."
      },
      {
        "id": "DCH-08",
        "name": "Physical Media Disposal",
        "description": "Mechanisms exist to securely dispose of media when it is no longer required, using formal procedures."
      },
      {
        "id": "DCH-09",
        "name": "System Media Sanitization",
        "description": "Mechanisms exist to sanitize system media with the strength and integrity commensurate with the classification or sensitivity of the information prior to disposal, release out of organizational control or release for reuse."
      },
      {
        "id": "DCH-10.1",
        "name": "Limitations on Use",
        "description": "Mechanisms exist to restrict the use and distribution of sensitive and/or regulated data."
      }
    ],
    "TPM-inventory": [
      {
        "id": "TPM-04",
        "name": "Third-Party Services",
        "description": "Mechanisms exist to mitigate the risks associated with third-party access to the organization's Technology Assets, Applications, Services and/or Data (TAASD)."
      },
      {
        "id": "TPM-04.4",
        "name": "Third-Party Processing, Storage and Service Locations",
        "description": "Mechanisms exist to restrict the location of information processing/storage based on business requirements."
      },
      {
        "id": "TPM-05",
        "name": "Third-Party Contract Requirements",
        "description": "Mechanisms exist to require contractual requirements for applicable security, compliance and resilience requirements with third-parties, reflecting the organization's needs to protect its Technology Assets, Applications, Services and/or Data (TAASD)."
      },
      {
        "id": "TPM-05.5",
        "name": "Third-Party Scope Review",
        "description": "Mechanisms exist to perform recurring validation of the Responsible, Accountable, Supportive, Consulted & Informed (RASCI) matrix, or similar documentation, to ensure security, compliance and resilience control assignments accurately reflect current:\n(1) Contractual obligations for the External Service Provider (ESP);\n(2) Business practices;\n(3) Applicable stakeholders; and\n(4) Deployed Technology Assets, Applications and/or Services (TAAS)."
      },
      {
        "id": "TPM-02",
        "name": "Third-Party Criticality Assessments",
        "description": "Mechanisms exist to identify, prioritize and assess suppliers and partners of critical Technology Assets, Applications and/or Services (TAAS) using a supply chain risk assessment process relative to their importance in supporting the delivery of high-value services."
      }
    ],
    "TPM-contracts": [
      {
        "id": "TPM-03.4",
        "name": "Adequate Supply",
        "description": "Mechanisms exist to develop and implement a spare parts strategy to ensure that an adequate supply of critical components is available to meet operational needs."
      },
      {
        "id": "TPM-05.2",
        "name": "Contract Flow-Down Requirements",
        "description": "Mechanisms exist to ensure applicable security, compliance and resilience requirements are included in contracts that flow-down to applicable sub-contractors and suppliers."
      },
      {
        "id": "TPM-05.7",
        "name": "Break Clauses",
        "description": "Mechanisms exist to include \"break clauses\" within contracts for failure to meet contract criteria for security, compliance and/or resilience controls."
      },
      {
        "id": "TPM-05.3",
        "name": "Third-Party Authentication Practices",
        "description": "Mechanisms exist to ensure External Service Providers (ESPs) use unique authentication factors for each of its customers."
      },
      {
        "id": "TPM-12",
        "name": "Foreign Ownership, Control or Influence (FOCI)",
        "description": "Mechanisms exist to minimize risk associated with Foreign Ownership, Control or Influence (FOCI) through Supply Chain Risk Management (SCRM) practices."
      }
    ],
    "TPM-monitor": [
      {
        "id": "TPM-05.1",
        "name": "Security Compromise Notification Agreements",
        "description": "Mechanisms exist to compel External Service Providers (ESPs) to provide notification of actual or potential compromises in the supply chain that can potentially affect or have adversely affected Technology Assets, Applications and/or Services (TAAS) that the organization utilizes."
      }
    ],
    "HRS-onboarding": [
      {
        "id": "HRS-02.1",
        "name": "Users With Elevated Privileges",
        "description": "Mechanisms exist to ensure that every user accessing Technology Assets, Applications and/or Services (TAAS) that process, store and/or transmit sensitive and/or regulated data is cleared and regularly trained to handle the information in question."
      },
      {
        "id": "HRS-03",
        "name": "Defined Roles & Responsibilities",
        "description": "Mechanisms exist to define cybersecurity roles & responsibilities for all personnel."
      },
      {
        "id": "HRS-04",
        "name": "Personnel Screening",
        "description": "Mechanisms exist to manage personnel security risk by screening individuals prior to authorizing access."
      },
      {
        "id": "HRS-05",
        "name": "Terms of Employment",
        "description": "Mechanisms exist to require all employees and contractors to apply cybersecurity and data protection principles in their daily work to enable secure, compliant and resilient capabilities."
      },
      {
        "id": "HRS-05.1",
        "name": "Rules of Behavior",
        "description": "Mechanisms exist to define acceptable and unacceptable rules of behavior for the use of technologies, including consequences for unacceptable behavior."
      }
    ],
    "HRS-roles": [
      {
        "id": "HRS-09",
        "name": "Personnel Termination",
        "description": "Mechanisms exist to govern the termination of individual employment."
      },
      {
        "id": "HRS-09.1",
        "name": "Asset Collection",
        "description": "Mechanisms exist to retrieve organization-owned assets upon termination of an individual's employment."
      },
      {
        "id": "HRS-09.2",
        "name": "High-Risk Terminations",
        "description": "Mechanisms exist to expedite the process of removing \"high risk\" individual\u2019s access to Technology Assets, Applications, Services and/or Data (TAASD) upon termination, as determined by management."
      },
      {
        "id": "HRS-09.3",
        "name": "Post-Employment Requirements Notification",
        "description": "Mechanisms exist to govern former employee behavior by formally notifying terminated individuals of their applicable, legally binding post-employment requirements for the protection of sensitive and/or regulated data."
      },
      {
        "id": "HRS-12",
        "name": "Incompatible Roles",
        "description": "Mechanisms exist to avoid incompatible development-specific roles through limiting and reviewing developer privileges to change hardware, software and firmware components within a production/operational environment."
      }
    ],
    "HRS-offboarding": [
      {
        "id": "HRS-07",
        "name": "Personnel Sanctions",
        "description": "Mechanisms exist to sanction personnel failing to comply with established security policies, standards and procedures."
      },
      {
        "id": "HRS-07.1",
        "name": "Workplace Investigations",
        "description": "Mechanisms exist to conduct employee misconduct investigations when there is reasonable assurance that a policy has been violated."
      }
    ],
    "BCD-program": [
      {
        "id": "BCD-01",
        "name": "Business Continuity Management System (BCMS)",
        "description": "Mechanisms exist to facilitate the implementation of contingency planning controls to help ensure resilient Technology Assets, Applications and/or Services (TAAS) (e.g., Continuity of Operations Plan (COOP) or Business Continuity & Disaster Recovery (BC/DR) playbooks)."
      },
      {
        "id": "BCD-13.1",
        "name": "Restoration Integrity Verification",
        "description": "Mechanisms exist to verify the integrity of backups and other restoration assets prior to using them for restoration."
      },
      {
        "id": "BCD-01.5",
        "name": "Recovery Operations Criteria",
        "description": "Mechanisms exist to define specific criteria that must be met to initiate Business Continuity / Disaster Recover (BC/DR) plans that facilitate business continuity operations capable of meeting applicable Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs)."
      },
      {
        "id": "BCD-01.6",
        "name": "Recovery Operations Communications",
        "description": "Mechanisms exist to communicate the status of recovery activities and progress in restoring operational capabilities to designated internal and external stakeholders."
      }
    ],
    "BCD-backup": [
      {
        "id": "BCD-11",
        "name": "Data Backups",
        "description": "Mechanisms exist to create recurring backups of data, software and/or system images, as well as verify the integrity of these backups, to ensure the availability of the data to satisfy Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs)."
      },
      {
        "id": "BCD-01.7",
        "name": "Business Continuity & Disaster Recovery (BC/DR) Plans",
        "description": "Mechanisms exist for process owners to establish and maintain formal Business Continuity & Disaster Recovery (BC/DR) plans to ensure information is detailed enough, accurate and representative of current operations in order to sustain and/or restore operations under adverse conditions."
      },
      {
        "id": "BCD-07",
        "name": "Alternative Security Measures",
        "description": "Mechanisms exist to implement alternative or compensating controls to satisfy security functions when the primary means of implementing the security function is unavailable or compromised."
      },
      {
        "id": "BCD-08",
        "name": "Alternate Storage Site",
        "description": "Mechanisms exist to establish an alternate storage site that includes both the assets and necessary agreements to permit the storage and recovery of system backup information."
      },
      {
        "id": "BCD-09",
        "name": "Alternate Processing Site",
        "description": "Mechanisms exist to establish an alternate processing site that provides security measures equivalent to that of the primary site."
      }
    ],
    "BCD-review": [
      {
        "id": "BCD-02",
        "name": "Identify Critical Assets",
        "description": "Mechanisms exist to identify and document the critical Technology Assets, Applications, Services and/or Data (TAASD) that support essential missions and business functions."
      },
      {
        "id": "BCD-11.1",
        "name": "Testing for Reliability & Integrity",
        "description": "Mechanisms exist to routinely test backups that verify the reliability of the backup process, as well as the integrity and availability of the data."
      },
      {
        "id": "BCD-12.1",
        "name": "Transaction Recovery",
        "description": "Mechanisms exist to utilize specialized backup mechanisms that will allow transaction recovery for transaction-based Technology Assets, Applications and/or Services (TAAS) in accordance with Recovery Point Objectives (RPOs)."
      },
      {
        "id": "BCD-02.1",
        "name": "Resume All Missions & Business Functions",
        "description": "Mechanisms exist to resume all missions and business functions within Recovery Time Objectives (RTOs) of the contingency plan's activation."
      },
      {
        "id": "BCD-02.2",
        "name": "Continue Essential Mission & Business Functions",
        "description": "Mechanisms exist to continue essential missions and business functions with little or no loss of operational continuity and sustain that continuity until full system restoration at primary processing and/or storage sites."
      }
    ],
    "IRO-readiness": [
      {
        "id": "IRO-01",
        "name": "Incident Response Operations",
        "description": "Mechanisms exist to implement and govern processes and documentation to facilitate an organization-wide response capability for cybersecurity and data protection-related incidents."
      }
    ],
    "IRO-detection": [
      {
        "id": "IRO-10.1",
        "name": "Automated Reporting",
        "description": "Automated mechanisms exist to assist in the reporting of cybersecurity and data protection incidents."
      },
      {
        "id": "IRO-10.2",
        "name": "Cyber Incident Reporting for Sensitive / Regulated Data",
        "description": "Mechanisms exist to report sensitive and/or regulated data incidents in a timely manner."
      },
      {
        "id": "IRO-09",
        "name": "Situational Awareness For Incidents",
        "description": "Mechanisms exist to document, monitor and report the status of cybersecurity and data protection incidents to internal stakeholders all the way through the resolution of the incident."
      },
      {
        "id": "IRO-09.1",
        "name": "Automated Tracking, Data Collection & Analysis",
        "description": "Automated mechanisms exist to assist in the tracking, collection and analysis of information from actual and potential cybersecurity and data protection incidents."
      }
    ],
    "IRO-handling": [
      {
        "id": "IRO-02",
        "name": "Incident Handling",
        "description": "Mechanisms exist to cover:\n(1) Preparation;\n(2) Automated event detection or manual incident report intake;\n(3) Analysis;\n(4) Containment;\n(5) Eradication; and\n(6) Recovery."
      },
      {
        "id": "IRO-04",
        "name": "Incident Response Plan (IRP)",
        "description": "Mechanisms exist to maintain and make available a current and viable Incident Response Plan (IRP) to all stakeholders."
      },
      {
        "id": "IRO-05",
        "name": "Incident Response Training",
        "description": "Mechanisms exist to train personnel in their incident response roles and responsibilities."
      },
      {
        "id": "IRO-06",
        "name": "Incident Response Testing",
        "description": "Mechanisms exist to formally test incident response capabilities through realistic exercises to determine the operational effectiveness of those capabilities."
      },
      {
        "id": "IRO-07",
        "name": "Integrated Security Incident Response Team (ISIRT)",
        "description": "Mechanisms exist to establish an integrated team of cybersecurity, IT and business function representatives that are capable of addressing cybersecurity and data protection incident response operations."
      }
    ],
    "PRM-portfolio": [
      {
        "id": "PRM-01",
        "name": "Security, Compliance & Resilience Protection Portfolio Management",
        "description": "Mechanisms exist to facilitate the implementation of resource planning controls that provide a portfolio management approach to achieve security, compliance and resilience objectives."
      }
    ],
    "PRM-sdlc": [
      {
        "id": "PRM-07",
        "name": "Secure Development Life Cycle (SDLC) Management",
        "description": "Mechanisms exist to ensure changes to Technology Assets, Applications and/or Services (TAAS) within the Secure Development Life Cycle (SDLC) are controlled through formal change control procedures."
      },
      {
        "id": "PRM-08",
        "name": "Manage Organizational Knowledge",
        "description": "Mechanisms exist to manage the organizational knowledge of the security, compliance and resilience staff."
      }
    ],
    "IAC-governance": [
      {
        "id": "IAC-01",
        "name": "Identity & Access Management (IAM)",
        "description": "Mechanisms exist to facilitate the implementation of identification and access management controls."
      }
    ],
    "IAC-provisioning": [
      {
        "id": "IAC-07",
        "name": "User Provisioning & De-Provisioning",
        "description": "Mechanisms exist to utilize a formal user registration and de-registration process that governs the assignment of access rights."
      },
      {
        "id": "IAC-07.1",
        "name": "Change of Roles & Duties",
        "description": "Mechanisms exist to revoke user access rights following changes in personnel roles and duties, if no longer necessary or permitted."
      },
      {
        "id": "IAC-07.2",
        "name": "Termination of Employment",
        "description": "Mechanisms exist to revoke user access rights in a timely manner, upon termination of employment or contract."
      },
      {
        "id": "IAC-10",
        "name": "Authenticator Management",
        "description": "Mechanisms exist to:\n(1) Securely manage authenticators for users and devices; and\n(2) Ensure the strength of authentication is appropriate to the classification of the data being accessed."
      },
      {
        "id": "IAC-10.5",
        "name": "Protection of Authenticators",
        "description": "Mechanisms exist to protect authenticators commensurate with the sensitivity of the information to which use of the authenticator permits access."
      }
    ],
    "IAC-review": [
      {
        "id": "IAC-17",
        "name": "Periodic Review of Account Privileges",
        "description": "Mechanisms exist to periodically-review the privileges assigned to individuals and service accounts to validate the need for such privileges and reassign or remove unnecessary privileges, as necessary."
      },
      {
        "id": "IAC-28.1",
        "name": "Management Approval For New or Changed Accounts",
        "description": "Mechanisms exist to ensure management approvals are required for new accounts or changes in permissions to existing accounts."
      },
      {
        "id": "IAC-21.4",
        "name": "Auditing Use of Privileged Functions",
        "description": "Mechanisms exist to audit the execution of privileged functions."
      }
    ]
  }
};
