import { Projects } from "@/types";

export const projects: Projects[] = [
  {
    title: "CureConnect",
    description:
      "A full-stack Doctor Appointment Booking System featuring role-based access for Admin, Doctor, and Patient. Includes online payments, real-time booking, profile management, and dashboard analytics.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Razorpay",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/Prashant20245/CureConnect", // Use actual repo if different
    demoLink: "https://cure-connect-q1bm.vercel.app",
    image: "/projects/cureconnect.png", // Make sure this image exists in /public/projects
  },
  {
    title: "AiCruiter",
    description:
      "A full-stack AI Recruiter Voice Agent that conducts real-time, AI-driven job interviews through voice interaction. Designed with a responsive UI and integrated authentication and data management.",
    technologies: [
      "Next.js",
      "React",
      "Vapi API",
      "Supabase",
      "ShadCN UI",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/Prashant20245/AiCruiter",
    demoLink: "https://aicruiter.vercel.app", // Update this if it differs from actual
    image: "/projects/aicruiter.png", // Ensure this image is present in /public/projects/
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/portfolio.png",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides real-time weather updates.",
    technologies: ["React", "OpenWeatherMap API"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/weather-app.jpg",
  },
];
