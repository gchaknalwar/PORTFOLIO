import React from "react";
import { GraduationCap, Briefcase, CalendarDays } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Software Engineer Intern",
    place: "YugaYatra Retail (OPC) Private Ltd — Remote",
    period: "Dec 2025 — Feb 2026",
    description:
      "Used Git for version control in an Agile workflow, contributing to sprint planning, code reviews, and iterative feature development. Leveraged AI-assisted tools like Cursor AI to improve development efficiency while keeping code clean and well-structured.",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    place: "Parul University",
    period: "2022 — 2026",
    description: "Engineering, CGPA: 7.12",
  },
  {
    type: "work",
    title: "Web Development Intern",
    place: "OctaNet Technologies — Remote",
    period: "Oct 2023 — Dec 2023",
    description:
      "Designed and developed end-to-end full-stack web applications using React.js, Node.js, Express.js, MongoDB, and MySQL. Built responsive UIs and scalable RESTful APIs following clean coding practices.",
  },
  {
    type: "education",
    title: "Intermediate (MPC)",
    place: "Sri Chaitanya Junior College",
    period: "2020 — 2022",
    description: "GPA: 96%",
  },
  {
    type: "education",
    title: "High School",
    place: "Krishnaveni Residential High School",
    period: "2016 — 2020",
    description: "GPA: 93%",
  },
];

const Experience = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0b0b0b] to-[#0f0a08] px-6 md:px-20 py-28 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <CalendarDays className="text-orange-400" size={16} />
            <span className="text-orange-300 text-sm font-semibold">
              Journey So Far
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text">
            Experience & Education
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A quick timeline of my education and hands-on development
            experience.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/40" />

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white shrink-0">
                      {item.type === "education" ? (
                        <GraduationCap size={18} />
                      ) : (
                        <Briefcase size={18} />
                      )}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-orange-400 text-sm font-semibold">
                    {item.period}
                  </span>
                </div>

                <p className="text-gray-300 font-medium mb-1">{item.place}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
