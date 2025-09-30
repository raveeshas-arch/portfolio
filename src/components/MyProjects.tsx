import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Img1 from '../assets/agency.png'
import Img2 from '../assets/animal.jpeg'
import Img3 from '../assets/panda.png'
import Img4 from '../assets/Picture1.png'

// Replace these with your actual projects
const projects = [
  {
    title: "Agency Website",
    description: "A Web Application Create using reactjs ",
    github: "#",
    live: "#",
    icon: Img1, 
  },
  {
    title: "Animal Clinic website",
    description: "A full stack e-commerce application built with MERN stack..",
    github: "#",
    live: "#",
    icon: Img2,
  },
  {
    title: "Token Website",
    description: "A Web Application Create using reactjs ",
    github: "#",
    live: "#",
    icon: Img3,
  },
  {
    title: "Restourant Website",
    description: "A website create using HTML CSS and JavaScript.",
    github: "#",
    live: "#",
    icon: Img4,
  },
];

const MyProjects = () => {
  return (
    <section id="projects" className="relative w-full px-6 sm:px-12 py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto text-center">
       <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold flex justify-center gap-2 mt-4 mb-4">
              <span className="text-[#00ffe5]">My</span>
              <span className="bg-gradient-to-r from-[#00ffe5] via-[#00bfff] to-[#0077ff] bg-clip-text text-transparent">
               Projects
              </span>
            </h2>
          </div>
</motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1200px] gap-8 mt-10">
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
                  className="w-100 h-auto object-contain mb-2"
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
