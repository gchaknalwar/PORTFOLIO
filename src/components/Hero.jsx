import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  Code2,
  Cpu,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

// Reusing your existing image import path
import ProfileImg from "../assets/images/profile.jpg";

// Framer Motion Staggered Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeFloatingVariants = (duration = 5) => ({
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export default function Hero() {
  const canvasRef = useRef(null);

  // Background Interactive Particle Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#03050A] bg-grid-pattern overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* Subtle Background Radial Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-28 pb-12 min-h-screen flex flex-col justify-between">
        {/* 1. Top Navigation & Live Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-slate-400 border-b border-white/5 pb-4 mb-6 backdrop-blur-xs"
        >
          <span className="flex items-center gap-2 text-blue-400 font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            {personalInfo.title}
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Compass className="w-3.5 h-3.5 text-blue-400 animate-[spin_12s_linear_infinite]" />
            BASED IN {personalInfo.location}
          </span>
          <span className="text-emerald-400 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* 2. Main Hero Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center flex-grow py-4"
        >
          {/* Left Column: Bold Typography & Action CTAs */}
          <div className="lg:col-span-7 z-20">
            {/* Top Subtitle Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>CRAFTING NEXT-GEN WEB EXPERIENCES</span>
            </motion.div>

            {/* Main Animated Title */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[112px] font-extrabold tracking-tighter uppercase font-display leading-[0.88] mb-6">
                <motion.span
                  className="text-white block tracking-tight transition-all duration-300 hover:text-slate-200"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  FRONTEND
                </motion.span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 block drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ENGINEER
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-200 font-medium mb-3 max-w-xl font-sans tracking-tight"
            >
              "Building modern digital experiences with React."
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-slate-400 max-w-lg mb-8 leading-relaxed font-sans"
            >
              {personalInfo.shortAbout}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 relative z-30"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono tracking-widest font-bold rounded-sm transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  VIEW PROJECTS{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-slate-700 hover:border-blue-500/80 text-slate-300 hover:text-white text-xs font-mono tracking-widest font-bold rounded-sm transition-all duration-300 bg-slate-900/40 backdrop-blur-md"
              >
                CONTACT ME{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Clean Profile Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-full min-h-[480px] lg:min-h-[620px]">
            {/* Floating Tech Badges */}
            <motion.div
              variants={badgeFloatingVariants(4)}
              animate="animate"
              className="absolute top-12 left-0 sm:left-4 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-200 text-xs font-mono backdrop-blur-md shadow-xl"
            >
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>React & Next.js</span>
            </motion.div>

            <motion.div
              variants={badgeFloatingVariants(6)}
              animate="animate"
              className="absolute bottom-28 left-2 sm:-left-2 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-200 text-xs font-mono backdrop-blur-md shadow-xl"
            >
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>UI/UX Architecture</span>
            </motion.div>

            {/* Profile Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full max-w-lg flex justify-center items-end z-10"
            >
              {/* Clean Natural Image */}
              <motion.img
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4 }}
                src={ProfileImg}
                alt="Govind Chaknalwar"
                className="w-auto h-[480px] sm:h-[560px] lg:h-[620px] max-w-none object-contain object-bottom select-none lg:pr-16"
              />

              {/* Natural Bottom Fade to merge seamlessly with section floor */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#03050A] via-[#03050A]/70 to-transparent z-20 pointer-events-none" />

              {/* Geo Location Tag */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-6 right-2 sm:right-6 z-30 text-right font-mono pointer-events-none"
              >
                <p className="text-white text-xs font-bold tracking-widest drop-shadow-md">
                  GOVIND CHAKNALWAR
                </p>
                <p className="text-blue-400 text-[10px] tracking-wider font-semibold">
                  17.3850° N, 78.4867° E
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3. Bottom Editorial Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 text-slate-500 border-t border-white/5 pt-6 mt-4 font-mono"
        >
          <div className="max-w-xs text-xs tracking-widest text-slate-400 uppercase">
            {personalInfo.specialization || "React & Frontend Architecture"}
          </div>
          <div className="text-right text-[11px] leading-tight flex items-center gap-3">
            <span className="text-2xl font-display font-bold text-slate-200 tracking-wider">
              G<span className="text-blue-500">C</span>
            </span>
            <div className="text-slate-400">
              HYDERABAD, IN
              <br />
              <span className="text-blue-400 font-semibold">
                AVAILABLE FOR ROLES
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}