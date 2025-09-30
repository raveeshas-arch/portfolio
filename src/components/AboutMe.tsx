import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="relative w-full px-6 sm:px-12 py-20 bg-transparent  text-white">
      <div className="max-w-5xl mx-auto  items-center ">
        
        {/*Text */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00ffe5]">
            About Me
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I'm a 23-year-old Higher National Diploma in Information Technology student from Sri Lanka, currently studying at the Sri Lanka Institute of Advanced Technological Education (ATI) in Galle. Alongside my academic journey, I'm further enhancing my skills in full stack development at Certix Institute.
          </p>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I'm currently working as a trainee Full Stack System Engineer at Botcalm, where I’m gaining hands-on experience with real-world projects, sharpening both my frontend and backend development skills.
          </p>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I’m passionate about building meaningful and scalable digital solutions. With a growing skill set in modern technologies across the MERN stack and Java-based backends, I aim to become a well-rounded full stack developer.
          </p>
        </motion.div>

      
      </div>
    </section>
  );
};

export default AboutMe;
