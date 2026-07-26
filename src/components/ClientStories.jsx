import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import bg from "./test_bg.jpg";
import SlidingLogos from "./Sliding_logos";

function VideoCard({ videoSrc, rotate }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className={`relative w-56 h-80 shadow-black shadow-lg md:w-60 md:h-[400px] overflow-hidden rounded-xl bg-[#0F3F46] ${rotate}`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <button className="absolute top-3 right-3 bg-[#C6FD07] text-black p-2 rounded-full">
        <Play size={18} />
      </button>
    </motion.div>
  );
}

const video1 =
  "https://res.cloudinary.com/dyrncskbs/video/upload/hero_1_v949eu.mp4";
const video2 =
  "https://res.cloudinary.com/dyrncskbs/video/upload/hero_3_pjgr51.mp4";

export default function ClientTestimonials() {
  return (
    <section
      className="relative w-full text-white px-6 md:px-16 py-10 bg-cover bg-center bg-no-repeat overflow-x-hidden scroll-m-0"
      style={{ backgroundImage: `url(${bg})` }}
      id="clientstories"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('/scribbles.png')] bg-cover bg-center" />

      <div className="relative flex flex-col items-center justify-center text-center z-20 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -16, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, rotate: -6 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-30 inline-flex items-center gap-2 bg-[#C6FD07] text-[#00303C] font-bold text-xs sm:text-sm md:text-base px-5 py-2 md:px-7 md:py-2.5 rounded-full border-2 border-dashed border-[#00303C]/30 shadow-lg mb-2 md:mb-0 md:absolute md:top-6 md:left-1/2 md:-translate-x-[220px]"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="flex"
          >
            <Sparkles size={16} />
          </motion.span>
          TESTIMONIALS
        </motion.div>

        <div className="relative">
          <motion.h1
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pointer-events-none select-none absolute inset-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 text-[80px] md:text-[150px] lg:text-[200px] font-bold leading-none tracking-tight text-transparent"
            style={{ WebkitTextStroke: "1.5px #C6FD07" }}
          >
            CLIENTS
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="relative text-[80px] md:text-[150px] lg:text-[200px] font-bold leading-none tracking-tight text-white scale-y-125 sm:scale-y-110 md:scale-y-100"
          >
            CLIENTS
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "backOut", delay: 0.3 }}
            className="absolute -right-2 top-0 md:right-4 md:top-2 text-[#C6FD07] text-3xl md:text-5xl"
          >
            ✦
          </motion.span>
        </div>
      </div>

      <div className="relative bottom-6 md:bottom-0 z-10 max-w-[1340px] mx-auto">
        <div className="block lg:hidden text-center mb-10 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-xl md:text-3xl font-bold leading-tight"
          >
            Real Stories. Real Results.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
            className="text-gray-300 text-xs leading-tight"
          >
            Hear how our clients transformed their businesses with HayViral's
            creative strategies and intelligent storytelling.
          </motion.p>

          <div className="mt-8 flex items-center justify-center">
            <SlidingLogos />
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full justify-center items-center lg:hidden">
          <VideoCard videoSrc={video1} />
          <VideoCard videoSrc={video2} />
        </div>

        <div className="w-full max-w-[1440px] mx-auto flex justify-center items-center">
          <div className="hidden lg:grid lg:grid-cols-3 gap-x-16 max-w-[1340px] justify-center items-center gap-28">
            <div className="flex justify-center items-center w-140 lg:mr-16">
              <div className="z-10 pt-2">
                <VideoCard videoSrc={video1} rotate="lg:-rotate-4" />
              </div>
              <VideoCard videoSrc={video2} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="lg:col-span-2 bg-[#0B3C45]/60 backdrop-xl border border-[#C6FD07] p-10 rounded-xl max-w-lg mx-auto relative left-20"
            >
              <div className="inline-block text-xs font-semibold border border-[#C6FD07] text-[#C6FD07] px-4 py-1 rounded-full mb-4">
                Clients Testimonials
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-13">
                Real Stories. Real{" "}
                <span className="text-[#C6FD07]">Results.</span>
              </h2>

              <p className="text-gray-300 text-xl leading-tight max-w-2xl">
                Hear how our clients transformed their businesses with HayViral's
                creative strategies and intelligent storytelling.
              </p>

              <div className="mt-10">
                <SlidingLogos />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}