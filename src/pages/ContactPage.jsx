import { PageHero } from '../components/common/PageHero';
import { ContactDetails } from '../components/contact/ContactDetails';
import { DealerPartnership } from '../components/dealer/DealerPartnership';
import { imagery } from '../data/site';

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build a Strong Partnership."
        description="Contact our Nagpur team for product selection, availability, wholesale enquiries or dealer partnership opportunities across Vidarbha."
        image={imagery.cta}
      />
      <ContactDetails />
      <DealerPartnership />
    </>
  );
}

export { ContactPage };
