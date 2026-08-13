import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "PROJECTS", href: "#projects", id: "projects" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  // Active section track karne ke liye IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Screen ke central portion me entry track karega
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#03050a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wider font-display text-white hover:text-blue-400 transition-colors"
        >
          GOVIND CHAKNALWAR
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 text-xs tracking-widest font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}

                {/* Glowing Indicator Dot for Active State */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full hover:bg-blue-600/10 hover:border-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#080c14] border-b border-white/10 px-6 py-6 flex flex-col space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between text-sm font-mono tracking-widest px-4 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10 border-l-2 border-blue-400 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-between text-xs font-mono tracking-widest text-blue-400 border border-blue-500/30 px-4 py-3 rounded-md hover:bg-blue-600/10 mt-2"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
