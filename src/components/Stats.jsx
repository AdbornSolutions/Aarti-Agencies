import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { stats } from "../data/site";
import { DrawLine } from "./Reveal";
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}
function Stats() {
  return <section className="w-full bg-ivory py-24 md:py-32" aria-labelledby="stats-heading"><div className="mx-auto max-w-[1600px] px-6 md:px-10"><h2
    id="stats-heading"
    className="max-w-xl font-sans text-[10px] uppercase tracking-[0.3em] text-bronze"
  >
          
          (09) — Trusted by designers &amp; architects
        </h2><dl className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">{stats.map(
    (stat, i) => <div key={stat.label} className="pb-8 pt-8 lg:pr-8"><DrawLine className="mb-8 h-px w-full bg-ink/20" delay={i * 0.08} /><dd className="font-display text-[16vw] font-light leading-[0.82] text-ink sm:text-[9vw] lg:text-[5.2vw]"><Counter value={stat.value} suffix={stat.suffix} /></dd><dt className="mt-5 font-sans text-[11px] uppercase tracking-[0.2em] text-graphite/55">{stat.label}</dt></div>
  )}</dl></div></section>;
}
export {
  Stats
};
