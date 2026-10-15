import type { Metadata } from 'next';
import HeroSectionV1 from './components/hero/HeroSectionV1';
import TrustSection from './components/sections/TrustSection';
import SolutionsSection from './components/sections/SolutionsSection';
import StrategicDefenceSection from './components/sections/StrategicDefenceSection';
import QuantumSafeSection from './components/sections/QuantumSafeSection';
import IndustryExpertiseSection from './components/sections/IndustryExpertiseSection';
import PlatformSpotlightSection from './components/sections/PlatformSpotlightSection';
import InsightsSection from './components/sections/InsightsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactCTASection from './components/sections/ContactCTASection';
import RevealObserver from './components/utils/RevealObserver';

export const metadata: Metadata = {
  title: 'Enterprise Cybersecurity & Managed Security Services | Ssquad Global',
  description: 'Ssquad Global provides enterprise cybersecurity, managed security, threat intelligence, cloud and IT services to protect businesses from evolving cyber threats.',
};

export default function Home() {
  return (
    <main>
      <RevealObserver />
      <HeroSectionV1 />
      <TrustSection />
      <SolutionsSection />
      <StrategicDefenceSection />
      <QuantumSafeSection />
      <PlatformSpotlightSection />
      <IndustryExpertiseSection />
      <InsightsSection />
      <CertificationsSection />
      <ContactCTASection />
    </main>
  );
}
