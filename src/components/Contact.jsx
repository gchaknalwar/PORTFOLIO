import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  Copy,
  Check,
  Globe,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "gchaknalwar@gmail.com"; // 👈 Yahan apna email daal do

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      username: "@gchaknalwar",
      icon: Github,
      url: "https://github.com/gchaknalwar", // 👈 Apna GitHub URL daalein
      color:
        "hover:border-purple-500/50 hover:text-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
    },
    {
      name: "LinkedIn",
      username: "Govind Chaknalwar",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/govind-chaknalwar-b35278215/", // 👈 Apna LinkedIn URL daalein
      color:
        "hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
    },
    {
      name: "Twitter / X",
      username: "@255_Boss",
      icon: Twitter,
      url: "https://x.com/255_Boss", // 👈 Apna Twitter URL daalein
      color:
        "hover:border-sky-500/50 hover:text-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]",
    },
    {
      name: "Direct Email",
      username: emailAddress,
      icon: Mail,
      url: `mailto:${emailAddress}`,
      color:
        "hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 bg-[#03050A] border-t border-white/5 relative overflow-hidden select-none"
    >
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-widest mb-4 uppercase">
            <Globe className="w-4 h-4" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight uppercase">
            <span className="text-white block">LET'S CONNECT &</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 drop-shadow-[0_0_35px_rgba(37,99,235,0.4)] block">
              BUILD TOGETHER
            </span>
          </h2>
        </motion.div>

        {/* Grid Layout: Main Email Box + Social Links Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Primary Email Box (Large Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#080C14] border border-white/10 rounded-2xl p-8 md:p-10 relative flex flex-col justify-between overflow-hidden group hover:border-blue-500/40 transition-all duration-500 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  {personalInfo.availability || "AVAILABLE FOR WORK"}
                </span>

                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {personalInfo.location || "HYDERABAD, INDIA"}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
                Have a project or opportunity in mind?
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg">
                Feel free to reach out directly. I'm always open to discussing
                new frontend roles, collaborative web projects, or engineering
                workflows.
              </p>
            </div>

            {/* Quick Action Buttons: Send Mail & Copy Address */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <Send className="w-4 h-4" />
                SEND EMAIL DIRECTLY
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-mono text-xs px-5 py-3.5 rounded-xl transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">EMAIL COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Social Media Links Grid (2x2 Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-[#080C14] border border-white/10 rounded-2xl p-5 flex items-center justify-between text-slate-300 transition-all duration-300 group ${social.color}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold font-display text-white group-hover:text-white transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                        {social.username}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} GOVIND CHAKNALWAR. ALL RIGHTS RESERVED.
          </p>
          <p className="flex items-center gap-2">
            BUILT WITH{" "}
            <span className="text-blue-400 font-bold">REACT & TAILWIND</span>
          </p>
        </div>
      </div>
    </section>
  );
}
