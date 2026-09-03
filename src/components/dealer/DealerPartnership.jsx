import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { FadeUp, WordReveal } from '../Reveal';

const benefits = [
  'Diverse laminate portfolio',
  'Wholesale-focused approach',
  'Competitive business value',
];

function DealerPartnership() {
  return (
    <section className="bg-night py-28 text-ivory md:py-36" aria-labelledby="dealer-heading">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <FadeUp>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-bronze">
              For Dealers
            </p>
          </FadeUp>
          <WordReveal
            as="h2"
            id="dealer-heading"
            text="Grow Your Business With the Right Product Partner."
            className="mt-8 font-display text-[11vw] font-light leading-[0.94] text-ivory sm:text-[7vw] lg:text-[4.4vw]"
          />
          <p className="mt-8 max-w-2xl font-sans text-sm font-light leading-loose text-ivory/60">
            We understand that dealers need more than products. They need availability, variety,
            competitive pricing and dependable support. Arti Agencies works with trade partners to
            help them serve customers better and expand their product offering.
          </p>
        </div>
        <FadeUp delay={0.15} className="lg:col-span-5 lg:pt-20">
          <p className="font-display text-2xl">Why Partner With Us?</p>
          <ul className="mt-6 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 border-b border-ivory/10 pb-4 font-sans text-sm font-light text-ivory/70"
              >
                <CheckIcon className="h-4 w-4 text-rust" />
                {benefit}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-ivory px-7 py-4 font-sans text-[10px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-rust hover:text-ivory"
          >
            Become a Dealer
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

export { DealerPartnership };
