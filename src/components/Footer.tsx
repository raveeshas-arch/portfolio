import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-10 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Name */}
        <div className="text-center md:text-left">
         <div className="font-orbitorn italic text-2xl font-bold bg-gradient-to-r from-[#00ffe5] via-[#00bfff] to-[#0077ff] bg-clip-text text-transparent">
          Raveesha Nethsarani
        </div>
          <p className="text-gray-400">Full Stack Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-gray-400  ">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffe5] transition-colors text-2xl cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffe5] transition-colors text-2xl cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffe5] transition-colors text-2xl cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[#00ffe5] transition-colors text-2xl cursor-pointer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} raveesha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
