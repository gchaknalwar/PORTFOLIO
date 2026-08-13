import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  ArrowUpRight,
  ExternalLink,
  Github,
  X,
  Code2,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="py-28 bg-[#03050A] border-t border-white/5 relative overflow-hidden select-none"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Tag & Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-widest mb-4">
            <Folder className="w-4 h-4" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase mb-16">
            <span className="text-white">FEATURED </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]">
              PROJECTS
            </span>
          </h2>
        </motion.div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-blue-500/50 hover:via-blue-500/20 hover:to-indigo-500/10 shadow-lg hover:shadow-[0_0_35px_rgba(37,99,235,0.2)] transition-all duration-500 flex flex-col justify-between"
            >
              <div className="w-full h-full bg-[#080C14] rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl flex flex-col justify-between">
                <div>
                  {/* Top Card Header Info */}
                  <div className="flex justify-between items-start mb-5">
                    <span className="text-3xl font-display font-black text-blue-500/80 font-mono tracking-tighter group-hover:text-blue-400 transition-colors">
                      {typeof project.id === "number" && project.id < 10
                        ? `0${project.id}`
                        : project.id}
                    </span>
                    <span className="text-[10px] font-mono border border-white/10 bg-white/5 px-2.5 py-1 rounded-full text-slate-400 uppercase tracking-wider">
                      {project.category || "Full Stack"}
                    </span>
                  </div>

                  {/* Card Graphic / Image Area */}
                  <div className="w-full h-40 bg-slate-900/80 border border-white/10 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/5" />
                        <span className="font-mono text-xs text-slate-500 tracking-widest group-hover:text-blue-400 transition-colors font-bold z-10">
                          [{project.title.toUpperCase()}]
                        </span>
                      </>
                    )}
                  </div>

                  {/* Project Title & Short Description */}
                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2 mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Action Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech?.map((t, index) => (
                      <span
                        key={index}
                        className="text-[10px] font-mono text-blue-300 bg-blue-950/40 border border-blue-800/30 px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button className="w-full flex items-center justify-between text-xs font-mono tracking-wider text-slate-400 pt-4 border-t border-white/5 group-hover:text-white transition-colors">
                    <span>VIEW DETAILS</span>
                    <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-3xl bg-[#080C14] border border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(37,99,235,0.3)] z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-blue-400 tracking-widest font-semibold uppercase">
                    PROJECT ARCHITECTURE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Graphic / Image Banner */}
              <div className="w-full h-56 sm:h-72 bg-slate-900/80 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden mb-6">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="text-center p-6">
                    <Folder className="w-12 h-12 text-blue-500/60 mx-auto mb-3 animate-pulse" />
                    <p className="text-sm font-mono text-slate-300 font-semibold">
                      {selectedProject.title}
                    </p>
                    <p className="text-xs font-mono text-slate-500 mt-1">
                      {selectedProject.category ||
                        "System Architecture Showcase"}
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                {selectedProject.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">
                  TECHNOLOGIES UTILIZED
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech?.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono text-blue-300 bg-blue-950/60 border border-blue-700/40 px-3 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links / Footer Actions */}
              <div className="flex flex-wrap gap-4 items-center justify-end border-t border-white/10 pt-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  CLOSE
                </button>

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono font-bold rounded-lg transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>SOURCE CODE</span>
                  </a>
                )}

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
