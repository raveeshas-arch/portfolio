
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGit, SiGithub, SiPostman } from 'react-icons/si';
import type { IconType } from 'react-icons';

interface Skill {
  Icon: IconType;
  label: string;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="px-6 md:px-12 ">
     <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold flex justify-center gap-2 mt-4 mb-4">
              <span className="text-[#00ffe5]">My</span>
              <span className="bg-gradient-to-r from-[#00ffe5] via-[#00bfff] to-[#0077ff] bg-clip-text text-transparent">
               Skills
              </span>
            </h2>
          </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-[1200px] justify-center mx-auto px-auto mt-10">
        <SkillCategory title="Frontend" icon={<FaCode className="text-blue-500" />} skills={[
          { Icon: SiHtml5, label: "HTML5" },
          { Icon: SiCss3, label: "CSS3" },
          { Icon: SiJavascript, label: "JavaScript" },
          { Icon: SiReact, label: "React.js" },
          { Icon: SiTailwindcss, label: "Tailwind CSS" },
          { Icon: SiTypescript, label: "TypeScript" },
        ]} />

        <SkillCategory title="Backend" icon={<FaServer className="text-green-500" />} skills={[
          { Icon: SiNodedotjs, label: "Node.js" },
          { Icon: SiExpress, label: "Express.js" },
          { Icon: FaTools, label: "JWT" },
          { Icon: FaServer, label: "HTTPS" },
          { Icon: SiPostman, label: "Postman" },
          { Icon: FaTools, label: "bcrypt" },
        ]} />

        <SkillCategory title="Database" icon={<FaDatabase className="text-purple-500" />} skills={[
          { Icon: SiMysql, label: "MySQL" },
          { Icon: SiMongodb, label: "MongoDB" },
          { Icon: FaTools, label: "Mongoose" },
        ]} />

        <SkillCategory title="Tools & Practices" icon={<FaTools className="text-yellow-500" />} skills={[
          { Icon: SiGit, label: "Git" },
          { Icon: SiGithub, label: "GitHub" },
          { Icon: FaTools, label: "VS Code" },
          { Icon: FaTools, label: "Responsive Design" },
          { Icon: FaTools, label: "Agile" },
          { Icon: FaTools, label: "Vite" },
          { Icon: FaTools, label: "Framer Motion" },
        ]} />
      </div>
    </section>
  );
};

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    transition={{ duration: 0.5 }}
    className='relative  bg-[#111] p-4 rounded-xl'
  >
    <div className="flex items-center gap-3 mb-4 text-xl font-semibold ">
      {icon}
      <span>{title}</span>
    </div>
    <div className="flex flex-wrap gap-4 ">
      {skills.map(({ Icon, label }, i: number) => (
        <motion.div
          key={label}
          className="flex items-center gap-2 px-3 py-2  bg-gray-600/50 rounded shadow hover:scale-105 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
        >
          <Icon className="text-xl" />
          <span className="text-sm font-medium">{label}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills;