import { useOutletContext } from 'react-router-dom';
import { Applications } from '../components/Applications';
import { BrandIntro } from '../components/BrandIntro';
import { Categories } from '../components/Categories';
import { ConsultationCta } from '../components/ConsultationCta';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { TextureExperience } from '../components/TextureExperience';
import { WhyChoose } from '../components/WhyChoose';

function HomePage() {
  const { ready } = useOutletContext();
  return (
    <>
      <Hero ready={ready} />
      <BrandIntro />
      <Categories />
      <TextureExperience />
      <WhyChoose />
      <Applications />
      <FeaturedCollection />
      <Projects />
      <ConsultationCta />
    </>
  );
}

export { HomePage };
