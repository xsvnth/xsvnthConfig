'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Gauge, Lightbulb, Timer } from 'lucide-react';
import { Reveal, GlowCard, MagneticButton, RGBDivider } from '@/components/ui-custom/reveal';

const HeroScene = dynamic(() => import('@/components/three/hero-scene').then((m) => m.HeroScene), {
  ssr: false,
});

const stats = [
  { icon: Gauge, label: 'SPEED', value: '8000MHz+', sub: 'DDR5' },
  { icon: Zap, label: 'RGB SYNC', value: '16.8M', sub: 'Colors' },
  { icon: Timer, label: 'LATENCY', value: 'CL28', sub: 'Ultra Low' },
  { icon: Lightbulb, label: 'XMP 3.0', value: 'Auto OC', sub: 'Profiles' },
];

const features = [
  {
    title: 'EXTREME OVERCLOCKING',
    desc: 'Push beyond limits with our hand-binned ICs and custom 10-layer PCBs designed for maximum frequency headroom.',
    color: 'purple' as const,
  },
  {
    title: 'SYNCHRONIZED RGB',
    desc: '16.8 million colors that react to your gameplay. Full sync with ASUS Aura, MSI Mystic Light, and more.',
    color: 'blue' as const,
  },
  {
    title: 'CRYO-THERMAL DESIGN',
    desc: 'Patented direct-contact thermal pads and aluminum heatspreaders keep temperatures 15% cooler under load.',
    color: 'cyan' as const,
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510] z-10 pointer-events-none" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <p className="font-orbitron text-xs tracking-[0.4em] text-neon-purple/80 mb-4">
              NEXT-GEN DDR5 MEMORY
            </p>
          </motion.div>
          <motion.h1
            className="font-orbitron text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
              UNLOCK EXTREME
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan text-glow-purple">
              PERFORMANCE
            </span>
          </motion.h1>
          <motion.p
            className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            Elite DDR5 RAM and custom gaming configurations built for power users.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.1 }}
          >
            <Link
              href="/ram"
              className="group px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg font-orbitron text-sm tracking-wider text-white hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Shop RAM
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/configurator"
              className="px-8 py-3 border border-white/10 rounded-lg font-orbitron text-sm tracking-wider text-white/70 hover:text-white hover:border-neon-purple/50 hover:bg-white/5 transition-all duration-300"
            >
              Build Your PC
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-neon-purple rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <RGBDivider />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <GlowCard key={i} color="purple" className="text-center !p-8">
                  <stat.icon className="w-6 h-6 text-neon-purple mx-auto mb-3" />
                  <p className="font-orbitron text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-1">
                    {stat.value}
                  </p>
                  <p className="font-orbitron text-xs tracking-[0.2em] text-white/40">
                    {stat.label}
                  </p>
                  <p className="text-xs text-white/20 mt-1">{stat.sub}</p>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
        <RGBDivider />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <p className="font-orbitron text-xs tracking-[0.3em] text-neon-purple/60 text-center mb-3">
              ENGINEERED TO DOMINATE
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black text-center mb-12 text-white">
              WHY 7THCONFIG
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <GlowCard color={feat.color} className="!p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-white/5 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-neon-purple" />
                  </div>
                  <h3 className="font-orbitron text-sm tracking-[0.15em] text-white mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">{feat.desc}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Reveal>
            <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-neon-blue/5 pointer-events-none" />
              <p className="font-orbitron text-xs tracking-[0.3em] text-neon-purple/60 mb-3">
                READY TO UPGRADE?
              </p>
              <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white mb-4">
                BUILD YOUR DREAM MACHINE
              </h2>
              <p className="text-white/40 mb-8 max-w-md mx-auto">
                Configure a custom gaming rig with 7thconfig memory at its core.
              </p>
              <MagneticButton
                href="/configurator"
                className="bg-gradient-to-r from-neon-purple to-neon-blue text-white"
              >
                Start Building
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
