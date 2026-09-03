import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { imagery } from '../data/site';
import { MagneticButton } from './MagneticButton';
import { FadeUp, WordReveal } from './Reveal';
function ConsultationCta() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);
  return (
    <section
      ref={ref}
      className="relative flex min-h-[92svh] w-full items-center overflow-hidden bg-ink"
      aria-labelledby="consultation-heading"
    >
      <motion.img
        src={imagery.cta}
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-24 text-center md:px-10">
        <FadeUp>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ivory/50">
            Wholesale &amp; Trade Enquiries
          </span>
        </FadeUp>
        <WordReveal
          as="h2"
          id="consultation-heading"
          text="The Right Products. A Reliable Partner."
          className="mx-auto mt-8 max-w-5xl font-display text-[12vw] font-light leading-[0.94] text-ivory sm:text-[8vw] lg:text-[5.4vw]"
        />
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl font-sans text-sm font-light leading-loose text-ivory/65">
            Explore laminate solutions for your customers, furniture requirements and interior
            projects across Nagpur and Vidarbha.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton variant="solid" tone="light" onClick={() => navigate('/products')}>
              Explore Products
            </MagneticButton>
            <MagneticButton variant="outline" tone="light" onClick={() => navigate('/contact')}>
              Contact Our Team
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
export { ConsultationCta };
