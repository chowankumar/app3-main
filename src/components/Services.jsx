import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "./Servicesbg.webp";
import Squares from "./AI_Component";


// Cloudinary videos
const videos = {
  branding: "https://res.cloudinary.com/dyrncskbs/video/upload/Branding_wcpedv.mp4",
  uiDesign: "https://res.cloudinary.com/dyrncskbs/video/upload/v1762100907/SEO_brukmq.mp4",
  digitalMarketing: "https://res.cloudinary.com/dyrncskbs/video/upload/Digital_Marketing_uvh3ke.mp4",
  webDevelopment: "https://res.cloudinary.com/dyrncskbs/video/upload/ui_design_xczut2.mp4",
};

// Services data
const servicesData = {
  automation: {
    title: "Automation",
    video: videos.webDevelopment,
    tabs: [
      {
        name: "Business Process Automation",
        heading: "Eliminate Repetitive Work",
        desc: "We design automation systems that remove repetitive tasks from daily operations. From customer inquiries and order flows to internal processes and follow-ups, our automation helps businesses save time, reduce workload, and operate more efficiently."
      },
      {
        name: "Workflow & Channel Integration",
        heading: "One Unified System",
        desc: "We connect websites, WhatsApp, social platforms, and internal tools into a single automated workflow. This ensures faster responses, better coordination, and a seamless experience for both customers and teams."
      },
      {
        name: "Smart Reporting & Insights",
        heading: "Data That Works for You",
        desc: "Our automation systems generate real-time reports and insights automatically. Businesses gain clear visibility into operations, customer behavior, and performance trends to support smarter decision-making."
      }
    ]
  },

  aiSaaS: {
    title: "AI SaaS Products",
    video: videos.uiDesign,
    tabs: [
      {
        name: "AI Chatbot Solutions",
        heading: "Smart, Context-Aware Conversations",
        desc: "Our AI chatbots handle customer conversations across multiple channels using natural, context-aware interactions. They manage inquiries, bookings, support, and basic transactions while reducing manual workload."
      },
      {
        name: "AI-Powered Business Tools",
        heading: "Intelligent Systems for Growth",
        desc: "We build AI-enabled tools that centralize customer interactions, workflows, and data. Designed to adapt across industries, these tools evolve as your business grows."
      },
      {
        name: "Scalable SaaS Infrastructure",
        heading: "Built for the Long Term",
        desc: "Our AI SaaS products are designed for scalability. Start with core features and expand over time without rebuilding systems—ensuring flexibility, cost efficiency, and future readiness."
      }
    ]
  },

  branding: {
    title: "Branding & Graphic Design",
    video: videos.branding,
    tabs: [
      {
        name: "Brand Identity Design",
        heading: "Build Recognition & Trust",
        desc: "We create cohesive brand identities including logos, color systems, typography, and brand guidelines. Every element is crafted to communicate clarity, credibility, and consistency across all platforms."
      },
      {
        name: "Graphic Design",
        heading: "Design That Supports Growth",
        desc: "From social media creatives and marketing visuals to print materials and presentations, we design assets that align with your brand and strengthen recognition."
      },
      {
        name: "Visual Consistency",
        heading: "Consistency Across Every Touchpoint",
        desc: "We establish clear visual guidelines so your brand maintains a professional, consistent look across all platforms as it grows."
      }
    ]
  },

  digitalMarketing: {
    title: "Marketing",
    video: videos.digitalMarketing,
    tabs: [
      {
        name: "Content Creation",
        heading: "Content That Drives Action",
        desc: "We create strategic content—from short-form videos to branded visuals—designed to capture attention, communicate value, and align with audience behavior."
      },
      {
        name: "Paid Advertising",
        heading: "Performance-Driven Growth",
        desc: "We run AI-assisted UGC and ad campaigns optimized for conversion. Campaigns are tested, refined, and scaled to maximize results while controlling ad spend."
      },
      {
        name: "Lead Generation Systems",
        heading: "From Interest to Conversion",
        desc: "We build complete lead generation systems using targeted campaigns, conversion-focused landing pages, and automated follow-ups—delivering consistent, qualified leads."
      }
    ]
  }
};

export default function ServicesPage() {
  const [activeTabs, setActiveTabs] = useState({
  automation: 0,
  aiSaaS: 0,
  branding: 0,
  digitalMarketing: 0
});



  const handleTabClick = (serviceKey, index) => {
    setActiveTabs((prev) => ({ ...prev, [serviceKey]: index }));
  };

  return (
    <section
      id="services"
      className="w-full text-white scroll-m-6"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      
      <div className="relative">

        {/* Title / Intro */}
        <div className="text-center pt-14 px-6 md:px-0">
          <h1 className="inline-block border border-[#C6FD07] font-semibold text-[#C6FD07] rounded-2xl mb-4 px-4 py-1">
            Services
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit leading-tight">
         Solutions Designed for Automation, AI & Growth
          </h2>
          <p className="mt-1 text-base sm:text-lg md:text-xl opacity-70 font-outfit text-[#c2c2c2] max-w-xl mx-auto leading-tight font-extralight">
          We help businesses streamline operations, improve customer experiences, and scale using automation, AI-powered products, and performance-driven marketing.

          </p>
        </div>

        {/* Services Sections */}
        <div className="px-6 md:px-8 lg:px-0  pb-13 max-w-[1160px] mx-auto"> {/* <-- max width for large screens */}

          {Object.entries(servicesData).map(([key, service]) => {
            const activeContent = service.tabs[activeTabs[key]];
            return (
              
              <section key={key} className="scroll-mt-55 relative pt-10 text-white">
                
                <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#00303C] border border-[#C6FD07] rounded-2xl py-3 gap-6 md:gap-10">
                  
                  {/* Left Side */}
                  <div className="px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-5">{service.title}</h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3 mb-5 text-xs">
                      {service.tabs.map((tab, index) => (
                        <button
                          key={index}
                          onClick={() => handleTabClick(key, index)}
                          className={`md:px-6 px-4 md:py-2 py-1 rounded-full font-medium transition-all ${
                            activeTabs[key] === index
                              ? "bg-[#C6FD07] text-[#00303C]"
                              : "bg-purple-200 text-[#00303C] hover:bg-purple-300"
                          }`}
                        >
                          {tab.name}
                        </button>
                      ))}
                    </div>

                    {/* Heading & Description */}
                    <motion.div
                      key={activeContent.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {activeContent.heading && (
                        <h3 className="text-xl md:text-2xl font-semibold mb-2 leading-5">
                          {activeContent.heading}
                        </h3>
                      )}
                      <p className="text-gray-200 text-base leading-tight mb-4">
                        {activeContent.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Side — Video */}
                  <motion.div
                    key={service.video}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden shadow-lg px-4"
                  >
                    <video
                      src={service.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full aspect-video object-cover rounded-sm"
                    ></video>
                  </motion.div>

                </div>
              </section>
            );
          })}

        </div>
      </div>
    </section>
  );
}
