import { PageHero } from '../components/common/PageHero';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { TextureExperience } from '../components/TextureExperience';
import { imagery } from '../data/site';

function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Curated Collections"
        title="Texture. Tone. Character."
        description="Discover considered surface stories, from warm natural grains and tactile mattes to expressive stone and high-clarity finishes."
        image={imagery.collectionTexture}
      />
      <TextureExperience />
      <FeaturedCollection />
    </>
  );
}

export { CollectionsPage };
