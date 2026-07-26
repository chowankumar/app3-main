import "./App.css";
import { lazy, Suspense } from "react";
 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const ClientStories = lazy(() => import("./components/ClientStories"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const AI = lazy(() => import("./components/Ai_SaaS"));
const Services = lazy(() => import("./components/Services"));
const HowWeWork = lazy(() => import("./components/HowWeWork"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));


export default function HayviralLanding() {
  return (
    <div className="font-sans">
   
      
      <Navbar />
      <Hero />
      <About />
       <ClientStories />
      <WhyChooseUs />
      <AI/>
      <Services />
      <HowWeWork />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
