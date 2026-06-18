'use client';

import { motion } from 'framer-motion';
import { Cpu, Target, Users, Award, Globe, Zap } from 'lucide-react';
import { Reveal, GlowCard, RGBDivider } from '@/components/ui-custom/reveal';

const timeline = [
  { year: '2018', event: '7thconfig founded with a mission to redefine memory performance.' },
  { year: '2020', event: 'Launched first DDR4 lineup with 3600MHz gaming kits.' },
  { year: '2022', event: 'Pioneered DDR5 with the FuryX series at 7200MHz.' },
  { year: '2024', event: 'Quantum RAM Pro hits 8000MHz — industry first.' },
  { year: '2026', event: 'Next-gen DDR6 research begins. The future is 7thconfig.' },
];

const values = [
  { icon: Target, title: 'PRECISION', desc: 'Every IC is hand-binned and validated for guaranteed overclocking headroom.' },
  { icon: Users, title: 'COMMUNITY', desc: 'Built by overclockers, for overclockers. Our community drives our R&D.' },
  { icon: Award, title: 'QUALITY', desc: '10-layer PCBs, premium thermal solutions, and limited lifetime warranties.' },
  { icon: Globe, title: 'GLOBAL', desc: 'Available in 40+ countries with local warranty support and fast shipping.' },
  { icon: Zap, title: 'INNOVATION', desc: 'First to 8000MHz DDR5. First with cryo-thermal memory cooling. Always first.' },
  { icon: Cpu, title: 'PERFORMANCE', desc: 'World record-holding memory kits trusted by esports champions and creators.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero */}
        <Reveal>
          <p className="font-orbitron text-xs tracking-[0.3em] text-neon-purple/60 mb-3">
            OUR STORY
          </p>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">7THCONFIG</span>
          </h1>
          <p className="text-white/40 max-w-2xl leading-relaxed mb-12">
            Born from the obsession of overclockers and the demand of power users, 7thconfig exists to push
            the boundaries of what memory can do. We don&apos;t follow standards — we set them.
          </p>
        </Reveal>

        <RGBDivider />

        {/* Mission */}
        <section className="py-16">
          <Reveal>
            <div className="glass rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-blue/5 pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
                  OUR MISSION
                </h2>
                <p className="text-white/50 leading-relaxed text-lg">
                  To engineer the world&apos;s fastest, most reliable memory — and make it look
                  incredible while doing it. We believe performance and aesthetics aren&apos;t
                  mutually exclusive. They&apos;re inseparable.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Values */}
        <section className="py-16">
          <Reveal>
            <p className="font-orbitron text-xs tracking-[0.3em] text-neon-purple/60 text-center mb-3">
              WHAT DRIVES US
            </p>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-center text-white mb-10">
              OUR VALUES
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((val, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <GlowCard color="purple" className="!p-6 h-full">
                  <val.icon className="w-6 h-6 text-neon-purple mb-3" />
                  <h3 className="font-orbitron text-sm tracking-wider text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{val.desc}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <Reveal>
            <p className="font-orbitron text-xs tracking-[0.3em] text-neon-purple/60 text-center mb-3">
              OUR JOURNEY
            </p>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-center text-white mb-10">
              TIMELINE
            </h2>
          </Reveal>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-neon-purple border-2 border-neon-purple/50" />
                    {i < timeline.length - 1 && <div className="w-px h-full bg-gradient-to-b from-neon-purple/30 to-transparent" />}
                  </div>
                  <div className="pb-4">
                    <span className="font-orbitron text-sm text-neon-purple">{item.year}</span>
                    <p className="text-white/40 mt-1">{item.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <RGBDivider />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '40+', label: 'Countries' },
              { value: '2M+', label: 'Units Sold' },
              { value: '12', label: 'World Records' },
              { value: '99.8%', label: 'Uptime Rating' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <GlowCard color="purple" className="text-center !p-6">
                  <p className="font-orbitron text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-1">
                    {stat.value}
                  </p>
                  <p className="font-orbitron text-[10px] tracking-[0.2em] text-white/40">{stat.label}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
