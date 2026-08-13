import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

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

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#03050A] border-t border-white/5 relative overflow-hidden select-none">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Tag & Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-widest mb-4">
            <Briefcase className="w-4 h-4" />
            <span>CAREER PATH</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase mb-16">
            <span className="text-white">WORK </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              EXPERIENCE
            </span>
          </h2>
        </motion.div>

        {/* Experience Cards Stack */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 relative border-l border-white/10 ml-3 md:ml-4 pl-6 md:pl-10"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-blue-500/50 hover:via-blue-500/20 hover:to-indigo-500/10 shadow-lg hover:shadow-[0_0_35px_rgba(37,99,235,0.2)] transition-all duration-500"
            >
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-8 w-3.5 h-3.5 rounded-full bg-[#080C14] border-2 border-blue-500 group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />

              <div className="w-full h-full bg-[#080C14] rounded-2xl p-6 md:p-8 relative overflow-hidden backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                
                {/* Main Content Info */}
                <div className="space-y-3 max-w-3xl">
                  
                  {/* Period Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl md:text-2xl font-bold font-display tracking-wide text-white group-hover:text-blue-200 transition-colors">
                    {exp.role}
                  </h3>

                  {/* Company Name */}
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-300 font-sans">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                    <span>{exp.company}</span>
                  </div>

                  {/* Role Details */}
                  {exp.details && (
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans pt-2">
                      {exp.details}
                    </p>
                  )}
                </div>

                {/* Arrow Micro-Interaction */}
                <div className="hidden md:flex items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300">
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}