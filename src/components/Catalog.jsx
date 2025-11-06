import React, { useState } from 'react';
import { ShoppingCart, ChevronDown } from 'lucide-react';

const items = [
  { name: 'Dominus Rex', price: 'R$ 250,000', tag: 'Limited' },
  { name: 'Valkyrie Helm', price: 'R$ 95,000', tag: 'Iconic' },
  { name: 'Clockwork Shades', price: 'R$ 180,000', tag: 'Limited U' },
  { name: 'Headless Horseman', price: 'R$ 31,000', tag: 'Bundle' },
  { name: 'Super Super Happy Face', price: 'R$ 140,000', tag: 'Face' },
  { name: 'Purple Sparkle Time Fedoras', price: 'R$ 320,000', tag: 'Limited' },
  { name: 'Koroblox Deathspeaker', price: 'R$ 17,000', tag: 'Package' },
  { name: 'Beast Mode', price: 'R$ 120,000', tag: 'Face' },
];

const Catalog = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Roblox Items Catalog</h2>
          <p className="mt-2 max-w-2xl text-gray-300">Browse a curated selection of popular and rare items we can escrow for you safely.</p>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {open ? 'Hide catalog' : 'Show Roblox items catalog'}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {open && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.name} className="group overflow-hidden rounded-xl border border-red-500/20 bg-white/5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
                <div className="relative h-36 w-full bg-gradient-to-br from-red-700/40 via-red-600/20 to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.35),transparent_50%)]" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-red-300">{item.tag}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">Estimated price</p>
                  <p className="text-sm font-semibold text-white">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
