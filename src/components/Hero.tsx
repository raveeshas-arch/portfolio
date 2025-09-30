import { motion } from "framer-motion";
import me from "../assets/img1.png"; // replace with your image

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-transparent px-6 sm:px-12 flex items-center max-w-[1920px] mx-auto">
      <div className=" mx-auto xl:max-w-[1000px] flex flex-col lg:flex-row items-center justify-between ">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00ffe5] mb-4">
            Hi, I'm Raveesha Nethsarani
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-6">
            I'm a Full Stack Developer passionate about building scalable and
            meaningful digital solutions. I specialize in MERN stack and
            Java-based backend development.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#00ffe5] text-black font-semibold rounded-lg shadow-lg hover:bg-[#00d4c2] transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={me}
            alt="Raveesha Nethsarani"
            className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
