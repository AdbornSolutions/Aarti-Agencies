import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from './CursorProvider';

type Props = {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  tone?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
};

/** A button that leans very slightly toward the pointer — used only on primary actions. */
export function MagneticButton({
  children,
  variant = 'solid',
  tone = 'dark',
  className = '',
  onClick
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const { setCursor, clearCursor } = useCursor();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 22, mass: 0.5 });

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.22);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.22);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    clearCursor();
  };

  const palette =
  variant === 'solid' ?
  tone === 'dark' ?
  'bg-ink text-ivory hover:bg-rust' :
  'bg-ivory text-ink hover:bg-rust hover:text-ivory' :
  variant === 'outline' ?
  tone === 'dark' ?
  'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory' :
  'border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink' :
  tone === 'dark' ?
  'text-ink hover:text-rust' :
  'text-ivory hover:text-rust';

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseEnter={() => setCursor()}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-sans text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust ${palette} ${className}`}>
      
      {children}
    </motion.button>);

}