import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/cyber_security', destination: '/services/cybersecurity-consulting', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      { source: '/our-locations', destination: '/contact', permanent: true },
      { source: '/security-compliance-customization', destination: '/services/security-compliance', permanent: true },
      { source: '/application-integration-services', destination: '/services/application-integration', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/team/arun-gopakumar', destination: '/management/arun-gopakumar', permanent: true },
      { source: '/cloud-native-solutions', destination: '/services/cloud-native-solutions', permanent: true },
      { source: '/about-us', destination: '/company', permanent: true },
      { source: '/leadership/arun-gopakumar', destination: '/management/arun-gopakumar', permanent: true },
      { source: '/cloud-assurance-services', destination: '/services/cloud-assurance', permanent: true },
      { source: '/governance-risk-and-compliance-grc', destination: '/services/grc-services', permanent: true },
      { source: '/cloud-data-migration-modernization', destination: '/services/cloud-data-migration', permanent: true },
      { source: '/distributed-hybrid-cloud-solutions', destination: '/services/distributed-hybrid-cloud', permanent: true },
      { source: '/cloud-operations-intelligent-automation', destination: '/services/cloud-operations', permanent: true },
      { source: '/custom-application-development', destination: '/services/custom-app-development', permanent: true },
      { source: '/iot-services', destination: '/services/iot-services', permanent: true },
      { source: '/leadership/khairul-azam-ahmad', destination: '/management/khairul-azam-ahmad', permanent: true },
      { source: '/discover-our-ot-security-services', destination: '/services/ot-security', permanent: true },
      { source: '/end-user-computing', destination: '/services/end-user-computing', permanent: true },
      { source: '/service-post/cyber-security', destination: '/services/cybersecurity-consulting', permanent: true },
      { source: '/leadership/kiran-gopakumar', destination: '/management/kiran-gopakumar', permanent: true },
      { source: '/threat-intelligence-and-analytics', destination: '/services/threat-intelligence', permanent: true },
      { source: '/cloud-consulting-services', destination: '/services/cloud-consulting', permanent: true },
      { source: '/network-security-services', destination: '/services/network-as-a-platform', permanent: true },
      { source: '/leadership/ravi-prakasha', destination: '/management/ravi-prakasha', permanent: true },
      { source: '/cyber-security-services', destination: '/services/cybersecurity-consulting', permanent: true },
      { source: '/identity-and-access-management-iam-solutions', destination: '/services/iam', permanent: true },
      { source: '/workflow-automation-optimization', destination: '/services/workflow-automation', permanent: true },
      { source: '/network-as-a-platform', destination: '/services/network-as-a-platform', permanent: true },
      { source: '/leadership/mohamed-ali', destination: '/management/mohamed-ali', permanent: true },
      { source: '/api-development-integration', destination: '/services/api-development', permanent: true },
      { source: '/penetration-testing-services', destination: '/services/penetration-testing', permanent: true },
      { source: '/legacy-application-modernization', destination: '/services/legacy-app-modernization', permanent: true },
      { source: '/cloud-security', destination: '/services/cloud-security', permanent: true },
      { source: '/auxiliary-services', destination: '/services/auxiliary-services', permanent: true },
      { source: '/auxilary-services', destination: '/services/auxiliary-services', permanent: true },
      { source: '/industry-cloud-solutions', destination: '/services/industry-cloud', permanent: true },
      { source: '/ai-powered-cybersecurity-solutions', destination: '/services/security-for-ai', permanent: true },
      { source: '/end-to-end-it-infrastructure-management', destination: '/services/infrastructure-management', permanent: true },
    ];
  },
};

export default nextConfig;

