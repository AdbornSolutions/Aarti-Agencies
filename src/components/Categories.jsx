import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/catalog';
import { DrawLine, FadeUp, WordReveal, EASE } from './Reveal';
import { useCursor } from './CursorProvider';
import { CatalogImage } from './CatalogImage';
const MotionLink = motion.create(Link);

function Categories() {
  const [active, setActive] = useState(null);
  const { setCursor, clearCursor } = useCursor();
  return (
    <section
      id="collections"
      className="relative w-full bg-ink py-28 md:py-36"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <WordReveal
            as="h2"
            id="categories-heading"
            text="Explore Our World of Surfaces"
            className="max-w-3xl font-display text-[11vw] font-light leading-[0.94] text-ivory sm:text-[7vw] lg:text-[4.4vw]"
          />
          <FadeUp delay={0.2}>
            <p className="max-w-xs font-sans text-sm font-light leading-relaxed text-ivory/55">
              Designs, textures, colours and finishes selected for varied furniture and interior
              requirements.
            </p>
          </FadeUp>
        </div>
        <DrawLine className="mt-14 h-px w-full bg-ivory/15" />
      </div>
      {/* Desktop: dimming panel row. Mobile: horizontal swipe rail. */}
      <div
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-10 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-3 lg:overflow-visible lg:pb-0 xl:grid-cols-8"
        onMouseLeave={() => setActive(null)}
      >
        {productCategories.map((category, i) => {
          const dimmed = active !== null && active !== i;
          return (
            <MotionLink
              key={category.name}
              to={`/products?category=${category.slug}#catalogue`}
              onMouseEnter={() => {
                setActive(i);
                setCursor('Explore');
              }}
              onMouseLeave={() => clearCursor()}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group relative block h-[70vh] min-h-[420px] w-[78vw] shrink-0 snap-center overflow-hidden sm:w-[52vw] lg:h-[74vh] lg:w-auto"
              animate={{ opacity: dimmed ? 0.42 : 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <CatalogImage
                loader={category.imageLoader}
                alt={category.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.035]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,23,22,0.9),rgba(23,23,22,0.15))]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <span className="font-sans text-[10px] tracking-[0.28em] text-ivory/70">
                  {category.index}
                </span>
                <motion.div
                  animate={{ y: active === i ? -8 : 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <h3 className="font-display text-3xl font-light leading-tight text-ivory lg:text-[1.9vw]">
                    {category.name}
                  </h3>
                  <motion.p
                    className="mt-3 max-w-[22ch] font-sans text-xs font-light leading-relaxed text-ivory/65"
                    animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 8 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    {category.blurb}
                  </motion.p>
                  <span className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors duration-300 ease-editorial group-hover:border-rust group-hover:bg-rust">
                    <ArrowUpRightIcon
                      className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.3}
                    />
                  </span>
                </motion.div>
              </div>
            </MotionLink>
          );
        })}
      </div>
    </section>
  );
}
export { Categories };
