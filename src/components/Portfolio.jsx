import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { DynamicFrameLayout } from "./dynamic-frame-layout";
import bg from "./test_bg.jpg";

const demoFrames = [
  { id: 1, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Digital_Marketing_voyuzg.mp4" },
  { id: 2, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Branding_1_erq2ce.mp4" },
  { id: 3, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Intro_weodxg.mp4" },
  { id: 4, video: "https://res.cloudinary.com/dyrncskbs/video/upload/ui_design_2_ng7jo2.mp4" },
  { id: 5, video: "https://res.cloudinary.com/dyrncskbs/video/upload/Content_Creation_wi0nf4.mp4" },
];

const sliderImages = [
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_1_depynw.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_2_nv40lq.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-10_ry5unb.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-11_g7elu5.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-5_n1o4lt.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/9_o2dyyc.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-6_vjmreu.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/7_jzambj.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_3_vpsus3.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-3_lej6iw.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-2_btmuin.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Untitled-1_zakpty.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/6_uvgw1g.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_4_upl12c.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/Brand_style_5_xid6we.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/8_cxffvu.jpg",
  "https://res.cloudinary.com/dyrncskbs/image/upload/10_hgg2zu.jpg",
];

export default function DemoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openVideo, setOpenVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleVideoClick = (video) => {
    setOpenVideo(video);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
    }, 100);
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) setOpenVideo(null);
  };

  const desktopFrames = demoFrames.map((f) => ({
    ...f,
    onClick: () => handleVideoClick(f.video),
  }));

  return (
    <section className="scroll-m-1" id="portfolio">
      <div
        className="w-full px-5 md:px-10 py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative flex flex-col items-center justify-center text-center z-20 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -16, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-30 inline-flex items-center gap-2 bg-[#C6FD07] text-[#00303C] font-bold text-xs sm:text-sm md:text-base px-5 py-2 md:px-7 md:py-2.5 rounded-full border-2 border-dashed border-[#00303C]/30 shadow-lg mb-2 md:mb-0 md:absolute md:top-6 md:left-1/2 md:-translate-x-[240px]"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="flex"
            >
              <Sparkles size={16} />
            </motion.span>
            OUR WORK
          </motion.div>

          <div className="relative">
            <motion.h1
              aria-hidden="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="pointer-events-none select-none absolute inset-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 text-[54px] md:text-[150px] lg:text-[200px] xl:text-[225px] font-bold leading-none tracking-tight text-transparent"
              style={{ WebkitTextStroke: "1.5px #C6FD07" }}
            >
              PORTFOLIO
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="relative text-[54px] text-white md:text-[150px] lg:text-[200px] xl:text-[225px] font-bold leading-none tracking-tight scale-y-125 sm:scale-y-110 md:scale-y-100"
            >
              PORTFOLIO
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            className="block md:block text-center mt-6 px-5"
          >
            <h2 className="text-lg text-center w-70 md:w-200 md:text-4xl font-bold text-white">
              Proof That Our Work Delivers Results
            </h2>
            <p className="text-gray-300 md:w-200 text-sm md:text-lg">
              Every project we take on is focused on solving real problems and
              creating measurable impact. Our work helps businesses improve
              visibility, streamline operations, and build stronger
              connections with their customers through thoughtful design,
              automation, and strategy.
            </p>
          </motion.div>
        </div>

        <div className="rounded-2xl overflow-hidden p-3 md:p-5">
          <div className="max-w-[1280px] mx-auto w-full">
            <div className="hidden md:block w-full relative max-h-[900px] h-auto">
              <DynamicFrameLayout
                frames={desktopFrames}
                sliderImages={sliderImages}
                hoverSize={6}
                gapSize={8}
              />
            </div>

            <div className="block md:hidden relative flex-col space-y-4">
              {demoFrames.map((frame) => (
                <div key={frame.id} onClick={() => handleVideoClick(frame.video)}>
                  <video
                    src={frame.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full min-h-[50px] relative object-cover rounded-xl cursor-pointer"
                  />
                </div>
              ))}

              <div className="w-full h-50 rounded-xl overflow-hidden border border-gray-700">
                <DynamicFrameLayout.MobileSlider images={sliderImages} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {openVideo && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 rounded-2xl border-[6px] shadow-[0_0_25px_#FB6B03] pointer-events-none"></div>
            <video
              ref={videoRef}
              src={openVideo}
              controls
              autoPlay
              className="relative max-h-[85vh] max-w-[85vw] rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}