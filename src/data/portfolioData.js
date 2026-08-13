// Local images import karne ke liye niche di gayi lines uncomment karein jab aap images add kar lein:
import unisalonImg from "../assets/images/unisalon.png";
import portfolioImg from "../assets/images/devloperportfolio.png";
import ecommerceImg from "../assets/images/ecommerceImg.png";
import flighBookingtImg from "../assets/images/flightbookingImg.png";
import onlinebankImg from "../assets/images/onlinebankImg.png";
import taskApiImg from "../assets/images/taskApiImg.png";
import posImg from "../assets/images/posImg.png";

export const personalInfo = {
  name: "GOVIND CHAKNALWAR",
  title: "FRONTEND ENGINEER",
  specialization: "React.js / Frontend Development",
  location: "HYDERABAD, INDIA",
  availability: "AVAILABLE FOR OPPORTUNITIES",
  heroHeadingLine1: "FRONTEND",
  heroHeadingLine2: "ENGINEER",
  heroTagline: "Building modern digital experiences with React.",
  shortAbout:
    "I’m a Frontend Engineer focused on building modern, responsive and interactive web experiences. I turn ideas and designs into clean, scalable and production-ready interfaces using React and modern frontend technologies.",
  stats: [
    { value: "10+", label: "PROJECTS BUILT" },
    { value: "3+", label: "INTERNSHIP EXPERIENCES" },
    { value: "100%", label: "FRONTEND FOCUS" },
  ],
  resumeUrl: "/resume.pdf",
};

export const projectsData = [
  {
    id: "01",
    title: "E-Commerce Website",
    description:
      "Modern e-commerce experience with responsive product interfaces and interactive frontend components.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Context API"],
    category: "Web Application",
    image: ecommerceImg,
    // "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/your-username/ecommerce",
    live: "https://your-ecommerce.vercel.app",
  },
  {
    id: "02",
    title: "Flight Booking System",
    description:
      "Responsive flight booking interface focused on usability, clean navigation and modern UI.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    category: "UI System",
    image: flighBookingtImg,
    // "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/your-username/flight-booking",
    live: "https://your-flight-app.vercel.app",
  },
  {
    id: "03",
    title: "UniSalon Online Booking",
    description:
      "Online appointment booking platform for salons with real-time slot selection, service management, and responsive UI.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    image: unisalonImg,
    // "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop", // Replace with your local image import
    github: "https://github.com/your-username/unisalon-booking",
    live: "https://unisalon.vercel.app",
  },
  {
    id: "04",
    title: "Online Banking System",
    description:
      "Full-stack banking application with secure backend architecture and structured data management.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "React.js"],
    category: "Full Stack",
    image: onlinebankImg,
    // "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/your-username/online-banking",
    live: "https://your-banking-app.vercel.app",
  },
  {
    id: "05",
    title: "Developer Portfolio",
    description:
      "Modern responsive portfolio built to showcase frontend development, projects and professional experience.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    image: portfolioImg,
    // "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/your-username/portfolio",
    live: "https://your-portfolio.vercel.app",
  },
  {
    id: "06",
    title: "Smart Grocery POS",
    description:
      "Desktop point-of-sale system for grocery store management with products, customers, sales and billing.",
    tech: ["React", "Electron", "SQLite", "Tailwind CSS"],
    category: "Desktop App",
    image: posImg,
    // "https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/your-username/grocery-pos",
    live: "",
  },
  {
    id: "07",
    title: "Task Management REST API",
    description:
      "REST API for managing tasks, users and application workflows.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "Backend API",
    image: taskApiImg,
    // "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/your-username/task-api",
    live: "https://your-api.onrender.com",
  },
];

export const skillsData = {
  frontend: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite",
    "React Router",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
  ],
  tools: ["Git", "GitHub", "GitLab", "Vercel", "Cloudflare", "VS Code"],
};

export const processSteps = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Understand requirements, users and project goals.",
  },
  {
    step: "02",
    title: "PLAN",
    description: "Define structure, components and technical approach.",
  },
  {
    step: "03",
    title: "DESIGN",
    description: "Create clean, responsive and intuitive interfaces.",
  },
  {
    step: "04",
    title: "DEVELOP",
    description: "Build reusable React components and integrate APIs.",
  },
  {
    step: "05",
    title: "TEST & DEPLOY",
    description: "Optimize, test and deploy production-ready applications.",
  },
];

export const experienceData = [
  {
    role: "SOFTWARE DEVELOPER INTERN",
    company: "Yuga Yatra Retail (OPC) Private Limited",
    period: "February 2026",
    details:
      "Focused on frontend feature implementation and responsive layout optimizations.",
  },
  {
    role: "FULL STACK DEVELOPMENT INTERN",
    company: "Auspify Technologies",
    period: "July 2026 – August 2026",
    details:
      "Built end-to-end web modules and streamlined React component architecture.",
  },
  {
    role: "INSIGHT EXPLORER INTERN",
    company: "The Lead Market",
    period: "Recent",
    details: "Data interaction and dynamic UI implementations.",
  },
  {
    role: "FRONTEND / DEVELOPMENT INTERNSHIPS",
    company: "OctaNet • Simplilearn • DataFlair",
    period: "Previous",
    details:
      "Completed technical training modules, hands-on projects, and web engineering tasks.",
  },
];

export const certificatesData = [
  {
    title: "React Development Specialist",
    org: "Online Learning Platform",
    date: "2025",
  },
  {
    title: "Full Stack Java Web Development",
    org: "Technical Academy",
    date: "2025",
  },
  {
    title: "Frontend Engineering Fundamentals",
    org: "Certification Authority",
    date: "2024",
  },
];
