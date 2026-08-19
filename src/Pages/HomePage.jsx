import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStackTicker from "../components/TechStackTicker";
import ServicesSection from "../components/ServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ProcessSection from "../components/ProcessSection";
import WhyCodentra from "../components/WhyCodentra";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-[#A3E635] selection:text-zinc-950">
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
