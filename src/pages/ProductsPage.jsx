import { Categories } from '../components/Categories';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { PageHero } from '../components/common/PageHero';
import { imagery } from '../data/site';

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Surface Solutions for Every Design."
        description="A varied laminate portfolio of designs, textures, colours and finishes for modern homes, offices, modular kitchens, furniture and commercial spaces."
        image={imagery.collectionMain}
      />
      <Categories />
      <FeaturedCollection />
    </>
  );
}

export { ProductsPage };
