import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { textures } from '../data/site';
import { EASE } from './Reveal';
import { useCursor } from './CursorProvider';

/**
 * Vertical scroll is translated into a horizontal traverse of the texture reel.
 * The section background adopts the tone of whichever texture is centred.
 */
type Props = {
  stacked?: boolean;
};

export function TextureExperience({ stacked = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const { hoverProps } = useCursor();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const count = textures.length;
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(count - 1) / count * 100}%`]);

  useEffect(() => {
    return scrollYProgress.on('change', (value) => {
      const next = Math.min(count - 1, Math.max(0, Math.round(value * (count - 1))));
      setIndex(next);
    });
  }, [scrollYProgress, count]);

  const current = textures[index];

  if (stacked) {
    return (
      <section ref={ref} className="w-full bg-night py-28 md:py-36" aria-label="Laminate textures">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <h2 className="max-w-xl font-display text-[10vw] font-light leading-[0.95] text-ivory sm:text-[6vw] lg:text-[3.4vw]">
            Feel the Difference in Every Detail.
          </h2>
          <div className="mt-14 space-y-16">
            {textures.map((texture) =>
            <article key={texture.code} className="grid gap-6 md:grid-cols-12 md:items-end">
                <div className="overflow-hidden md:col-span-8">
                  <img
                  src={texture.image}
                  alt={`${texture.name} laminate finish`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover" />
                
                </div>
                <div className="md:col-span-4">
                  <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-rust">
                    {texture.name}
                  </p>
                  <p className="mt-3 font-display text-2xl font-light leading-snug text-ivory">
                    {texture.caption}
                  </p>
                  <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.24em] text-ivory/40">
                    {texture.code}
                  </p>
                </div>
              </article>
            )}
          </div>
          <a
            href="#collections"
            {...hoverProps()}
            className="group mt-16 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.22em] text-ivory">
            
            View All Collections
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1.5"
              strokeWidth={1.3} />
            
          </a>
        </div>
      </section>);

  }

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ height: `${count * 90}vh` }}
      aria-label="Interactive laminate texture showcase">
      
      <motion.div
        className="sticky top-0 flex h-[100svh] flex-col overflow-hidden"
        animate={{ backgroundColor: current.tone }}
        transition={{ duration: 0.9, ease: EASE }}>
        
        <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between px-6 pt-28 md:px-10 md:pt-32">
          <h2
            className="max-w-xl font-display text-[9vw] font-light leading-[0.95] sm:text-[5.4vw] lg:text-[3.4vw]"
            style={{ color: current.ink }}>
            
            Feel the Difference in Every Detail.
          </h2>
          <span
            className="hidden font-sans text-[10px] uppercase tracking-[0.28em] opacity-50 md:block"
            style={{ color: current.ink }}>
            
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
        </div>

        <div className="relative mt-10 flex-1 overflow-hidden">
          <motion.div className="flex h-full" style={{ x, width: `${count * 100}%` }}>
            {textures.map((texture, i) =>
            <div
              key={texture.name}
              className="flex h-full w-full shrink-0 items-center justify-center px-6 md:px-10"
              style={{ width: `${100 / count}%` }}>
              
                <motion.div
                className="relative h-[46vh] w-full max-w-4xl overflow-hidden md:h-[52vh]"
                animate={{ scale: index === i ? 1 : 0.9, opacity: index === i ? 1 : 0.35 }}
                transition={{ duration: 0.8, ease: EASE }}>
                
                  <img
                  src={texture.image}
                  alt={`${texture.name} laminate finish`}
                  loading="lazy"
                  className="h-full w-full object-cover" />
                
                  <span
                  className="absolute left-4 top-4 font-sans text-[10px] uppercase tracking-[0.24em] text-ivory/80"
                  aria-hidden="true">
                  
                    {texture.code}
                  </span>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>

        <div className="mx-auto w-full max-w-[1600px] px-6 pb-12 md:px-10 md:pb-16">
          <div
            className="flex flex-col gap-6 border-t pt-6 md:flex-row md:items-end md:justify-between"
            style={{ borderColor: `${current.ink}26` }}>
            
            <div className="overflow-hidden">
              <motion.div
                key={current.name}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: EASE }}>
                
                <p
                  className="font-sans text-[11px] uppercase tracking-[0.3em]"
                  style={{ color: '#B65E3C' }}>
                  
                  {current.name}
                </p>
                <p
                  className="mt-3 max-w-lg font-display text-2xl font-light leading-snug md:text-3xl"
                  style={{ color: current.ink }}>
                  
                  {current.caption}
                </p>
              </motion.div>
            </div>

            <a
              href="#collections"
              {...hoverProps()}
              className="group inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.22em]"
              style={{ color: current.ink }}>
              
              View All Collections
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1.5"
                strokeWidth={1.3} />
              
            </a>
          </div>

          <div className="mt-6 flex gap-2" aria-hidden="true">
            {textures.map((texture, i) =>
            <motion.span
              key={texture.code}
              className="h-px flex-1"
              animate={{
                backgroundColor: i <= index ? '#B65E3C' : `${current.ink}2b`
              }}
              transition={{ duration: 0.5, ease: EASE }} />

            )}
          </div>
        </div>
      </motion.div>
    </section>);

}