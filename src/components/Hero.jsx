import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle dark gradient overlays to improve contrast (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,0,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,0,0,0.15),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-xs font-medium tracking-widest text-red-300">DIGITAL • FUTURISTIC • TRUST</span>
        <h1 className="font-['Mona_Sans',Inter,ui-sans-serif] text-4xl font-extrabold tracking-tight text-white drop-shadow sm:text-6xl">
          BERLIN'S STORE
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
          A trusted midman for secure transactions and premium Roblox item deals. Futuristic service, human integrity.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={() => handleScroll('services')}
            className="group inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-0"
          >
            Explore services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => handleScroll('escrow')}
            className="inline-flex items-center justify-center rounded-md border border-red-500/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-0"
          >
            Start an escrow
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
