import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Server, Terminal, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#03050A] border-t border-white/5 relative overflow-hidden select-none">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Tag & Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-widest mb-4">
            <Cpu className="w-4 h-4" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase mb-16">
            <span className="text-white">TECH I </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              USE
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          
          {/* 1. Frontend Category (Primary Specialization) */}
          <motion.div 
            variants={cardVariants}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500 via-blue-500/40 to-blue-900/20 shadow-[0_0_35px_rgba(37,99,235,0.2)] hover:shadow-[0_0_50px_rgba(37,99,235,0.35)] transition-all duration-500 flex flex-col justify-between"
          >
            <div className="w-full h-full bg-[#080C14] rounded-2xl p-7 relative overflow-hidden backdrop-blur-xl flex flex-col justify-between">
              
              {/* Top Accent Tag */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display tracking-wider text-white">FRONTEND</h3>
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Core Expertise</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-blue-600 text-white font-bold px-3 py-1 rounded-full tracking-wider border border-blue-400/50 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  PRIMARY
                </span>
              </div>

              {/* Skill Badges */}
              <motion.div className="flex flex-wrap gap-2.5">
                {skillsData.frontend.map((skill) => {
                  const isCore = skill.toLowerCase().includes('react') || skill.toLowerCase().includes('javascript');
                  return (
                    <motion.span
                      key={skill}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`text-xs font-mono px-3.5 py-2 rounded-lg border transition-all duration-300 ${
                        isCore
                          ? 'bg-blue-600/20 text-blue-200 border-blue-500/60 shadow-[0_0_15px_rgba(37,99,235,0.25)] font-semibold'
                          : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06]'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </motion.div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  UI/UX Architecture
                </span>
                <span>01</span>
              </div>

            </div>
          </motion.div>

          {/* 2. Backend Category */}
          <motion.div 
            variants={cardVariants}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="w-full h-full bg-[#080C14] rounded-2xl p-7 relative overflow-hidden backdrop-blur-xl flex flex-col justify-between">
              
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display tracking-wider text-white">BACKEND</h3>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Server & Databases</p>
                </div>
              </div>

              {/* Skill Badges */}
              <motion.div className="flex flex-wrap gap-2.5">
                {skillsData.backend.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs font-mono px-3.5 py-2 rounded-lg bg-white/[0.03] text-slate-300 border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  API Integration
                </span>
                <span>02</span>
              </div>

            </div>
          </motion.div>

          {/* 3. Tools & Platforms Category */}
          <motion.div 
            variants={cardVariants}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="w-full h-full bg-[#080C14] rounded-2xl p-7 relative overflow-hidden backdrop-blur-xl flex flex-col justify-between">
              
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-lg bg-slate-500/10 border border-slate-500/20 text-slate-300">
                  <Terminal className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display tracking-wider text-white">TOOLS & PLATFORMS</h3>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Workflow & Deployment</p>
                </div>
              </div>

              {/* Skill Badges */}
              <motion.div className="flex flex-wrap gap-2.5">
                {skillsData.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs font-mono px-3.5 py-2 rounded-lg bg-white/[0.03] text-slate-300 border border-white/10 hover:border-slate-400/40 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  DevOps & Ecosystem
                </span>
                <span>03</span>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}