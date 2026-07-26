// SlidingLogos.jsx
import { motion } from "framer-motion";

// IMPORT ALL LOGOS ONCE
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

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30
];

export default function SlidingLogos() {
  return (
    <div className="overflow-hidden w-full flex justify-center">
      <motion.div
        className="flex gap-10 min-w-max mx-auto"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img key={i} src={logo} alt="Client Logo" className="h-6 w-auto" />
        ))}
      </motion.div>
    </div>
  );
}
