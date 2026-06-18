'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Cpu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ram', label: 'RAM' },
  { href: '/configurator', label: 'Configurator' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-lg shadow-neon-purple/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Cpu className="w-6 h-6 text-neon-purple group-hover:text-neon-cyan transition-colors duration-300" />
          <span className="font-orbitron text-lg md:text-xl font-black tracking-[0.2em] text-white group-hover:text-glow-purple transition-all duration-300">
            7THCONFIG
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-orbitron text-xs tracking-[0.15em] text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:w-3/4 transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors group">
            <ShoppingCart className="w-5 h-5 text-white/70 group-hover:text-neon-purple transition-colors" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-purple rounded-full text-[10px] font-bold flex items-center justify-center">
              0
            </span>
          </button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass-strong border-t border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-orbitron text-sm tracking-[0.1em] text-white/70 hover:text-white px-4 py-3 rounded-lg hover:bg-white/5 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
