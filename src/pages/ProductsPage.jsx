import { Categories } from '../components/Categories';
import { ProductCatalogue } from '../components/ProductCatalogue';
import { PageHero } from '../components/common/PageHero';
import productsHero from '../assetss/Products/Sayaji_Project_2026_Product_Images/01_Wood_Grains_Premium/01_SF_2348_AMBER_TEAK.png';

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Five Catalogues. One Surface Library."
        description="Explore verified laminate families across woodgrain, stone, fluted, acrylic, matt, metallic and solid-colour surfaces for residential and commercial interiors."
        image={productsHero}
      />
      <Categories />
      <ProductCatalogue />
    </>
  );
}

export { ProductsPage };
