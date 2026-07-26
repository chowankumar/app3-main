import logo from "./LogoW.png";
import insta from "./insta.png";
import arrow from "./Arrow.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#00303C] text-white py-12 md:py-16 xl:py-20 px-4 sm:px-6 md:px-12 xl:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-14 xl:gap-16 items-center">

        <div className="flex flex-col gap-10 md:gap-12">

          <div className="flex items-center gap-5 sm:gap-6">
            <span className="h-px w-8 sm:w-12 bg-[#C6FD07]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C6FD07]/90 font-semibold">
              Who we are
            </span>
          </div>

          <div className="flex items-center justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-outfit font-extrabold text-[#C6FD07] leading-none whitespace-nowrap">
              About Us
            </h2>
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-[#C6FD07] flex items-center justify-center flex-shrink-0">
              <img
                src={arrow}
                alt="Arrow"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pb-8 border-b border-white/10">
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#C6FD07] flex items-center justify-center flex-shrink-0">
              <img
                src={logo}
                alt="Founder"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-base sm:text-lg">
                Ajay Chauhan
              </h4>
              <p className="flex items-center gap-1.5 text-white/70 text-xs sm:text-sm">
                CEO &amp; Founder
                <a
                  href="https://www.instagram.com/ajaychauhan.arc?igsh=OXZqOTVnZXFjMzdp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <img
                    src={insta}
                    alt="Instagram"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 hover:scale-110 transition-transform"
                  />
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-8 sm:gap-10 xl:gap-12">
            <div>
              <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#C6FD07]">
                145+
              </h3>
              <p className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-white/70">
                Projects
              </p>
            </div>
            <span className="w-px bg-white/10" />
            <div>
              <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#C6FD07]">
                76+
              </h3>
              <p className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-white/70">
                Clients
              </p>
            </div>
            <span className="w-px bg-white/10" />
            <div>
              <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#C6FD07]">
                3+
              </h3>
              <p className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-white/70 whitespace-nowrap">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        <span className="h-px w-full xl:hidden bg-[#C6FD07]/40" />

        <div className="flex flex-col gap-4 md:gap-5">
          <h2 className="text-2xl sm:text-3xl xl:text-3xl font-extrabold leading-snug">
            Helping Businesses Scale with AI &amp; Automation
          </h2>
          <h3 className="text-base sm:text-lg xl:text-xl font-medium text-gray-200 leading-snug">
            We build intelligent systems that don't just look good — they
            work smarter for your business.
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            At HayViral, we help businesses simplify operations, improve
            customer experiences, and scale efficiently using AI-driven
            solutions. We focus on building automation-first platforms that
            reduce manual effort, unify workflows, and give businesses more
            control over their data and processes.
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Instead of disconnected tools and repetitive tasks, we design
            systems that centralize communication, automate responses, and
            provide real-time insights. Our goal is simple: help businesses
            operate smarter, save time, reduce costs, and grow sustainably in
            a digital-first world.
          </p>
        </div>
      </div>
    </section>
  );
}