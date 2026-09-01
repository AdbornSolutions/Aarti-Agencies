import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, MenuIcon, XIcon } from 'lucide-react';
import { navLinks } from '../data/site';
import { useCursor } from './CursorProvider';
import { EASE } from './Reveal';

type Props = {
  ready: boolean;
};

export function Header({ ready }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { hoverProps } = useCursor();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ease-editorial ${
      scrolled || menuOpen ?
      'border-b border-ivory/10 bg-ink/85 backdrop-blur-xl' :
      'border-b border-transparent bg-transparent'}`
      }>
      
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          {...hoverProps()}
          className="group flex items-center text-ivory"
          aria-label="Arti Agencies home">

          <img
            src="/logo.png"
            alt="Arti Agencies by Thakrani Traders"
            className="h-16 w-16 object-contain transition-transform duration-300 ease-editorial group-hover:scale-105 md:h-20 md:w-20"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
          <a
            key={link}
            href="#top"
            {...hoverProps()}
            className="group relative font-sans text-[11px] uppercase tracking-[0.18em] text-ivory/70 transition-colors duration-300 ease-editorial hover:text-ivory">
            
              {link}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-rust transition-transform duration-500 ease-editorial group-hover:origin-left group-hover:scale-x-100" />
            </a>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            {...hoverProps()}
            aria-label="Search surfaces"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors duration-300 ease-editorial hover:border-rust hover:text-rust">
            
            <SearchIcon className="h-4 w-4" strokeWidth={1.4} />
          </button>
          <a
            href="#collections"
            {...hoverProps()}
            className="hidden rounded-full border border-ivory/25 px-6 py-3 font-sans text-[10px] uppercase tracking-[0.22em] text-ivory transition-colors duration-300 ease-editorial hover:border-rust hover:bg-rust md:inline-flex">
            
            Explore Collections
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            {...hoverProps()}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors duration-300 ease-editorial hover:border-rust hover:text-rust lg:hidden">
            
            {menuOpen ?
            <XIcon className="h-4 w-4" strokeWidth={1.4} /> :

            <MenuIcon className="h-4 w-4" strokeWidth={1.4} />
            }
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.28, ease: EASE }}
        className="overflow-hidden lg:hidden">
        
        <nav className="flex flex-col gap-1 px-6 pb-8 pt-2" aria-label="Mobile">
          {navLinks.map((link) =>
          <a
            key={link}
            href="#top"
            onClick={() => setMenuOpen(false)}
            className="border-b border-ivory/10 py-3 font-display text-2xl text-ivory/85">
            
              {link}
            </a>
          )}
        </nav>
      </motion.div>
    </motion.header>);

}
