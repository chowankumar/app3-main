import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "./calendly.png";

import logo1 from "./Client Logos/1.png";
import logo2 from "./Client Logos/2.png";
import logo3 from "./Client Logos/3.png";
import logo4 from "./Client Logos/4.png";
import logo5 from "./Client Logos/5.png";
import logo6 from "./Client Logos/6.png";
import logo7 from "./Client Logos/7.png";
import logo8 from "./Client Logos/8.png";
import logo9 from "./Client Logos/9.png";
import logo10 from "./Client Logos/10.png";
import logo11 from "./Client Logos/11.png";
import logo12 from "./Client Logos/12.png";
import logo13 from "./Client Logos/13.png";
import logo14 from "./Client Logos/14.png";
import logo15 from "./Client Logos/15.png";
import logo16 from "./Client Logos/16.png";
import logo17 from "./Client Logos/17.png";
import logo18 from "./Client Logos/18.png";
import logo19 from "./Client Logos/19.png";
import logo20 from "./Client Logos/20.png";
import logo21 from "./Client Logos/21.png";
import logo22 from "./Client Logos/22.png";
import logo23 from "./Client Logos/23.png";
import logo24 from "./Client Logos/24.png";
import logo25 from "./Client Logos/25.png";
import logo26 from "./Client Logos/26.png";
import logo27 from "./Client Logos/27.png";
import logo28 from "./Client Logos/28.png";
import logo29 from "./Client Logos/29.png";
import logo30 from "./Client Logos/30.png";

import VideoCard from "./Vedio.jsx";

const video3 =
  "https://res.cloudinary.com/dyrncskbs/video/upload/hero_2_qrdenq.mp4";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-150 flex items-center pt-28 px-6 md:px-12 text-[#C6FD07] bg-[#00303C] overflow-hidden"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C6FD07]/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#C6FD07]/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />

        <div className="relative w-full max-w-306 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center md:justify-start">
              <span className="inline-block px-6 py-1 mb-4 rounded-full text-sm font-semibold border border-[#C6FD07]">
                HayViral AI SaaS
              </span>
            </div>

            <h1 className="text-center md:text-left text-3xl md:text-5xl leading-tight font-outfit font-bold md:max-w-xl">
              5x Your Growth with Smarter Automation
            </h1>

            <p className="mt-4 text-center md:text-left text-white font-outfit text-sm md:text-base md:max-w-md leading-relaxed">
              AI-powered solutions built for modern businesses helping you
              reduce manual work, improve customer interactions, and grow
              without complexity or high costs.
            </p>

            <div className="flex flex-col gap-8 items-center md:items-start mt-6">
              <a
                href="https://calendly.com/ajaykumarchouhan/hayviral-free-discovering-call"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#00303C] bg-[#C6FD07] px-6 py-3 rounded-full font-semibold flex flex-row justify-center items-center gap-3 shadow-lg text-[#00303C] hover:scale-[1.02] transition text-sm"
              >
                Book a Free Discovery Call
                <img className="h-5" src={img1} alt="call-icon" />
              </a>
            </div>
          </motion.div>

          <div className="w-full rounded-3xl overflow-hidden border border-[#C6FD07]/30 shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-[500px] h-[400px] rounded-3xl object-cover"
            >
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <div className="overflow-hidden w-screen md:w-full bg-transparent p-1.5">
        <motion.div
          className="flex items-center gap-14 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-10 w-24 shrink-0 bg-transparent"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="max-h-full max-w-full object-contain opacity-80"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}