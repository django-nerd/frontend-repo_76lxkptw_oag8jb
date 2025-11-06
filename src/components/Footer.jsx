import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} BERLIN'S STORE. All rights reserved.</p>
          <div className="text-sm text-gray-400">
            Made with trust • Powered by secure escrow
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
