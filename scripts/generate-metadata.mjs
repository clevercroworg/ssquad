import fs from 'fs';
import path from 'path';

export const siteMetadata = [
  {
    path: 'app/layout.tsx',
    type: 'root_layout',
    title: 'Enterprise Cybersecurity & Managed Security Services | Ssquad Global',
    description: 'Ssquad Global provides enterprise cybersecurity, managed security, threat intelligence, cloud and IT services to protect businesses from evolving cyber threats.'
  },
  {
    path: 'app/page.tsx',
    type: 'home_page',
    title: 'Enterprise Cybersecurity & Managed Security Services | Ssquad Global',
    description: 'Ssquad Global provides enterprise cybersecurity, managed security, threat intelligence, cloud and IT services to protect businesses from evolving cyber threats.'
  },
  {
    path: 'app/company/layout.tsx',
    title: 'Ssquad Global | Cybersecurity & IT Services Company',
    description: 'Learn about Ssquad Global, a cybersecurity and IT services company delivering enterprise security, managed IT, cloud, infrastructure and cyber resilience solutions.'
  },
  {
    path: 'app/industries/layout.tsx',
    title: 'Industry-Specific Cybersecurity Solutions | Ssquad Global',
    description: 'Explore cybersecurity solutions for banking, manufacturing, energy, healthcare, insurance and government. Protect critical systems with Ssquad Global.'
  },
  {
    path: 'app/insights/page.tsx',
    type: 'insights_page',
    title: 'Cybersecurity Insights & Security Trends | Ssquad Global',
    description: 'Explore cybersecurity insights, threat trends, security research and expert guidance from Ssquad Global to strengthen enterprise cyber resilience.'
  },
  {
    path: 'app/contact/layout.tsx',
    title: 'Contact Ssquad Global | Enterprise Cybersecurity Experts',
    description: 'Contact Ssquad Global for enterprise cybersecurity, managed security, cloud and IT services. Connect with our cybersecurity experts in global markets.'
  },
  {
    path: 'app/privacy/layout.tsx',
    title: 'Privacy Policy | Ssquad Global',
    description: "Read Ssquad Global's Privacy Policy to learn how we collect, use, protect and safeguard personal information in accordance with applicable privacy standards."
  },
  {
    path: 'app/terms/layout.tsx',
    title: 'Terms of Service | Ssquad Global',
    description: 'Review the standard terms and conditions for engaging with Ssquad Global services and accessing our digital platforms.'
  },
  {
    path: 'app/ciso-roundtable-2026/layout.tsx',
    title: 'CISO Roundtable 2026 | Ssquad Global & Securonix',
    description: 'Join leading cybersecurity executives at the CISO Roundtable 2026 hosted by Ssquad Global and Securonix. Strategic dialogue on AI resilience and cyber defence.'
  },
  {
    path: 'app/services/application-security/layout.tsx',
    title: 'Application Security Services | SAST, DAST & API Security | Ssquad Global',
    description: "Protect applications with Ssquad Global's application security services, including SAST, DAST, API security, cloud security and runtime protection."
  },
  {
    path: 'app/services/ai-cybersecurity/layout.tsx',
    title: 'AI Cybersecurity Services | AI-Powered Threat Detection | Ssquad Global',
    description: 'Strengthen security with AI cybersecurity services from Ssquad Global for threat detection, automated response, UEBA, predictive analytics and SOC operations.'
  },
  {
    path: 'app/services/human-centric-cybersecurity/layout.tsx',
    title: 'Human-Centric Cybersecurity Services | Ssquad Global',
    description: "Reduce human cyber risk with Ssquad Global's human-centric cybersecurity services, including human risk management, behavioral analytics and security awareness."
  },
  {
    path: 'app/services/threat-intelligence/layout.tsx',
    title: 'Threat Intelligence Services | Cyber Threat Intelligence | Ssquad Global',
    description: 'Detect emerging threats with cyber threat intelligence services from Ssquad Global. Track threat actors, analyze IOCs and gain actionable intelligence to protect your enterprise.'
  },
  {
    path: 'app/services/iam/layout.tsx',
    title: 'Identity & Access Management (IAM) Services | Ssquad Global',
    description: 'Secure identities with IAM services from Ssquad Global including MFA, SSO, PAM, identity governance and zero-trust access for enterprise environments.'
  },
  {
    path: 'app/services/ot-security/layout.tsx',
    title: 'OT Security Services | Industrial & ICS Cybersecurity | Ssquad Global',
    description: 'Protect industrial and critical infrastructure with OT security services from Ssquad Global covering risk assessments, compliance, consulting, threat detection and network security.'
  },
  {
    path: 'app/services/browser-security/layout.tsx',
    title: 'Browser Security Services | Managed Browser Security | Ssquad Global',
    description: 'Protect users from web threats with managed browser security from Ssquad Global, including phishing defense, malicious site isolation, zero-trust controls and SASE integration.'
  },
  {
    path: 'app/services/grc-services/layout.tsx',
    title: 'GRC Services | Governance, Risk & Compliance | Ssquad Global',
    description: "Strengthen governance, risk and compliance with Ssquad Global's GRC services for regulatory compliance, risk management, audits and enterprise governance."
  },
  {
    path: 'app/services/integrated-soc/layout.tsx',
    title: 'Integrated SOC Services | IT/OT Security Monitoring | Ssquad Global',
    description: 'Secure IT, OT and IoT environments with integrated SOC services from Ssquad Global, featuring unified threat detection, incident response and 24/7 security monitoring.'
  },
  {
    path: 'app/services/cybersecurity-consulting/layout.tsx',
    title: 'Cybersecurity Consulting Services | Ssquad Global',
    description: 'Improve your security posture with Ssquad Global cybersecurity consulting, risk assessments, security architecture, compliance guidance and cyber risk management.'
  },
  {
    path: 'app/services/quantum-safe-cybersecurity/layout.tsx',
    title: 'Quantum-Safe Cybersecurity Services | Ssquad Global',
    description: 'Prepare for quantum threats with post-quantum cryptography, NIST PQC guidance, risk assessment and quantum-safe migration services from Ssquad Global.'
  },
  {
    path: 'app/services/penetration-testing/layout.tsx',
    title: 'Penetration Testing Services | VAPT & Security Testing | Ssquad Global',
    description: 'Identify vulnerabilities with penetration testing across networks, applications and systems. Get actionable findings and remediation guidance from Ssquad Global.'
  },
  {
    path: 'app/services/security-for-ai/layout.tsx',
    title: 'Cybersecurity for AI Systems | AI Security Services | Ssquad Global',
    description: 'Protect AI systems with AI security services from Ssquad Global covering model protection, adversarial defense, secure data pipelines and AI threat monitoring.'
  },
  {
    path: 'app/services/infrastructure-management/layout.tsx',
    title: 'IT Infrastructure Management Services | Ssquad Global',
    description: 'Manage IT infrastructure with 24/7 monitoring, network management, cloud integration, data center security and IT lifecycle support from Ssquad Global.'
  },
  {
    path: 'app/services/auxiliary-services/layout.tsx',
    title: 'Auxiliary IT Services & Technical Support | Ssquad Global',
    description: 'Get auxiliary IT services from Ssquad Global including 24/7 technical support, contact center solutions, on-site support, remote troubleshooting and break-fix services.'
  },
  {
    path: 'app/services/end-user-computing/layout.tsx',
    title: 'End User Computing Managed Services | Ssquad Global',
    description: 'Secure and manage end-user computing with desktop management, MDM, identity access, remote management and application access services from Ssquad Global.'
  },
  {
    path: 'app/services/iot-services/layout.tsx',
    title: 'IoT Development Services | Industrial IoT & Edge Computing | Ssquad Global',
    description: 'Build connected solutions with IoT development services from Ssquad Global for Industrial IoT, smart cities, edge analytics, asset tracking and real-time telemetry.'
  },
  {
    path: 'app/services/network-as-a-platform/layout.tsx',
    title: 'Network as a Platform (NaaP) Services | Ssquad Global',
    description: 'Modernize enterprise networking with Network as a Platform services, SDN, API-driven networking, automation and AI-powered network intelligence from Ssquad Global.'
  },
  {
    path: 'app/services/cloud-data-migration/layout.tsx',
    title: 'Cloud Data Migration Services | Secure Cloud Migration | Ssquad Global',
    description: 'Migrate enterprise data securely to AWS, Azure or GCP with cloud data migration services from Ssquad Global designed for data integrity, security and minimal downtime.'
  },
  {
    path: 'app/services/cloud-consulting/layout.tsx',
    title: 'Cloud Consulting Services | Strategy & Optimization | Ssquad Global',
    description: 'Get cloud consulting from Ssquad Global for strategy, migration, multi-cloud optimization, security and FinOps to build a scalable, secure and cost-efficient cloud environment.'
  },
  {
    path: 'app/services/cloud-native-solutions/layout.tsx',
    title: 'Cloud Native Solutions & Services | Kubernetes & Microservices | Ssquad Global',
    description: 'Accelerate digital transformation with cloud native solutions from Ssquad Global including Kubernetes, microservices, serverless computing and CI/CD for scalable applications.'
  },
  {
    path: 'app/services/cloud-assurance/layout.tsx',
    title: 'Cloud Security Assessment & Assurance Services | Ssquad Global',
    description: 'Identify cloud vulnerabilities, misconfigurations, compliance gaps and security risks with expert cloud security assessment and assurance services from Ssquad Global.'
  },
  {
    path: 'app/services/cloud-security/layout.tsx',
    title: 'Cloud Security Services | AWS, Azure & Multi-Cloud | Ssquad Global',
    description: 'Protect AWS, Azure and multi-cloud environments with cloud security services from Ssquad Global covering CSPM, IAM, threat detection and DevSecOps.'
  },
  {
    path: 'app/services/cloud-operations/layout.tsx',
    title: 'Cloud Operations Services | AIOps & Automation | Ssquad Global',
    description: 'Optimize cloud operations with AIOps, automation, monitoring, DevOps and self-healing infrastructure across public, private and hybrid cloud environments from Ssquad Global.'
  },
  {
    path: 'app/services/distributed-hybrid-cloud/layout.tsx',
    title: 'Distributed & Hybrid Cloud Solutions | Ssquad Global',
    description: 'Connect public, private and edge environments with secure distributed and hybrid cloud solutions, scalable architecture, orchestration and zero-trust security from Ssquad Global.'
  },
  {
    path: 'app/services/industry-cloud/layout.tsx',
    title: 'Industry Cloud Solutions | Secure & Scalable Cloud | Ssquad Global',
    description: 'Build secure industry cloud solutions for healthcare, finance, manufacturing and retail with compliance, automation and faster deployment from Ssquad Global.'
  },
  {
    path: 'app/services/custom-app-development/layout.tsx',
    title: 'Custom Application Development Services | Ssquad Global',
    description: 'Build secure, scalable custom applications with Ssquad Global. Develop bespoke web and mobile apps, API integrations and cloud-native software for your business.'
  },
  {
    path: 'app/services/legacy-app-modernization/layout.tsx',
    title: 'Legacy Application Modernization Services | Ssquad Global',
    description: 'Modernize legacy applications through cloud migration, replatforming, refactoring and microservices to reduce technical debt and improve scalability with Ssquad Global.'
  },
  {
    path: 'app/services/application-integration/layout.tsx',
    title: 'Application Integration Services | Enterprise Solutions | Ssquad Global',
    description: 'Connect ERP, CRM, APIs, cloud and legacy systems with enterprise application integration services from Ssquad Global for seamless data exchange and connected workflows.'
  },
  {
    path: 'app/services/api-development/layout.tsx',
    title: 'API Development & Integration Services | Ssquad Global',
    description: 'Build secure, scalable REST, GraphQL and SOAP APIs with Ssquad Global. Connect enterprise systems, cloud platforms and third-party applications.'
  },
  {
    path: 'app/services/security-compliance/layout.tsx',
    title: 'Security Compliance Services | ISO 27001, SOC 2 & GDPR | Ssquad Global',
    description: 'Strengthen security compliance with ISO 27001, SOC 2, GDPR, HIPAA and PCI-DSS services from Ssquad Global, including assessments, remediation and compliance monitoring.'
  },
  {
    path: 'app/services/tpm-services/layout.tsx',
    title: 'Third-Party Maintenance (TPM) Services | Ssquad Global',
    description: 'Extend hardware lifespans, slash OEM maintenance costs, and get multi-vendor enterprise hardware support with Ssquad Global.'
  },
  {
    path: 'app/services/workflow-automation/layout.tsx',
    title: 'Workflow Automation Services | RPA & Business Process Automation | Ssquad Global',
    description: 'Streamline business processes with workflow automation, RPA, system integration and Power Automate from Ssquad Global to reduce manual work, errors and operational costs.'
  }
];

function generateLayoutCode(title, description) {
  return `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
}

// Generate layouts
for (const item of siteMetadata) {
  if (item.type === 'root_layout' || item.type === 'home_page' || item.type === 'insights_page') {
    continue;
  }

  const filePath = path.resolve(process.cwd(), item.path);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const content = generateLayoutCode(item.title, item.description);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated metadata layout for: ${item.path}`);
}
