import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav
        className="
        w-[95%]
        md:w-[90%]
        max-w-7xl

        backdrop-blur-xl
        bg-white/10
        dark:bg-black/20

        border border-white/20
        shadow-xl

        rounded-3xl

        px-6
        py-4

        transition-all
        duration-300
      "
      >
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="font-bold text-xl md:text-2xl text-white"
          >
            OlympiaFX
          </Link>

          <div className="hidden md:flex gap-8 text-white items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/properties">Lands</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="text-white text-xl"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {open && (
          <div className="flex flex-col gap-4 mt-6 text-white md:hidden">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/properties">Lands</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;