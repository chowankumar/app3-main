import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import img1 from "./calendly.png";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const serviceRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nameRef.current?.value.trim() ||
      !emailRef.current?.value.trim() ||
      !phoneRef.current?.value.trim() ||
      !serviceRef.current?.value ||
      !messageRef.current?.value.trim()
    ) {
      nameRef.current?.focus();
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_iomgprj",
        "template_upwjzbk",
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          service: serviceRef.current.value,
          message: messageRef.current.value,
        },
        "Jz9bj5v9gJJlcavUj"
      )
      .then(() => {
        setLoading(false);
        setSent(true);

        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        serviceRef.current.value = "";
        messageRef.current.value = "";

        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message. Please try again.");
      });
  };

  const inputClass =
    "p-3 rounded-lg bg-white/5 border text-sm border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C6FD07] focus:bg-white/10 transition-colors";

  return (
    <section
      id="contact"
      className="relative scroll-mt-10 bg-[#00303C] text-white py-24 md:py-28 px-6 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C6FD07]/10 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#C6FD07]/10 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 border border-[#C6FD07] text-[#C6FD07] text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
              Get In Touch
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Grow Your{" "}
              <span className="text-[#C6FD07]">Business Online?</span>
            </h1>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We help brands and startups build a powerful online presence
              through smart design, scalable web solutions, and AI-driven
              automation. From idea to execution, we turn your vision into
              measurable growth.
            </p>

            <a
              href="https://calendly.com/ajaykumarchouhan/hayviral-free-discovering-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-[#00303C] mt-4 bg-[#C6FD07] px-5 py-2.5 rounded-full font-semibold items-center gap-3 shadow-lg text-[#00303C] hover:scale-[1.02] transition text-sm w-fit"
            >
              Book a Free Discovery Call
              <img className="h-5" src={img1} alt="call-icon" />
            </a>

            <div className="flex gap-10 pt-8 border-t border-white/10 mt-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#C6FD07]">
                  24h
                </h3>
                <p className="text-xs text-white/60 uppercase tracking-wide">
                  Response Time
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#C6FD07]">
                  100%
                </h3>
                <p className="text-xs text-white/60 uppercase tracking-wide">
                  Free Consultation
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            onSubmit={handleSubmit}
            className="relative border border-[#C6FD07]/60 bg-white/[0.03] backdrop-blur-sm rounded-2xl px-6 py-6 h-full flex flex-col justify-between shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                ref={nameRef}
                type="text"
                placeholder="Your Name*"
                className={inputClass}
              />

              <input
                ref={emailRef}
                type="email"
                placeholder="Your Email*"
                className={inputClass}
              />

              <input
                ref={phoneRef}
                type="tel"
                placeholder="Your Phone*"
                className={inputClass}
              />

              <select
                ref={serviceRef}
                defaultValue=""
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled className="text-black">
                  Automation*
                </option>
                <option className="text-black">AI SaaS Products</option>
                <option className="text-black">Branding & Graphic Design</option>
                <option className="text-black">Marketing</option>
              </select>

              <textarea
                ref={messageRef}
                placeholder="Your Message"
                className={`md:col-span-2 h-36 resize-none ${inputClass}`}
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 bg-[#C6FD07] text-[#00303C] py-3 rounded-full font-semibold transition text-base disabled:opacity-70"
              >
                {loading ? "Sending..." : "Let's Talk"}
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:col-span-2 text-green-400 text-center text-sm"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}