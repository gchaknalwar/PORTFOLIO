import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-bgDark border-t border-white/5 text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-white font-bold">GOVIND CHAKNALWAR</span> — FRONTEND ENGINEER
        </div>
        <div>
          © {new Date().getFullYear()} Govind Chaknalwar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}