import { DrawLine, FadeUp, WordReveal } from '../Reveal';

const audiences = [
  'Plywood & Laminate Dealers',
  'Furniture Manufacturers',
  'Modular Kitchen Manufacturers',
  'Interior Designers',
  'Architects',
  'Contractors',
  'Retailers',
  'Commercial Interior Businesses',
  'Residential Interior Professionals',
];

function WhoWeServe() {
  return (
    <section className="bg-sand py-28 md:py-36" aria-labelledby="audience-heading">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <FadeUp>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-bronze">
            Who We Serve
          </p>
        </FadeUp>
        <WordReveal
          as="h2"
          id="audience-heading"
          text="Built Around Professional Requirements."
          className="mt-8 max-w-4xl font-display text-[11vw] font-light leading-[0.94] text-ink sm:text-[7vw] lg:text-[4.4vw]"
        />
        <div className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <FadeUp key={audience} delay={index * 0.04}>
              <DrawLine className="h-px w-full bg-ink/15" />
              <p className="py-6 font-display text-2xl font-light text-ink">{audience}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WhoWeServe };
