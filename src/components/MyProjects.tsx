import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Replace these with your actual projects
const projects = [
  {
    title: "E-Commerce Web App",
    description: "A full stack e-commerce application built with MERN stack.",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce.example.com",
    icon: "/assets/icons/ecommerce.png", // optional project icon
  },
  {
    title: "Task Manager",
    description: "A task management app with authentication and REST APIs.",
    github: "https://github.com/yourusername/task-manager",
    live: "https://taskmanager.example.com",
    icon: "/assets/icons/task.png",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    icon: "/assets/icons/portfolio.png",
  },
];

const MyProjects = () => {
  return (
    <section className="relative w-full px-6 sm:px-12 py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#00ffe5] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#111] rounded-2xl p-6 shadow-lg shadow-[#00ffe560] hover:scale-105 transition-transform flex flex-col items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Icon */}
              {project.icon && (
                <img
                  src={project.icon}
                  alt={project.title}
                  className="w-12 h-12 object-contain mb-2"
                />
              )}

              <h3 className="text-xl font-semibold text-[#00ffe5]">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>

              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00ffe5] transition-colors flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00ffe5] transition-colors flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
