import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CustomizeGuardians from "@/components/CustomizeGuardians";
import Features from "@/components/Features";
import WhoItsFor from "@/components/WhoItsFor";
import Benefits from "@/components/Benefits";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component loads
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <CustomizeGuardians />
        <Features />
        <WhoItsFor />
        <Benefits />
        <Download />
        <Footer />
      </main>
    </>
  );
};

export default Index;
