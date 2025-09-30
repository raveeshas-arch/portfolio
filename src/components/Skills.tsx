import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaDocker, FaCode 
} from "react-icons/fa";
import { 
  SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiSpringboot, SiExpress
} from "react-icons/si";


const skillsTree = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "REST APIs", icon: <SiExpress /> },
    ],
  },
];

const SkillsTreeLayout = () => {
  return (
    <section className="relative w-full px-6 sm:px-12 py-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#00ffe5] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12">
          {skillsTree.map((skill, index) => (
            <motion.div
              key={index}
              className="flex-1 flex flex-col items-center lg:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#00ffe5] mb-6">{skill.category}</h3>
              <div className="flex flex-col gap-4 relative">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300 text-lg relative">
                    <span className="text-[#00ffe5] text-2xl">{item.icon}</span>
                    <span>{item.name}</span>
                    {idx !== skill.items.length - 1 && (
                      <span className="absolute left-8 top-10 h-6 border-l border-gray-600"></span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsTreeLayout;
