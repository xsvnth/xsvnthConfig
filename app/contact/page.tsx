'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from 'lucide-react';
import { Reveal, GlowCard, RGBDivider, MagneticButton } from '@/components/ui-custom/reveal';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'support@7thconfig.com' },
  { icon: Phone, label: 'Phone', value: '+1 (888) 7TH-CFG1' },
  { icon: MapPin, label: 'HQ', value: 'San Jose, California' },
  { icon: Clock, label: 'Support Hours', value: '24/7 Priority' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal>
          <p className="font-orbitron text-xs tracking-[0.3em] text-neon-purple/60 mb-3">
            GET IN TOUCH
          </p>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">US</span>
          </h1>
          <p className="text-white/40 max-w-lg mb-12">
            Questions about compatibility? Need help with your build? Our team is here 24/7.
          </p>
        </Reveal>

        <RGBDivider />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <GlowCard color="purple" className="!p-8">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-neon-purple" />
                  <h2 className="font-orbitron text-sm tracking-[0.15em] text-white">
                    SEND A MESSAGE
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-orbitron text-[10px] tracking-wider text-white/40 block mb-2">
                        NAME
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-neon-purple/50 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-orbitron text-[10px] tracking-wider text-white/40 block mb-2">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-neon-purple/50 transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-orbitron text-[10px] tracking-wider text-white/40 block mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-neon-purple/50 transition-colors"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-orbitron text-[10px] tracking-wider text-white/40 block mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-neon-purple/50 transition-colors resize-none"
                      placeholder="Tell us what you need..."
                      required
                    />
                  </div>

                  <MagneticButton
                    className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-white flex items-center justify-center gap-2"
                    onClick={() => {}}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </MagneticButton>
                </form>
              </GlowCard>
            </Reveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <Reveal key={i} delay={i * 0.1} direction="right">
                <GlowCard color="purple" className="!p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center shrink-0">
                      <info.icon className="w-4 h-4 text-neon-purple" />
                    </div>
                    <div>
                      <p className="font-orbitron text-[10px] tracking-wider text-white/40 mb-1">
                        {info.label}
                      </p>
                      <p className="text-sm text-white/70">{info.value}</p>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}

            <Reveal delay={0.4} direction="right">
              <GlowCard color="purple" className="!p-6">
                <h3 className="font-orbitron text-xs tracking-wider text-white mb-3">
                  FAQ
                </h3>
                <div className="space-y-3">
                  {[
                    'Is 7thconfig RAM compatible with my motherboard?',
                    'What warranty do you offer?',
                    'Can I mix DDR4 and DDR5 kits?',
                    'How do I enable XMP profiles?',
                  ].map((q, i) => (
                    <div key={i} className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">
                      {q}
                    </div>
                  ))}
                </div>
              </GlowCard>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
