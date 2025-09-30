import { motion } from "framer-motion";
import me from "../assets/img1.png"; 
import cvFile from "../assets/cvvv.pdf"; // Import your CV PDF

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-transparent px-6 sm:px-12 flex items-center  pt-20 lg:pt-0">
      <div className=" mx-auto xl:max-w-[1000px]  flex flex-col lg:flex-row items-center justify-between ">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 lg:text-left text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-[#00ffe5] mb-4">
            Hi, I'm Raveesha Nethsarani
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-6">
            I'm a Full Stack Developer passionate about building scalable and
            meaningful digital solutions. I specialize in MERN stack backend development.
          </p>
          <div className="flex gap-5 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#00ffe5] text-black font-semibold rounded-lg shadow-lg hover:bg-[#00d4c2] transition"
            >
              Contact Me
            </a>

            <a
              href={cvFile} // Use the imported PDF
              download
              className="inline-block px-6 py-3 border-white text-white border-2 font-semibold rounded-lg shadow-lg hover:bg-[#00d4c2] transition hover:text-black hover:border-[#00d4c2]"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end" 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
        > 
          <img src={me} alt="Raveesha Nethsarani" className="w-full md:max-w-[500px] h-auto lg:max-w-md shadow-2xl rounded-full py-3 mt-10 lg:mt-0" /> 
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
