import React from 'react';
import { Award, ArrowUpRight } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section className="py-24 bg-bgDark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 text-xs font-mono text-blue-400 tracking-widest mb-4">
          <Award className="w-4 h-4" />
          <span>ACCREDITATIONS</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase mb-16">
          <span className="text-white">MY </span>
          <span className="text-accentBlue">CERTIFICATES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificatesData.map((cert, i) => (
            <div key={i} className="bg-cardDark border border-white/10 p-6 rounded-lg hover:border-blue-500/50 hover:shadow-blue-glow transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-500">{cert.date}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-1">{cert.title}</h3>
                <p className="text-xs text-slate-400 mb-6">{cert.org}</p>
              </div>
              <button className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-white transition-colors pt-4 border-t border-white/5">
                <span>VIEW CERTIFICATE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}