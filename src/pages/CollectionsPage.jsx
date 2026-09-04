import { PageHero } from '../components/common/PageHero';
import { CatalogueCollections } from '../components/CatalogueCollections';
import { imagery } from '../data/site';

function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Curated Collections"
        title="Five Catalogues. Distinct Surface Stories."
        description="Explore the official Acrylica, Salient Mica, Sayaji and Shade Me collections, each connected to real product designs and its complete catalogue."
        image={imagery.collectionTexture}
      />
      <CatalogueCollections />
    </>
  );
}

export { CollectionsPage };
