'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Monitor, MemoryStick, HardDrive, Fan, CircuitBoard, Check, AlertTriangle, DollarSign } from 'lucide-react';
import { Reveal, GlowCard, RGBDivider, MagneticButton } from '@/components/ui-custom/reveal';
import { cpuOptions, gpuOptions, ramOptions, storageOptions, coolingOptions, moboOptions, type PCComponent } from '@/lib/data';

interface ComponentCategory {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  options: PCComponent[];
  key: string;
}

const categories: ComponentCategory[] = [
  { label: 'CPU', icon: Cpu, options: cpuOptions, key: 'cpu' },
  { label: 'GPU', icon: Monitor, options: gpuOptions, key: 'gpu' },
  { label: 'RAM', icon: MemoryStick, options: ramOptions, key: 'ram' },
  { label: 'Storage', icon: HardDrive, options: storageOptions, key: 'storage' },
  { label: 'Cooling', icon: Fan, options: coolingOptions, key: 'cooling' },
  { label: 'Motherboard', icon: CircuitBoard, options: moboOptions, key: 'mobo' },
];

function checkCompatibility(selections: Record<string, PCComponent | null>): { ok: boolean; msg: string } {
  const cpu = selections.cpu;
  const mobo = selections.mobo;
  if (cpu && mobo) {
    const isIntel = cpu.name.toLowerCase().includes('intel');
    const moboIntel = mobo.name.toLowerCase().includes('z790');
    const moboAmd = mobo.name.toLowerCase().includes('x670') || mobo.name.toLowerCase().includes('b650');
    if (isIntel && moboAmd) return { ok: false, msg: 'Intel CPU requires an Intel-compatible motherboard (Z790).' };
    if (!isIntel && moboIntel) return { ok: false, msg: 'AMD CPU requires an AMD-compatible motherboard (X670/B650).' };
  }
  return { ok: true, msg: 'All components are compatible.' };
}

export default function ConfiguratorPage() {
  const [selections, setSelections] = useState<Record<string, PCComponent | null>>({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    cooling: null,
    mobo: null,
  });

  const totalPrice = useMemo(
    () => Object.values(selections).reduce((sum, c) => sum + (c?.price || 0), 0),
    [selections]
  );

  const compatibility = useMemo(() => checkCompatibility(selections), [selections]);

  const select = (key: string, component: PCComponent) => {
    setSelections((prev) => ({
      ...prev,
      [key]: prev[key]?.id === component.id ? null : component,
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal>
          <p className="font-orbitron text-xs tracking-[0.3em] text-neon-purple/60 mb-3">
            CUSTOM BUILD
          </p>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            PC <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">CONFIGURATOR</span>
          </h1>
          <p className="text-white/40 max-w-lg mb-8">
            Build your dream machine component by component. Live price tracking and compatibility checking.
          </p>
        </Reveal>

        <RGBDivider />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Component selection */}
          <div className="lg:col-span-2 space-y-6">
            {categories.map((cat, ci) => (
              <Reveal key={cat.key} delay={ci * 0.1}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <cat.icon className="w-4 h-4 text-neon-purple" />
                    <h3 className="font-orbitron text-sm tracking-[0.15em] text-white/70">
                      {cat.label}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.options.map((opt) => {
                      const selected = selections[cat.key]?.id === opt.id;
                      return (
                        <motion.button
                          key={opt.id}
                          className={`glass rounded-lg p-4 border text-left transition-all duration-300 ${
                            selected
                              ? 'border-neon-purple/50 bg-neon-purple/10 shadow-lg shadow-neon-purple/10'
                              : 'border-white/5 hover:border-white/15'
                          }`}
                          onClick={() => select(cat.key, opt)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className={`text-sm font-medium ${selected ? 'text-white' : 'text-white/60'}`}>
                                {opt.name}
                              </p>
                              <p className="text-xs text-neon-purple/70 font-orbitron mt-1">
                                ${opt.price}
                              </p>
                            </div>
                            {selected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-6 h-6 rounded-full bg-neon-purple/20 border border-neon-purple/50 flex items-center justify-center"
                              >
                                <Check className="w-3 h-3 text-neon-purple" />
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Build summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <GlowCard color="purple" className="!p-6">
                <h3 className="font-orbitron text-sm tracking-[0.15em] text-white mb-6">
                  BUILD SUMMARY
                </h3>

                <div className="space-y-3 mb-6">
                  {categories.map((cat) => {
                    const sel = selections[cat.key];
                    return (
                      <div key={cat.key} className="flex items-center justify-between py-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <cat.icon className="w-3 h-3 text-white/30" />
                          <span className="text-xs text-white/40">{cat.label}</span>
                        </div>
                        {sel ? (
                          <span className="text-xs text-white/70 text-right max-w-[150px] truncate">{sel.name}</span>
                        ) : (
                          <span className="text-xs text-white/20">Not selected</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Compatibility */}
                <div className={`flex items-start gap-2 p-3 rounded-lg mb-4 ${
                  compatibility.ok ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'
                }`}>
                  {compatibility.ok ? (
                    <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <p className={`text-xs ${compatibility.ok ? 'text-green-400/70' : 'text-red-400/70'}`}>
                    {compatibility.msg}
                  </p>
                </div>

                <RGBDivider />

                <div className="flex items-center justify-between mt-6 mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-neon-purple" />
                    <span className="font-orbitron text-xs tracking-wider text-white/50">TOTAL</span>
                  </div>
                  <span className="font-orbitron text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                    ${totalPrice}
                  </span>
                </div>

                <MagneticButton className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-white flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add Build to Cart
                </MagneticButton>
              </GlowCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingCart({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  );
}
