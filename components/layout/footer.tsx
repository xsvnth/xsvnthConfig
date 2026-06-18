'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Twitter, Instagram, Youtube, Github, ArrowRight } from 'lucide-react';

const footerLinks = {
  Products: [
    { label: 'DDR5 RAM', href: '/ram' },
    { label: 'DDR4 RAM', href: '/ram' },
    { label: 'PC Configurator', href: '/configurator' },
    { label: 'Workstation Builds', href: '/configurator' },
  ],
  Company: [
    { label: 'About 7thconfig', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
  ],
  Support: [
    { label: 'Documentation', href: '#' },
    { label: 'Compatibility List', href: '#' },
    { label: 'Warranty', href: '#' },
    { label: 'Returns', href: '#' },
  ],
};

const socials = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Github, href: '#' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#030308] border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-neon-purple" />
              <span className="font-orbitron text-xl font-black tracking-[0.2em] text-white">
                7THCONFIG
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Elite DDR5 memory and custom gaming configurations engineered by
              7thconfig for power users who demand the absolute best.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-neon-purple/20 border border-white/5 hover:border-neon-purple/30 flex items-center justify-center transition-all duration-300 group"
                >
                  <s.icon className="w-4 h-4 text-white/40 group-hover:text-neon-purple transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-orbitron text-xs tracking-[0.2em] text-white/60 mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/30 hover:text-white/70 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-orbitron text-xs tracking-[0.15em] text-white/50 mb-2">
                STAY IN THE LOOP
              </h3>
              <p className="text-xs text-white/30">
                Get early access to new releases and exclusive deals.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-purple/50 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg text-white text-sm font-orbitron tracking-wider hover:shadow-lg hover:shadow-neon-purple/20 transition-all duration-300 flex items-center gap-1">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <p>&copy; 2026 7thconfig. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/40 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
