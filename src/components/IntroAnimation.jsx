import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  "INITIALIZING CORE SYSTEM...",
  "LOADING REACT & TAILWIND V3 KERNEL...",
  "CONNECTING HARDWARE ACCELERATION...",
  "COMPILING PORTFOLIO MODULES...",
  "SYSTEM OPTIMIZED. LAUNCHING..."
];

export default function IntroAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState(bootLogs[0]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Dynamic smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 900); // Sync with Curtain Exit Animation
          }, 400);
          return 100;
        }

        const nextVal = prev + Math.floor(Math.random() * 9) + 2;
        
        // Log switcher based on progress percentage
        if (nextVal < 25) setCurrentLog(bootLogs[0]);
        else if (nextVal < 50) setCurrentLog(bootLogs[1]);
        else if (nextVal < 75) setCurrentLog(bootLogs[2]);
        else if (nextVal < 95) setCurrentLog(bootLogs[3]);
        else setCurrentLog(bootLogs[4]);

        return nextVal;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <div className="fixed inset-0 z-[999] pointer-events-none select-none overflow-hidden font-mono text-white">
          
          {/* Top Half Curtain Exit */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 left-0 w-full h-[50.5%] bg-[#03050A] border-b border-blue-500/20 flex flex-col justify-between p-6 md:p-12 z-10"
          >
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Top HUD Header */}
            <div className="flex justify-between items-center text-[10px] md:text-xs text-slate-400 tracking-widest relative z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-white font-bold">GOVIND CHAKNALWAR</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">STATUS: 200 OK</span>
                <span className="hidden sm:inline text-slate-600">|</span>
                <span className="hidden sm:inline">HYDERABAD, IN</span>
              </div>
            </div>

            {/* Main Center Title (Top Half Part) */}
            <div className="text-center my-auto relative z-20 translate-y-12 md:translate-y-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[10px] md:text-xs text-blue-400 tracking-[0.3em] uppercase block mb-2">
                  // FULL STACK ARCHITECT
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black uppercase tracking-tight text-white drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]">
                  FRONTEND <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">ENGINEER</span>
                </h1>
              </motion.div>
            </div>

            {/* Corner Decorative Frames */}
            <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-500/60" />
            <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-500/60" />
          </motion.div>


          {/* Bottom Half Curtain Exit */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="absolute bottom-0 left-0 w-full h-[50.5%] bg-[#03050A] border-t border-blue-500/20 flex flex-col justify-between p-6 md:p-12 z-10"
          >
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* Subtitle Text (Bottom Half Part) */}
            <div className="text-center -translate-y-8 md:-translate-y-12 relative z-20">
              <p className="text-xs md:text-sm text-slate-400 tracking-[0.2em] uppercase max-w-md mx-auto">
                Engineering Next-Gen Web Solutions & High-Performance Interfaces
              </p>
            </div>

            {/* Bottom HUD Progress Bar & Terminal Logs */}
            <div className="w-full max-w-5xl mx-auto relative z-20">
              <div className="flex justify-between items-end mb-3 text-xs">
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 animate-pulse" />
                  <span className="font-mono text-[11px] md:text-xs tracking-wider">{currentLog}</span>
                </div>
                <span className="font-bold text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  {Math.min(progress, 100)}%
                </span>
              </div>

              {/* Glowing Progress Line */}
              <div className="w-full h-[3px] bg-slate-900 rounded-full relative overflow-hidden border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 shadow-[0_0_20px_#3B82F6]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>

            {/* Corner Decorative Frames */}
            <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-blue-500/60" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-blue-500/60" />
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}