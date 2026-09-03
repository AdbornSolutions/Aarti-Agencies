import { FadeUp, WordReveal } from '../Reveal';

function MarketReach() {
  return (
    <section className="bg-ivory py-28 md:py-36" aria-labelledby="market-heading">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <FadeUp>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-bronze">
              Our Market
            </p>
          </FadeUp>
          <WordReveal
            as="h2"
            id="market-heading"
            text="Serving Vidarbha from Nagpur."
            className="mt-8 font-display text-[11vw] font-light leading-[0.94] text-ink sm:text-[7vw] lg:text-[4.4vw]"
          />
        </div>
        <FadeUp delay={0.15} className="lg:col-span-5 lg:pt-16">
          <p className="font-sans text-base font-light leading-loose text-graphite/70">
            Nagpur’s strategic location gives Arti Agencies an ideal base for serving the Vidarbha
            region. We aim to make quality laminate solutions accessible to trade partners with
            dependable supply and responsive service.
          </p>
          <p className="mt-8 border-t border-ink/15 pt-6 font-sans text-[11px] uppercase tracking-[0.24em] text-rust">
            Nagpur · Vidarbha · Maharashtra
          </p>
          <p className="mt-4 font-display text-2xl font-light text-ink">
            Expanding reach. Strengthening partnerships. Delivering value.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

export { MarketReach };
