import React, { useState } from "react";
import { Github, ExternalLink, Code2, Eye } from "lucide-react";

// NOTE: These image files are reused from your old projects as placeholders
// so the code doesn't break. Swap them for real screenshots of these three
// projects when you have them (same filenames, or update the imports below).
import ecommerceImg from "../assets/images/vougeVault.png";
import bankingImg from "../assets/images/flightBooking.png";
import taskApiImg from "../assets/images/coffee.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Web Platform",
    description:
      "A full-stack e-commerce application built with the MERN stack — product catalog, category-based filtering, shopping cart, secure user authentication, and order management. Integrated JWT auth and Razorpay/Stripe for checkout, plus a responsive admin dashboard for inventory, order tracking, and sales analytics.",
    image: ecommerceImg,
    github: "https://github.com/gchaknalwar",
    demo: "#",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
  },
  {
    id: 2,
    title: "Online Banking System",
    description:
      "A secure banking application with user authentication and role-based authorization using Spring Security. Includes a normalized MySQL schema with Hibernate/JPA, RESTful APIs for account management, fund transfers, and transaction history, plus a responsive React frontend.",
    image: bankingImg,
    github: "https://github.com/gchaknalwar",
    demo: "#",
    tags: ["Spring Boot", "Hibernate", "MySQL", "React.js", "Spring Security"],
  },
  {
    id: 3,
    title: "Task Management REST API",
    description:
      "A Task Management REST API built with Spring Boot, Spring Data JPA, and MySQL — full CRUD operations following RESTful design principles, with task filtering, sorting, and deadline management. Tested and documented using Postman.",
    image: taskApiImg,
    github: "https://github.com/gchaknalwar",
    demo: "#",
    tags: ["Spring Boot", "Spring Data JPA", "MySQL", "Postman"],
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0b0b0b] to-[#0f0a08] px-6 md:px-20 py-28 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <Code2 className="text-orange-400" size={18} />
            <span className="text-orange-300 text-sm font-semibold">
              My Projects
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text">
            Featured Work
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Real-world projects built using MERN Stack and Java Full Stack,
            focusing on performance, security and clean UI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div
                    className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="text-center">
                      <Eye className="text-orange-400 mx-auto mb-2" size={36} />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-bold hover:scale-105 transition"
                    >
                      <Github size={18} /> GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                      className="px-5 py-3 border border-white/20 rounded-xl text-white hover:border-orange-400 transition"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/gchaknalwar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-2xl text-white font-bold hover:border-orange-400 transition"
          >
            <Github size={22} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
