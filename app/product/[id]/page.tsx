'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Star, Check } from 'lucide-react';
import { Reveal, GlowCard, RGBDivider, MagneticButton } from '@/components/ui-custom/reveal';
import { ramProducts } from '@/lib/data';

const ProductScene = dynamic(() => import('@/components/three/product-scene').then((m) => m.ProductScene), {
  ssr: false,
});

const colorMap = {
  purple: '#a855f7',
  blue: '#3b82f6',
  cyan: '#06b6d4',
  pink: '#ec4899',
};

export default function ProductPage() {
  const params = useParams();
  const product = ramProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="font-orbitron text-lg text-white/40 mb-4">Product not found</p>
          <Link href="/ram" className="text-neon-purple hover:underline">Back to RAM</Link>
        </div>
      </div>
    );
  }

  const threeColor = colorMap[product.color];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal>
          <Link href="/ram" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to RAM
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* 3D Viewer */}
          <Reveal direction="left">
            <div className="glass rounded-xl overflow-hidden border border-white/5 aspect-square lg:aspect-auto lg:min-h-[500px]">
              <ProductScene color={threeColor} interactive />
            </div>
          </Reveal>

          {/* Product Info */}
          <Reveal direction="right">
            <div className="space-y-6">
              <div>
                <span className="font-orbitron text-xs tracking-[0.2em] text-neon-purple/60 mb-2 block">
                  {product.type} | {product.category.join(' / ')}
                </span>
                <h1 className="font-orbitron text-3xl md:text-4xl font-black text-white mb-2">
                  {product.name}
                </h1>
                <p className="text-white/40 leading-relaxed">{product.description}</p>
              </div>

              <RGBDivider />

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="glass rounded-lg p-3 border border-white/5">
                    <p className="text-[10px] font-orbitron tracking-wider text-white/30 mb-1">
                      {spec.label}
                    </p>
                    <p className="text-sm text-white/70 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Benchmarks */}
              <div>
                <h3 className="font-orbitron text-xs tracking-[0.15em] text-white/50 mb-3">
                  PERFORMANCE BENCHMARKS
                </h3>
                <div className="space-y-3">
                  {product.benchmarks.map((bm) => (
                    <div key={bm.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-white/40">{bm.label}</span>
                        <span className="text-xs text-neon-purple">{bm.value}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${bm.value}%` }}
                          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-orbitron text-xs tracking-[0.15em] text-white/50 mb-3">
                  KEY FEATURES
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-white/40">
                      <Check className="w-4 h-4 text-neon-purple shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center gap-4 pt-4">
                <span className="font-orbitron text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                  ${product.price}
                </span>
                <MagneticButton className="flex-1 bg-gradient-to-r from-neon-purple to-neon-blue text-white flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Reviews */}
        <Reveal>
          <RGBDivider />
          <div className="py-12">
            <h2 className="font-orbitron text-xl font-bold text-white mb-8">
              REVIEWS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'TechPowerUp', rating: 5, text: 'Exceptional performance. The 7200MHz overclock is stable and the RGB is stunning.' },
                { name: 'Tom\'s Hardware', rating: 4.5, text: 'Best DDR5 kit we\'ve tested this year. 7thconfig sets a new bar for enthusiast memory.' },
                { name: 'Gamers Nexus', rating: 5, text: 'Thermal performance is outstanding. The cryo-cool design actually makes a difference.' },
              ].map((review, i) => (
                <GlowCard key={i} color="purple" className="!p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-3 h-3 ${si < Math.floor(review.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/10'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-white/40 mb-3 leading-relaxed">{review.text}</p>
                  <p className="font-orbitron text-xs tracking-wider text-white/60">{review.name}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
