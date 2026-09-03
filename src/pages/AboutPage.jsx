import { BrandIntro } from '../components/BrandIntro';
import { PageHero } from '../components/common/PageHero';
import { MarketReach } from '../components/about/MarketReach';
import { WhoWeServe } from '../components/about/WhoWeServe';
import { WhyChoose } from '../components/WhyChoose';
import { imagery } from '../data/site';

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Arti Agencies"
        title="A Trusted Name in Laminate Distribution."
        description="A Nagpur-based wholesale laminate supplier and distributor serving customers and trade partners across the Vidarbha region of Maharashtra."
        image={imagery.brandStory}
      />
      <BrandIntro />
      <MarketReach />
      <WhoWeServe />
      <WhyChoose />
    </>
  );
}

export { AboutPage };
