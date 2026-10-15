import HeroSectionV2 from '../components/hero/HeroSectionV2';
import TrustSection from '../components/sections/TrustSection';
import SolutionsSection from '../components/sections/SolutionsSection';
import StrategicDefenceSection from '../components/sections/StrategicDefenceSection';
import IndustryExpertiseSection from '../components/sections/IndustryExpertiseSection';
import PlatformSpotlightSection from '../components/sections/PlatformSpotlightSection';
import InsightsSection from '../components/sections/InsightsSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ContactCTASection from '../components/sections/ContactCTASection';
import RevealObserver from '../components/utils/RevealObserver';

export default function HomeV2() {
  return (
    <main>
      <RevealObserver />
      <HeroSectionV2 />
      <TrustSection />
      <SolutionsSection />
      <StrategicDefenceSection />
      <IndustryExpertiseSection />
      <PlatformSpotlightSection />
      <InsightsSection />
      <CertificationsSection />
      <ContactCTASection />
    </main>
  );
}
