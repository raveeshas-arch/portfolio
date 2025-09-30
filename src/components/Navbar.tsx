import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-2xl bg-opacity-90 text-white shadow-lg z-50 max-w-[1920px] mx-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="font-orbitorn italic text-2xl font-bold bg-gradient-to-r from-[#00ffe5] via-[#00bfff] to-[#0077ff] bg-clip-text text-transparent">
          RN
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((nav, idx) => (
            <li key={idx}>
              <a
                href={nav.link}
                className="hover:text-[#00ffe5] transition-colors"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((nav, idx) => (
              <li key={idx}>
                <a
                  href={nav.link}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-yellow-400 transition-colors text-lg"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
