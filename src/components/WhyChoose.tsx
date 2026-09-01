import React from 'react';
import { motion } from 'framer-motion';
import { strengths } from '../data/site';
import { DrawLine, FadeUp, WordReveal, EASE } from './Reveal';

export function WhyChoose() {
  return (
    <section
      className="relative w-full bg-night py-28 md:py-40"
      aria-labelledby="why-arti-heading">
      
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <FadeUp>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-bronze">
            (05) — Why Arti Agencies
          </span>
        </FadeUp>

        <WordReveal
          as="h2"
          id="why-arti-heading"
          text="Built for Design. Chosen for Quality."
          className="mt-8 max-w-4xl font-display text-[11vw] font-light leading-[0.94] text-ivory sm:text-[7vw] lg:text-[4.6vw]" />
        

        <div className="mt-20">
          {strengths.map((item, i) =>
          <div key={item.index}>
              <DrawLine className="h-px w-full bg-ivory/15" delay={i * 0.05} />
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-baseline md:gap-10">
              
                <motion.span
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 1, ease: EASE }}
                className="font-display text-5xl font-light text-ivory/25 transition-colors duration-500 ease-editorial group-hover:text-rust md:col-span-2 md:text-[4vw]">
                
                  {item.index}
                </motion.span>
                <h3 className="font-display text-3xl font-light text-ivory md:col-span-4 md:text-[2.2vw]">
                  {item.title}
                </h3>
                <p className="max-w-2xl font-sans text-sm font-light leading-loose text-ivory/55 md:col-span-6">
                  {item.description}
                </p>
              </motion.div>
            </div>
          )}
          <DrawLine className="h-px w-full bg-ivory/15" />
        </div>
      </div>
    </section>);

}