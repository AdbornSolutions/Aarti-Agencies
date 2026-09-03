import { motion } from 'framer-motion';
import { EASE } from '../Reveal';

function PageHero({ eyebrow, title, description, image }) {
  return (
    <section id="top" className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink">
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(23,23,22,0.94),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-sans text-[10px] uppercase tracking-[0.3em] text-rust"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-5xl font-display text-[13vw] font-light leading-[0.88] text-ivory sm:text-[9vw] lg:text-[6vw]"
        >
          {title}
        </motion.h1>
        <p className="mt-8 max-w-xl border-t border-ivory/15 pt-6 font-sans text-sm font-light leading-relaxed text-ivory/65">
          {description}
        </p>
      </div>
    </section>
  );
}

export { PageHero };
