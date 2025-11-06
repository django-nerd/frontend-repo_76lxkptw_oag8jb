import React from 'react';
import { Instagram, Facebook, Send } from 'lucide-react';

const EscrowCTA = () => {
  return (
    <section id="escrow" className="relative w-full bg-gradient-to-b from-black to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start an escrow</h2>
          <p className="mt-3 text-gray-300">Kick off a secure transaction through your favorite social platform.</p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="https://www.instagram.com/berlins_idn/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border border-red-500/30 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-500 text-white">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Instagram</p>
                <p className="text-sm font-semibold">@berlins_idn</p>
              </div>
            </div>
            <Send className="h-4 w-4 text-red-300 opacity-0 transition group-hover:opacity-100" />
          </a>

          <a
            href="https://www.facebook.com/groups/853473660350076/?ref=share&mibextid=NSMWBT"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border border-red-500/30 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-500 text-white">
                <Facebook className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Facebook Group</p>
                <p className="text-sm font-semibold">Berlin's Store Community</p>
              </div>
            </div>
            <Send className="h-4 w-4 text-red-300 opacity-0 transition group-hover:opacity-100" />
          </a>

          <a
            href="https://discord.com/channels/970944887035924480/1431855293024964659/1431935183971422271"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border border-red-500/30 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-500 text-white">
                {/* Using Send icon to represent DM/Message for Discord to avoid unknown names */}
                <Send className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Discord</p>
                <p className="text-sm font-semibold">Open channel link</p>
              </div>
            </div>
            <Send className="h-4 w-4 text-red-300 opacity-0 transition group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EscrowCTA;
