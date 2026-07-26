import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./navlogo.png";

const sections = [
  { id: "home", label: "Home" },
  { id: "clientstories", label: "Testimonial" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const obsOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, obsOptions);

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#00303C] shadow-lg">
  <div className="flex items-center px-6 md:px-12 py-4 w-full max-w-[1310px] mx-auto">
    {/* Mobile / Desktop Flex Container */}
    <div className="flex items-center justify-between w-full">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm font-outfit text-white">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleNavClick(s.id)}
            className={`relative px-1 transition-all duration-300
              before:absolute before:bottom-0 before:left-0 before:w-0 
              before:h-0.5 before:bg-[#C6FD07] before:transition-all before:duration-300 
              hover:before:w-full`}
          >
            {s.label}
            <span
              className={`absolute left-0 bottom-[-3px] h-[2px] bg-[#00303C] transition-all duration-300 ${
                active === s.id ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Desktop Contact Button */}
      <div className="hidden md:flex">
        <button
          onClick={() => handleNavClick("contact")}
          className="bg-[#C6FD07] text-[#00303C] px-4 py-1.5 rounded-full font-semibold shadow-md hover:scale-105 transition-transform text-sm"
        >
          Contact Us
        </button>
      </div>

      
      <button
        onClick={() => setOpen((s) => !s)}
        className="md:hidden text-white text-2xl p-2 rounded-md focus:outline-none z-50"
      >
        {open ? "✕" : "☰"}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 w-full border-t border-[#00303C] p-6 md:hidden shadow-lg backdrop-blur-lg flex flex-col gap-3 bg-[#00303C]"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleNavClick(s.id)}
            className={`text-left px-3 py-2 rounded-md transition-colors ${
              active === s.id
                ? "bg-[#C6FD07] text-[#00303C] font-semibold"
                : "text-white hover:text-green-600"
            }`}
          >
            {s.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick("contact")}
          className="mt-3 bg-[#C6FD07] text-[#00303C] px-4 py-2 rounded-full w-full font-semibold hover:scale-105 transition-transform"
        >
          Contact
        </button>
      </motion.div>
    )}
  </AnimatePresence>
</header>

  );
}
