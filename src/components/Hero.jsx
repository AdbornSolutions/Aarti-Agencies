import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";
import { imagery } from "../data/site";
import { MagneticButton } from "./MagneticButton";
import { EASE } from "./Reveal";
const HEADLINE = ["Surfaces", "That Define", "Spaces."];
function Hero({ ready }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.45, 0.8]);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const depthX = useSpring(px, { stiffness: 60, damping: 24 });
  const depthY = useSpring(py, { stiffness: 60, damping: 24 });
  const handlePointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - rect.left) / rect.width - 0.5) * -26);
    py.set(((event.clientY - rect.top) / rect.height - 0.5) * -18);
  };
  return <section
    id="top"
    ref={ref}
    onMouseMove={handlePointer}
    className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-ink"
    aria-label="Arti Agencies — premium laminates"
  ><motion.div className="absolute inset-0" style={{ y: imageY }}><motion.img
    src={imagery.hero}
    alt="Modern interior with fluted woodgrain laminate wall panelling"
    className="h-[112%] w-full object-cover"
    style={{ x: depthX, y: depthY }}
    initial={{ scale: 1.14 }}
    animate={ready ? { scale: 1 } : { scale: 1.14 }}
    transition={{ duration: 2.4, ease: EASE }}
  /><motion.div
    className="absolute inset-0 bg-ink"
    style={{ opacity: overlay }}
    aria-hidden="true"
  /><div
    className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(23,23,22,0.92),transparent)]"
    aria-hidden="true"
  /></motion.div><motion.div
    style={{ y: contentY }}
    className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-12 px-6 pb-16 pt-40 md:px-10 md:pb-20"
  ><div className="flex items-end justify-between gap-10"><div className="max-w-5xl"><motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={ready ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
    className="mb-8 flex items-center gap-4"
  ><span className="h-px w-14 bg-rust" /><span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ivory/65">
                Decorative Laminates &amp; Surface Solutions
              </span></motion.div><h1 className="font-display text-[13vw] font-light leading-[0.86] text-ivory sm:text-[11vw] lg:text-[8.4vw]">{HEADLINE.map(
    (line, i) => <span key={line} className="block overflow-hidden"><motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={ready ? { y: "0%" } : { y: "110%" }}
      transition={{ duration: 1.3, ease: EASE, delay: 0.35 + i * 0.14 }}
    >{i === 2 ? <em className="not-italic text-rust">{line}</em> : line}</motion.span></span>
  )}</h1></div><motion.span
    initial={{ opacity: 0 }}
    animate={ready ? { opacity: 1 } : {}}
    transition={{ duration: 1, ease: EASE, delay: 0.9 }}
    className="arti-vertical hidden shrink-0 pb-4 font-sans text-[10px] uppercase tracking-[0.32em] text-ivory/40 xl:block"
  >
            
            Est. 2003 — Timeless materials, modern spaces
          </motion.span></div><motion.div
    initial={{ opacity: 0, y: 26 }}
    animate={ready ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, ease: EASE, delay: 0.85 }}
    className="flex flex-col gap-8 border-t border-ivory/15 pt-8 lg:flex-row lg:items-end lg:justify-between"
  ><p className="max-w-md font-sans text-sm font-light leading-relaxed text-ivory/70">
            Discover a world of premium laminates crafted to bring texture, character, and timeless
            elegance to every space.
          </p><div className="flex flex-wrap items-center gap-3"><MagneticButton variant="solid" tone="light">
              Explore Collections
            </MagneticButton><MagneticButton variant="outline" tone="light">
              Discover Arti Agencies
            </MagneticButton></div></motion.div></motion.div><motion.div
    aria-hidden="true"
    initial={{ opacity: 0 }}
    animate={ready ? { opacity: 1 } : {}}
    transition={{ duration: 1, delay: 1.2 }}
    className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
  ><span className="font-sans text-[9px] uppercase tracking-[0.3em] text-ivory/45">Scroll</span><span className="relative block h-10 w-px overflow-hidden bg-ivory/15"><motion.span
    className="absolute inset-x-0 top-0 block h-1/2 bg-ivory/70"
    animate={{ y: ["-100%", "200%"] }}
    transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
  /></span><ArrowDownIcon className="h-3.5 w-3.5 text-ivory/45" strokeWidth={1.2} /></motion.div></section>;
}
export {
  Hero
};
