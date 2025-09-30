import { motion } from "framer-motion";

const SkillCard = ({ name, skills }: { name: string; skills: string[] }) => {
  return (
    <motion.div
      className="w-full sm:w-[45%] md:w-[300px] rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Gradient Heading */}
      <h2 className="mb-4 text-xl font-bold text-transparent bg-clip-text animate-gradient">
        {name}
      </h2>

      {/* Skills List */}
      <ul className="space-y-2 text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="pl-2 text-purple-300">
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
