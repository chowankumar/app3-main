import { motion } from "framer-motion";
import img from "./sci.png";
import img1 from "./sci1.png";
import img2 from "./sci3.png";
import img3 from "./sci4.png";
import tick from "./tick.png";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We learn about your business, goals, and audience.",
    icon: img,
  },
  {
    number: "02",
    title: "Plan",
    desc: "We craft a digital strategy tailored to your needs.",
    icon: img1,
  },
  {
    number: "03",
    title: "Create",
    desc: "Our team designs, builds, and launches your campaigns.",
    icon: img2,
  },
  {
    number: "04",
    title: "Grow",
    desc: "We track, optimize, and scale what works.",
    icon: img3,
  },
];

const numberShadow = {
  textShadow:
    "1px 1px 0 #0A2530, 2px 2px 0 #0A2530, 3px 3px 0 #0A2530, 4px 4px 8px rgba(0,0,0,0.45)",
};

const STEP_DELAY = 0.35;

export default function HowWeWork() {
  return (
    <section
      id="howwework"
      className="bg-[#00303C] flex flex-col items-center"
    >
      <div className="w-full flex justify-center items-center flex-col space-y-3 pt-16 md:pt-24 px-6 md:px-10">
        <span className="inline-block px-4 py-1 font-outfit border border-[#C6FF00] text-[#C6FF00] rounded-full font-semibold">
          How We Work
        </span>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white text-center">
            A Clear Process Built for Results
          </h1>
          <p className="text-center text-sm p-2.5 font-extralight leading-tight opacity-70 text-white">
            Simple, transparent, and focused on outcomes.
          </p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full space-y-6 px-6 py-10">
        {steps.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
            className="flex gap-4 border border-[#C6FF00] bg-[#00252C]/50 backdrop-blur-xl p-5 rounded-2xl"
          >
            <img src={tick} className="w-6 h-6 mt-1 flex-shrink-0" alt="tick" />
            <div className="space-y-1">
              <h4 className="text-[#CFFF00] font-bold text-base">
                {i + 1}. {item.title}
              </h4>
              <p className="text-gray-300 text-sm leading-tight">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= DESKTOP / TABLET — STAGGERED 3D REVEAL ================= */}
      <div className="hidden md:block w-full py-16 md:py-20 px-6 md:px-10">
        <div
          className="w-full max-w-[1250px] mx-auto flex items-start justify-center"
          style={{ perspective: "1600px" }}
        >
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start flex-1">
              <motion.div
                initial={{ opacity: 0, y: 60, rotateY: -40 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * STEP_DELAY,
                }}
                whileHover={{
                  rotateY: 10,
                  rotateX: -6,
                  scale: 1.06,
                  z: 40,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative flex flex-col items-center text-center bg-[#00252C]/60 border border-[#C6FD07]/30 rounded-2xl px-4 py-8 flex-1 mx-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] cursor-default"
              >
                <img
                  src={step.icon}
                  alt=""
                  className="w-14 h-auto lg:w-20 mb-3"
                  style={{ transform: "translateZ(30px)" }}
                />

                <h1
                  className="font-extrabold text-[#C6FD07] text-4xl lg:text-5xl leading-none"
                  style={{ ...numberShadow, transform: "translateZ(20px)" }}
                >
                  {step.number}
                </h1>

                <h3 className="font-bold text-white text-xl lg:text-2xl mt-1">
                  {step.title}
                </h3>

                <p className="text-white/70 leading-tight text-sm font-extralight mt-2 max-w-[10rem]">
                  {step.desc}
                </p>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center h-40 -mx-1">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: i * STEP_DELAY + STEP_DELAY * 0.6,
                    }}
                    style={{ transformOrigin: "left" }}
                    className="w-10 h-[2px] bg-gradient-to-r from-[#C6FD07] to-[#C6FD07]/10 rounded-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}