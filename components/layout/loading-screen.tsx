'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050510]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.h1
              className="font-orbitron text-4xl md:text-6xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan mb-8"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              NEXORY
            </motion.h1>
            <div className="absolute -inset-4 bg-neon-purple/5 blur-3xl rounded-full" />
          </div>

          <div className="w-64 md:w-80 h-1 bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <p className="font-orbitron text-xs tracking-[0.2em] text-neon-purple/60">
            INITIALIZING MEMORY SYSTEMS...
          </p>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent animate-scan-line"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
