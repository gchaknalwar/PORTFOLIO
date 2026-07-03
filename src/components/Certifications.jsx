import React from "react";
import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Software Developer Internship",
    org: "Yuga Yatra Retail (OPC) Private Limited",
    description:
      "Completed a Software Developer Internship focused on developing scalable web applications using modern Java and MERN technologies.",
  },
  {
    title: "Insight Explorer Intern",
    org: "The Lead Market",
    description:
      "Performed market research, data analysis, and business reporting to identify trends and support strategic business decisions.",
  },
  {
    title: "Web Development Internship",
    org: "OctaNet Technologies",
    description:
      "Strengthened frontend development skills by building responsive web interfaces and integrating RESTful APIs using modern web technologies.",
  },
];

const Certifications = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0a] via-[#0b0b0b] to-[#0f0a08] px-6 md:px-20 py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <Award className="text-orange-400" size={16} />
            <span className="text-orange-300 text-sm font-semibold">
              Certifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text">
            Certifications & Recognitions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <BadgeCheck className="text-white" size={20} />
              </div>
              <h3 className="text-white font-bold mb-1">{cert.title}</h3>
              <p className="text-orange-400 text-sm font-semibold mb-3">
                {cert.org}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;