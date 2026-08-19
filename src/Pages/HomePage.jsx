import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import TechStackTicker from "../Components/TechStackTicker";
import ServicesSection from "../Components/ServicesSection";
import CaseStudiesSection from "../Components/CaseStudiesSection";
import ProcessSection from "../Components/ProcessSection";
import WhyCodentra from "../Components/WhyCodentra";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#09090B] selection:bg-[#A3E635] selection:text-[#09090B]">
      <Navbar />
      <main>
        <Hero />
        <TechStackTicker />
        <ServicesSection />
        <CaseStudiesSection />
        <ProcessSection />
        <WhyCodentra />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
