/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
const CursorContext = createContext({
  setCursor: () => void 0,
  clearCursor: () => void 0,
  hoverProps: () => ({ onMouseEnter: () => void 0, onMouseLeave: () => void 0 }),
});
function useCursor() {
  return useContext(CursorContext);
}
function CursorProvider({ enabled, children }) {
  const [state, setState] = useState({ active: false, label: '' });
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
    const move = (event) => {
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
  const api = useMemo(
    () => ({
      setCursor,
      clearCursor,
      hoverProps: (label = '') => ({
        onMouseEnter: () => setCursor(label),
        onMouseLeave: () => clearCursor(),
      }),
    }),
    [setCursor, clearCursor]
  );
  const size = state.label ? 104 : state.active ? 56 : 10;
  return (
    <CursorContext.Provider value={api}>
      {children}
      {enabled && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[120] hidden items-center justify-center rounded-full lg:flex"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
            opacity: visible ? 1 : 0,
          }}
        >
          <motion.span
            className="flex items-center justify-center rounded-full border border-ink"
            animate={{
              width: size,
              height: size,
              backgroundColor: state.active
                ? 'rgba(23, 23, 22, 0.88)'
                : 'rgba(23, 23, 22, 0.98)',
              borderColor: 'rgba(23, 23, 22, 0.95)',
            }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            style={{ mixBlendMode: 'normal' }}
          >
            <AnimatePresence>
              {state.label && (
                <motion.span
                  key={state.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="font-sans text-[10px] uppercase tracking-[0.28em] text-ivory"
                >
                  {state.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.span>
        </motion.div>
      )}
    </CursorContext.Provider>
  );
}
export { CursorProvider, useCursor };
