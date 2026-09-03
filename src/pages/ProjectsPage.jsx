import { PageHero } from '../components/common/PageHero';
import { Projects } from '../components/Projects';
import { imagery } from '../data/site';

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Surface Inspiration"
        title="Materials in Context."
        description="Explore how laminate designs, textures and finishes can complement residential, furniture and commercial interior applications."
        image={imagery.hero}
      />
      <Projects />
    </>
  );
}

export { ProjectsPage };
