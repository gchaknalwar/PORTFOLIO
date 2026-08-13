import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Compass, Cpu, Code2, ShieldCheck, Rocket, Terminal } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

// Map icons dynamically to process steps
const stepIcons = [Compass, Cpu, Code2, ShieldCheck, Rocket];

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Process() {
  return (
    <section 
      id="process" 
      className="py-28 bg-[#03050A] border-t border-white/5 relative overflow-hidden select-none"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Tag & Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-widest mb-4">
            <Layers className="w-4 h-4" />
            <span>ENGINEERING PIPELINE</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase mb-16">
            <span className="text-white block">DEVELOPMENT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 drop-shadow-[0_0_35px_rgba(37,99,235,0.4)] block">
              WORKFLOW
            </span>
          </h2>
        </motion.div>

        {/* Process Pipeline Container */}
        <div className="relative">
          
          {/* Animated Desktop Connector Line */}
          <div className="hidden lg:block absolute top-[88px] left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-indigo-500/10 pointer-events-none z-0 shadow-[0_0_12px_rgba(37,99,235,0.5)]" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10"
          >
            {processSteps.map((item, index) => {
              const IconComponent = stepIcons[index % stepIcons.length] || Terminal;

              return (
                <motion.div
                  key={item.step || index}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-blue-500 hover:via-blue-500/30 hover:to-indigo-500/20 shadow-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="w-full h-full bg-[#080C14] rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl flex flex-col justify-between">
                    
                    {/* Top Node Header with Icon & Step Indicator */}
                    <div>
                      <div className="flex items-center justify-between mb-8 relative z-10">
                        {/* Icon Node Box */}
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-600/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {/* Step Index Number */}
                        <span className="text-3xl font-display font-black font-mono text-slate-600 group-hover:text-blue-400 transition-colors">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg font-bold font-display tracking-wide text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Status Terminal Badge */}
                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 group-hover:animate-ping transition-colors" />
                        STAGE_0{index + 1}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}