import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { imagery } from '../data/site';
import { CurtainImage, DrawLine, FadeUp, EASE } from './Reveal';
import { useCursor } from './CursorProvider';
function FeaturedCollection() {
  const ref = useRef(null);
  const { hoverProps } = useCursor();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const slowY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const fastY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-ink py-28 md:py-40"
      aria-labelledby="featured-collection-heading"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <FadeUp>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-bronze">
            (07) — Featured Collection
          </span>
        </FadeUp>
        <DrawLine className="mt-6 h-px w-full bg-ivory/15" />
        <div className="grid grid-cols-1 gap-12 pt-14 lg:grid-cols-12 lg:gap-10">
          <motion.div style={{ y: slowY }} className="lg:col-span-5 lg:pt-24">
            <CurtainImage
              src={imagery.collectionMain}
              alt="Wardrobe wall in vertical woodgrain laminate from The Natural Edit"
              className="aspect-[3/4] w-full"
            />
          </motion.div>
          <div className="flex flex-col justify-center lg:col-span-4">
            <motion.h2
              id="featured-collection-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: EASE }}
              className="font-display text-[13vw] font-light leading-[0.9] text-ivory sm:text-[8vw] lg:text-[4.8vw]"
            >
              The Natural
              <span className="block italic text-rust">Edit</span>
            </motion.h2>
            <FadeUp delay={0.15}>
              <p className="mt-8 max-w-md font-sans text-sm font-light leading-loose text-ivory/60">
                A refined collection inspired by the richness of natural materials, bringing warmth,
                texture, and character into contemporary interiors.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ivory/15 pt-8">
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-[0.24em] text-ivory/40">
                    Décors
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-ivory">36</dd>
                </div>
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-[0.24em] text-ivory/40">
                    Finishes
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-ivory">Matte · Suede</dd>
                </div>
              </dl>
            </FadeUp>
            <FadeUp delay={0.35}>
              <a
                href="#collections"
                {...hoverProps()}
                className="group mt-12 inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.22em] text-ivory"
              >
                Explore Collection
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 transition-colors duration-300 ease-editorial group-hover:border-rust group-hover:bg-rust">
                  <ArrowRightIcon className="h-3.5 w-3.5" strokeWidth={1.3} />
                </span>
              </a>
            </FadeUp>
          </div>
          <motion.div style={{ y: fastY }} className="flex flex-col gap-6 lg:col-span-3">
            <CurtainImage
              src={imagery.collectionTexture}
              alt="Close-up of open-pore oak woodgrain laminate"
              className="aspect-square w-full"
              delay={0.1}
            />
            <CurtainImage
              src={imagery.collectionInterior}
              alt="Modular kitchen finished in walnut woodgrain laminate"
              className="aspect-[4/5] w-full"
              delay={0.2}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export { FeaturedCollection };
