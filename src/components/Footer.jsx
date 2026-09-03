import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { navLinks } from "../data/site";
import { DrawLine, EASE } from "./Reveal";
import { useCursor } from "./CursorProvider";
const socials = ["Instagram", "Facebook", "LinkedIn"];
function Footer() {
  const { hoverProps } = useCursor();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const submit = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("done");
    setEmail("");
  };
  return <footer className="relative w-full overflow-hidden bg-night pt-24 text-ivory"><div className="mx-auto max-w-[1600px] px-6 md:px-10"><div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10"><div className="lg:col-span-4"><p className="font-display text-4xl leading-none">Arti Agencies</p><p className="mt-4 max-w-xs font-sans text-sm font-light leading-relaxed text-ivory/50">
              Premium laminates &amp; surface solutions. Timeless materials, modern spaces.
            </p></div><nav className="lg:col-span-3" aria-label="Footer"><p className="font-sans text-[10px] uppercase tracking-[0.28em] text-ivory/35">
              Navigate
            </p><ul className="mt-6 space-y-3">{navLinks.map(
    (link) => <li key={link}><a
      href="#top"
      {...hoverProps()}
      className="font-sans text-sm font-light text-ivory/70 transition-colors duration-300 ease-editorial hover:text-rust"
    >{link}</a></li>
  )}</ul></nav><div className="lg:col-span-2"><p className="font-sans text-[10px] uppercase tracking-[0.28em] text-ivory/35">
              Contact
            </p><address className="mt-6 space-y-3 font-sans text-sm font-light not-italic text-ivory/70"><p>+91 98200 41123</p><p>studio@artiagencies.com</p><p className="leading-relaxed text-ivory/50">
                14 Laxmi Woollen Mills,
                <br />
                Shakti Mills Lane, Mumbai 400011
              </p></address><ul className="mt-6 flex gap-4">{socials.map(
    (social) => <li key={social}><a
      href="#top"
      {...hoverProps()}
      className="font-sans text-[10px] uppercase tracking-[0.2em] text-ivory/45 transition-colors duration-300 ease-editorial hover:text-rust"
    >{social}</a></li>
  )}</ul></div><div className="lg:col-span-3"><p className="font-display text-3xl">Stay Inspired.</p><p className="mt-3 font-sans text-xs font-light leading-relaxed text-ivory/45">
              New décors, collection launches and specification notes — a few times a year.
            </p><form onSubmit={submit} className="mt-6" noValidate><label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label><div className="flex items-center gap-3 border-b border-ivory/25 pb-3 transition-colors duration-300 ease-editorial focus-within:border-rust"><input
    id="newsletter-email"
    type="email"
    value={email}
    onChange={(event) => {
      setEmail(event.target.value);
      setStatus("idle");
    }}
    placeholder="Enter your email"
    aria-invalid={status === "error"}
    className="w-full bg-transparent font-sans text-sm font-light text-ivory placeholder:text-ivory/35 focus:outline-none"
  /><button
    type="submit"
    {...hoverProps()}
    aria-label="Subscribe"
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory/25 transition-colors duration-300 ease-editorial hover:border-rust hover:bg-rust"
  >{status === "done" ? <CheckIcon className="h-3.5 w-3.5" strokeWidth={1.5} /> : <ArrowRightIcon className="h-3.5 w-3.5" strokeWidth={1.5} />}</button></div><p
    role="status"
    className={`mt-3 font-sans text-[11px] ${status === "error" ? "text-rust" : "text-ivory/45"}`}
  >{status === "error" ? "Please enter a valid email address." : status === "done" ? "Thank you \u2014 you are on the list." : "\xA0"}</p></form></div></div><DrawLine className="mt-20 h-px w-full bg-ivory/15" /><div className="flex flex-col gap-3 py-8 font-sans text-[10px] uppercase tracking-[0.2em] text-ivory/35 md:flex-row md:items-center md:justify-between"><p>© {(/* @__PURE__ */ new Date()).getFullYear()} Arti Agencies. All rights reserved.</p><p>Privacy · Terms · Dealer Enquiries</p></div></div><motion.p
    aria-hidden="true"
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 1.2, ease: EASE }}
    className="select-none px-6 font-display text-[30vw] font-light leading-[0.7] tracking-tight text-ivory/[0.05] md:px-10"
  >
        
        ARTI
      </motion.p></footer>;
}
export {
  Footer
};
