import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState } from
'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';

type CursorState = {active: boolean;label: string;};

type CursorApi = {
  setCursor: (label?: string) => void;
  clearCursor: () => void;
  hoverProps: (label?: string) => {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
};

const CursorContext = createContext<CursorApi>({
  setCursor: () => undefined,
  clearCursor: () => undefined,
  hoverProps: () => ({ onMouseEnter: () => undefined, onMouseLeave: () => undefined })
});

export function useCursor(): CursorApi {
  return useContext(CursorContext);
}

type Props = {
  enabled: boolean;
  children: React.ReactNode;
};

export function CursorProvider({ enabled, children }: Props) {
  const [state, setState] = useState<CursorState>({ active: false, label: '' });
  const [visible, setVisible] = useState(false);
  const finePointer = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 32, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 32, mass: 0.6 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    finePointer.current =
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!enabled || !finePointer.current) return;

    document.documentElement.classList.add('arti-cursor');
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      document.documentElement.classList.remove('arti-cursor');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [enabled, x, y]);

  const setCursor = useCallback((label = '') => setState({ active: true, label }), []);
  const clearCursor = useCallback(() => setState({ active: false, label: '' }), []);

  const api = useMemo<CursorApi>(
    () => ({
      setCursor,
      clearCursor,
      hoverProps: (label = '') => ({
        onMouseEnter: () => setCursor(label),
        onMouseLeave: () => clearCursor()
      })
    }),
    [setCursor, clearCursor]
  );

  const size = state.label ? 104 : state.active ? 56 : 10;

  return (
    <CursorContext.Provider value={api}>
      {children}
      {enabled &&
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[120] hidden items-center justify-center rounded-full lg:flex"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0
        }}>
        
          <motion.span
          className="flex items-center justify-center rounded-full border border-ivory/60"
          animate={{
            width: size,
            height: size,
            backgroundColor: state.label ?
            'rgba(182, 94, 60, 0.92)' :
            state.active ?
            'rgba(245, 241, 232, 0.12)' :
            'rgba(245, 241, 232, 0.95)',
            borderColor: state.label ? 'rgba(182,94,60,0)' : 'rgba(245,241,232,0.55)'
          }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          style={{ mixBlendMode: state.label ? 'normal' : 'difference' }}>
          
            <AnimatePresence>
              {state.label &&
            <motion.span
              key={state.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="font-sans text-[10px] uppercase tracking-[0.28em] text-ivory">
              
                  {state.label}
                </motion.span>
            }
            </AnimatePresence>
          </motion.span>
        </motion.div>
      }
    </CursorContext.Provider>);

}