import { Categories } from '../components/Categories';
import { ProductCatalogue } from '../components/ProductCatalogue';
import { PageHero } from '../components/common/PageHero';
import { imagery } from '../data/site';

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Five Catalogues. One Surface Library."
        description="Explore verified laminate families across woodgrain, stone, fluted, acrylic, matt, metallic and solid-colour surfaces for residential and commercial interiors."
        image={imagery.collectionMain}
      />
      <Categories />
      <ProductCatalogue />
    </>
  );
}

export { ProductsPage };
