import React from "react";
import { motion } from "framer-motion";
import { User, Download, CheckCircle2, Terminal } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const listHighlights = [
  "React-focused frontend development",
  "Responsive web design",
  "Modern UI development",
  "API integration",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#03050A] relative overflow-hidden border-t border-white/5 select-none"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header Tag & Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-widest mb-4">
            <User className="w-4 h-4" />
            <span>BIOGRAPHY</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase mb-16">
            <span className="text-white">ABOUT </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              ME
            </span>
          </h2>
        </motion.div>

        {/* Main Grid Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Visual Area — Professional Floating Profile Card */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="group relative w-full max-w-sm h-96 rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent shadow-[0_0_50px_rgba(37,99,235,0.15)] hover:shadow-[0_0_60px_rgba(37,99,235,0.3)] transition-all duration-500"
            >
              <div className="w-full h-full bg-[#080C14] rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
                {/* Decorative Subtle Grid Lines inside Card */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/35 transition-colors duration-500" />

                {/* Top Badge (Clean Minimal Design - No Stars) */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-blue-400 tracking-widest font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    FRONTEND ENGINEER
                  </span>
                  <Terminal className="w-4 h-4 text-blue-400 opacity-80" />
                </div>

                {/* Middle Name Block */}
                <div className="relative z-10 my-auto pt-4">
                  <p className="text-4xl font-display font-extrabold text-white tracking-wider mb-0.5">
                    GOVIND
                  </p>
                  <p className="text-4xl font-display font-extrabold text-blue-500 tracking-wider">
                    CHAKNALWAR
                  </p>
                  <p className="text-xs font-mono text-slate-400 mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Hyderabad, India
                  </p>
                </div>

                {/* Bottom Footer Info */}
                <div className="relative z-10 text-[11px] font-mono text-slate-400 border-t border-white/10 pt-4 flex justify-between items-center">
                  <span>REACT.JS / FRONTEND ARCHITECTURE</span>
                  <span className="text-blue-400 font-bold">2026</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Text Content & Animated Metrics */}
          <div className="lg:col-span-7">
            <motion.h3
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug"
            >
              Frontend Engineer passionate about building digital experiences
              that are <span className="text-blue-400">clean, useful</span> and{" "}
              <span className="text-indigo-400">memorable</span>.
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed font-sans"
            >
              {personalInfo.shortAbout}
            </motion.p>

            {/* Key Focus Highlights with Clean Vector Checkmarks */}
            <motion.ul
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono text-slate-300 mb-10"
            >
              {listHighlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center gap-2.5 bg-white/[0.02] border border-white/5 hover:border-blue-500/30 px-3.5 py-2.5 rounded-lg transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Animated Quantitative Stats Block */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 border-t border-b border-white/10 py-8 mb-8"
            >
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group cursor-default"
                >
                  <p className="text-3xl md:text-5xl font-display font-black text-blue-500 group-hover:text-blue-400 transition-colors drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs font-mono text-slate-400 tracking-wider mt-1.5 uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Resume Button */}
            <motion.div variants={fadeInUp}>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={personalInfo.resumeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                download="Govind_Chaknalwar_Resume.pdf" /* 👈 Download hote waqt exact clean name se save hoga */
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white text-xs font-mono tracking-widest font-bold rounded transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
