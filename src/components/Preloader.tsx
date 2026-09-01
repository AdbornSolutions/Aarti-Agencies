import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from './Reveal';

type Props = {
  onComplete: () => void;
};

/** Curtain intro: the wordmark settles, then the panel lifts to reveal the hero. */
export function Preloader({ onComplete }: Props) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {open &&
      <motion.div
        className="fixed inset-0 z-[110] flex items-end justify-between bg-ink px-6 pb-10 md:px-12"
        exit={{ y: '-100%' }}
        transition={{ duration: 0.9, ease: EASE }}>
        
          <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="font-display text-[13vw] leading-[0.85] text-ivory md:text-[9vw]">
          
            Arti
          </motion.span>
          <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          className="pb-3 font-sans text-[10px] uppercase tracking-[0.3em] text-ivory/50">
          
            Surfaces &amp; Laminates
          </motion.span>
        </motion.div>
      }
    </AnimatePresence>);

}