'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight, Gauge, MemoryStick, Clock, Lightbulb } from 'lucide-react';
import { Reveal, GlowCard, RGBDivider } from '@/components/ui-custom/reveal';
import { ramProducts, type RAMProduct } from '@/lib/data';

const categories = ['All', 'DDR5', 'DDR4', 'Gaming', 'Workstation', 'RGB'];

const colorMap = {
  purple: {
    glow: 'hover:shadow-neon-purple/20 hover:border-neon-purple/30',
    gradient: 'from-neon-purple to-neon-blue',
    bg: 'bg-neon-purple/10',
    text: 'text-neon-purple',
  },
  blue: {
    glow: 'hover:shadow-neon-blue/20 hover:border-neon-blue/30',
    gradient: 'from-neon-blue to-neon-cyan',
    bg: 'bg-neon-blue/10',
    text: 'text-neon-blue',
  },
  cyan: {
    glow: 'hover:shadow-neon-cyan/20 hover:border-neon-cyan/30',
    gradient: 'from-neon-cyan to-neon-purple',
    bg: 'bg-neon-cyan/10',
    text: 'text-neon-cyan',
  },
  pink: {
    glow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:border-pink-500/30',
    gradient: 'from-pink-500 to-neon-purple',
    bg: 'bg-pink-500/10',
    text: 'text-pink-500',
  },
};

function ProductCard({ product }: { product: RAMProduct }) {
  const cm = colorMap[product.color];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/product/${product.id}`}>
        <div
          className={`glass rounded-xl overflow-hidden border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${cm.glow} hover:shadow-lg group cursor-pointer`}
        >
          {/* Product image area with glow */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-b from-black/50 to-black/80 flex items-center justify-center">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cm.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
            />
            <div className="relative flex items-center justify-center">
              <MemoryStick className={`w-16 h-16 ${cm.text} opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`} />
              <div className={`absolute inset-0 blur-2xl ${cm.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
            {product.rgb && (
              <span className="absolute top-3 right-3 font-orbitron text-[10px] tracking-wider px-2 py-1 rounded bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-white/10 text-white/60">
                RGB
              </span>
            )}
            <span className={`absolute top-3 left-3 font-orbitron text-[10px] tracking-wider px-2 py-1 rounded ${cm.bg} border border-white/10 ${cm.text}`}>
              {product.type}
            </span>
          </div>

          {/* Product info */}
          <div className="p-5">
            <h3 className="font-orbitron text-sm tracking-wider text-white mb-1">
              {product.name}
            </h3>
            <p className="text-xs text-white/30 mb-4">{product.capacity} | {product.speed}</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3 h-3 text-white/30" />
                <span className="text-xs text-white/50">{product.speed}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-white/30" />
                <span className="text-xs text-white/50">{product.latency}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MemoryStick className="w-3 h-3 text-white/30" />
                <span className="text-xs text-white/50">{product.capacity}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lightbulb className="w-3 h-3 text-white/30" />
                <span className="text-xs text-white/50">{product.rgb ? 'RGB Sync' : 'No RGB'}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className={`font-orbitron text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${cm.gradient}`}>
                ${product.price}
              </span>
              <span className="text-neon-purple/60 group-hover:text-neon-purple transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function RAMPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? ramProducts
    : ramProducts.filter((p) => p.category.includes(activeFilter));

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <Reveal>
          <p className="font-orbitron text-xs tracking-[0.3em] text-neon-purple/60 mb-3">
            PREMIUM MEMORY
          </p>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            RAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">COLLECTION</span>
          </h1>
          <p className="text-white/40 max-w-lg">
            Explore our elite lineup of DDR4 and DDR5 memory kits, engineered for gamers and professionals.
          </p>
        </Reveal>
      </section>

      <RGBDivider />

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-white/30 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-orbitron text-xs tracking-wider px-4 py-2 rounded-lg border transition-all duration-300 shrink-0 ${
                  activeFilter === cat
                    ? 'bg-neon-purple/20 border-neon-purple/50 text-white'
                    : 'bg-white/5 border-white/10 text-white/40 hover:text-white/70 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-orbitron text-sm text-white/30">No products found for this filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}
