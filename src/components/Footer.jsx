import React from "react";
import { motion } from "framer-motion";
import logo from "./navlogo.png";
import img5 from "./calendly.png";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiArrowUpRight } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Client Stories", href: "#clientstories" },
];

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/hayviral/",
    hover: "hover:text-[#0A66C2]",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/HayViral",
    hover: "hover:text-white",
    label: "X / Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/hayviral/",
    hover: "hover:text-[#E4405F]",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-[#C6FD07] bg-[#00303C] overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#C6FD07]/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-[#C6FD07]/10 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      <div className="relative overflow-hidden border-b border-[#C6FD07]/40 bg-[#C6FD07] py-2.5">
        <motion.div
          className="flex gap-10 min-w-max text-[#00303C] font-bold text-sm uppercase tracking-wider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              Let's Build Something Great
              <span className="text-lg">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative max-w-[1390px] mx-auto px-6 md:px-10 pt-14 pb-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:col-span-5 flex flex-col gap-5"
        >
          <img src={logo} alt="HayViral Logo" className="w-28" />

          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Have a project in mind?
            <br />
            <span className="text-[#C6FD07]">Let's talk about it.</span>
          </h1>

          <p className="text-sm text-gray-300 font-light max-w-xs leading-relaxed">
            Experienced team delivering exceptional digital solutions
            tailored to your brand.
          </p>

          <a
            href="https://calendly.com/ajaykumarchouhan/hayviral-free-discovering-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit bg-[#C6FD07] px-6 py-2.5 rounded-full font-semibold items-center gap-3 shadow-lg text-[#00303C] hover:scale-105 transition"
          >
            Contact Us
            <img className="h-5" src={img5} alt="call-icon" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-3 flex flex-col gap-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6FD07]/90 font-semibold">
            Explore
          </span>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-gray-300 hover:text-[#C6FD07] text-sm font-medium transition-colors"
                >
                  {link.label}
                  <FiArrowUpRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-4 flex flex-col gap-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6FD07]/90 font-semibold">
            Connect
          </span>

          <a
            href="tel:+491623796509"
            className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition w-fit"
          >
            <FiPhone /> +49 162 3796509
          </a>

          <div className="flex gap-4 text-xl mt-1">
            {socials.map(({ icon: Icon, href, hover, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -4, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`border border-[#C6FD07]/50 h-11 w-11 flex justify-center items-center rounded-xl text-white ${hover}`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-[#C6FD07]/30">
        <div className="max-w-[1390px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-3 py-5">
          <span className="text-white text-sm font-semibold">
            HayViral Agency
          </span>
          <span className="text-gray-400 text-xs md:text-sm">
            © 2025 HayViral. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;