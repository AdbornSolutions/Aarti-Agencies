import { motion } from "framer-motion";
const EASE = [0.23, 1, 0.32, 1];
function FadeUp({ children, delay = 0, className, distance = 28 }) {
  return <motion.div
    className={className}
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, ease: EASE, delay }}
  >{children}</motion.div>;
}
function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  id,
  as = "h2"
}) {
  const Tag = motion[as];
  const words = text.split(" ");
  return <Tag
    id={id}
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-90px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
    }}
  >{words.map(
    (word, i) => <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom"><motion.span
      className="inline-block"
      variants={{
        hidden: { y: "110%" },
        visible: { y: "0%", transition: { duration: 1, ease: EASE } }
      }}
    >{word}{i < words.length - 1 ? "\xA0" : ""}</motion.span></span>
  )}</Tag>;
}
function DrawLine({ className = "", vertical = false, delay = 0 }) {
  return <motion.div
    aria-hidden="true"
    className={className}
    initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
    whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 1.1, ease: EASE, delay }}
    style={{ transformOrigin: vertical ? "top" : "left" }}
  />;
}
function CurtainImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  delay = 0
}) {
  return <motion.div
    className={`relative overflow-hidden ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-70px" }}
  ><motion.img
    src={src}
    alt={alt}
    loading="lazy"
    className={`h-full w-full object-cover ${imageClassName}`}
    variants={{
      hidden: { scale: 1.16 },
      visible: { scale: 1, transition: { duration: 1.6, ease: EASE, delay } }
    }}
  /><motion.span
    aria-hidden="true"
    className="absolute inset-0 bg-ink"
    variants={{
      hidden: { scaleY: 1 },
      visible: { scaleY: 0, transition: { duration: 1.1, ease: EASE, delay } }
    }}
    style={{ transformOrigin: "top" }}
  /></motion.div>;
}
export {
  CurtainImage,
  DrawLine,
  EASE,
  FadeUp,
  WordReveal
};
