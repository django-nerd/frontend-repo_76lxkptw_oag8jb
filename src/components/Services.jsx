import React from 'react';
import { ShieldCheck, ShoppingBag, Cpu, Sparkles } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Secure Midman',
    desc: 'Dispute-free escrow that protects both sides. Transparent, time-stamped steps until delivery.',
  },
  {
    icon: ShoppingBag,
    title: 'Roblox Items',
    desc: 'Curated limiteds and in-game assets with verified provenance and fair pricing.',
  },
  {
    icon: Cpu,
    title: 'Automation',
    desc: 'Smart checks and logs to ensure legitimacy across every transaction touchpoint.',
  },
  {
    icon: Sparkles,
    title: 'Concierge',
    desc: 'Personalized sourcing for rare finds. We negotiate, you enjoy the win.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What we do</h2>
          <p className="mt-3 text-gray-300">Red-futuristic operations built on trust and speed.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-red-500/20 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/20 text-red-400 ring-1 ring-red-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
