import React from "react";
import {
  Code2,
  Database,
  Server,
  Sparkles,
  Target,
  Zap,
  GraduationCap,
  Briefcase,
  Wrench,
  Brain,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={16} />,
    items: ["Java", "C++", "C", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: <Code2 size={16} />,
    items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={16} />,
    items: ["Node.js", "Express.js", "Spring Boot", "Hibernate"],
  },
  {
    title: "Databases",
    icon: <Database size={16} />,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench size={16} />,
    items: [
      "Git & GitHub",
      "Postman",
      "Maven",
      "VS Code",
      "IntelliJ IDEA",
      "Cursor AI",
    ],
  },
  {
    title: "Core Concepts",
    icon: <Brain size={16} />,
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "RESTful APIs",
      "Microservices",
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users size={16} />,
    items: [
      "Problem-Solving",
      "Team Collaboration",
      "Agile Methodologies",
      "Effective Communication",
    ],
  },
];

const highlights = [
  {
    icon: <GraduationCap size={22} />,
    text: "Computer Engineering Graduate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Briefcase size={22} />,
    text: "Hands-on Internship Experience",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Code2 size={22} />,
    text: "MERN & Java Full Stack Projects",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: <Target size={22} />,
    text: "Career-Focused Developer",
    color: "from-green-500 to-emerald-500",
  },
];

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0b0b0b] to-[#0f0a08] px-6 md:px-20 py-28 md:py-32 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold">
              About Me
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text">
            Who I Am
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A passionate Full Stack Web Developer focused on building modern,
            scalable and user-friendly web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* LEFT */}
          <div
            className="space-y-6 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="text-orange-400">Govind Chaknalwar</span>
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a{" "}
                <span className="text-orange-400 font-semibold">
                  Full Stack Developer (Java/Spring Boot + MERN)
                </span>{" "}
                with hands-on experience building responsive, scalable web
                applications through internships and personal projects. I work
                end-to-end — from database design to deployment-ready user
                interfaces.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I'm skilled in designing and consuming RESTful APIs,
                implementing secure authentication with{" "}
                <span className="text-orange-400">Spring Security & JWT</span>,
                and building responsive interfaces with modern React practices.
                I have a strong foundation in{" "}
                <span className="text-amber-400">
                  Data Structures & Algorithms
                </span>{" "}
                and Object-Oriented Programming, with a passion for writing
                clean, maintainable, and efficient code.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:scale-105 hover:border-orange-500/30 transition"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3`}
                  >
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <p className="text-white font-semibold text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Skills */}
          <div
            className="space-y-6 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-orange-400" /> Skills
            </h3>

            {skillCategories.map((category, index) => (
              <div key={index}>
                <p className="flex items-center gap-2 text-orange-400 text-sm font-semibold uppercase tracking-wide mb-3">
                  {category.icon}
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200 hover:border-orange-500/40 hover:text-orange-300 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
