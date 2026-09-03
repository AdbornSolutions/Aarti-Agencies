import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { imagery } from '../data/site';
import { CurtainImage, DrawLine, FadeUp, WordReveal } from './Reveal';
import { useCursor } from './CursorProvider';

function BrandIntro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);
  const { hoverProps } = useCursor();

  return (
    <section
      ref={ref}
      className="relative w-full bg-sand py-28 md:py-40"
      aria-labelledby="brand-intro-heading"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <FadeUp>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-bronze">
              (01) — About Us
            </span>
          </FadeUp>
          <DrawLine className="mt-6 h-px w-full bg-ink/15" />
          <WordReveal
            as="h2"
            id="brand-intro-heading"
            text="A Trusted Name in Laminate Distribution."
            className="mt-10 max-w-2xl font-display text-[10vw] font-light leading-[0.94] text-ink sm:text-[7vw] lg:text-[4.6vw]"
          />
          <FadeUp delay={0.15}>
            <p className="mt-10 max-w-xl font-sans text-base font-light leading-loose text-graphite/75">
              Arti Agencies is a Nagpur-based wholesale laminate supplier and distributor serving
              customers and trade partners across the Vidarbha region of Maharashtra.
            </p>
            <p className="mt-6 max-w-xl font-sans text-base font-light leading-loose text-graphite/75">
              We specialise in decorative laminates, high-pressure laminates, designer surfaces and
              premium finishes for residential, commercial and furniture applications.
            </p>
            <p className="mt-6 max-w-xl font-sans text-base font-light leading-loose text-graphite/75">
              Our focus is quality products, competitive value and dependable service, supported by
              long-term relationships with customers and trade partners.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <Link
              to="/products"
              {...hoverProps()}
              className="group mt-12 inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.22em] text-ink"
            >
              <span className="relative">
                Explore Our Products
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-ink/30 transition-transform duration-500 ease-editorial group-hover:origin-left group-hover:scale-x-0" />
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 ease-editorial group-hover:border-rust group-hover:bg-rust group-hover:text-ivory">
                <ArrowRightIcon className="h-3.5 w-3.5" strokeWidth={1.4} />
              </span>
            </Link>
          </FadeUp>
        </div>
        <motion.div style={{ y: imageY }} className="lg:col-span-5">
          <CurtainImage
            src={imagery.brandStory}
            alt="Premium laminate sample sheets"
            className="aspect-[4/5] w-full"
          />
          <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.24em] text-graphite/50">
            Wholesale laminate supplier — Nagpur, Maharashtra
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export { BrandIntro };
