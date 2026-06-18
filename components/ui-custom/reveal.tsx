'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export function Reveal({ children, direction = 'up', delay = 0, className }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export function GlowCard({
  children,
  color = 'purple',
  className,
}: {
  children: ReactNode;
  color?: 'purple' | 'blue' | 'cyan' | 'pink';
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const glowColors = {
    purple: 'hover:shadow-neon-purple/20 hover:border-neon-purple/30',
    blue: 'hover:shadow-neon-blue/20 hover:border-neon-blue/30',
    cyan: 'hover:shadow-neon-cyan/20 hover:border-neon-cyan/30',
    pink: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:border-pink-500/30',
  };

  const glowGradients = {
    purple: 'from-neon-purple/5 to-transparent',
    blue: 'from-neon-blue/5 to-transparent',
    cyan: 'from-neon-cyan/5 to-transparent',
    pink: 'from-pink-500/5 to-transparent',
  };

  return (
    <motion.div
      ref={ref}
      className={`glass rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-lg ${glowColors[color]} ${className || ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${glowGradients[color]} opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      {children}
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) {
  const Component = href ? motion.a : motion.button;
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`relative overflow-hidden group px-6 py-3 rounded-lg font-orbitron text-sm tracking-wider transition-all duration-300 ${className || ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Component>
  );
}

export function RGBDivider() {
  return (
    <div className="h-px w-full relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue via-neon-cyan to-neon-purple"
        animate={{ x: ['-100%', '0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ width: '200%' }}
      />
    </div>
  );
}
