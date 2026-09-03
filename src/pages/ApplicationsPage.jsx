import { Applications } from '../components/Applications';
import { ConsultationCta } from '../components/ConsultationCta';
import { PageHero } from '../components/common/PageHero';
import { imagery } from '../data/site';

function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Built Around Professional Requirements."
        description="Laminate solutions for dealers, furniture manufacturers, modular kitchen manufacturers, designers, architects, contractors, retailers and interior professionals."
        image={imagery.collectionInterior}
      />
      <Applications />
      <ConsultationCta />
    </>
  );
}

export { ApplicationsPage };
