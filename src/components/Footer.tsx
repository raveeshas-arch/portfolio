import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-10 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#00ffe5]">Your Name</h2>
          <p className="text-gray-400">Full Stack Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-gray-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffe5] transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffe5] transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffe5] transition-colors text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[#00ffe5] transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
