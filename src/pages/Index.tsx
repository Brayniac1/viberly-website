import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import Benefits from "@/components/Benefits";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <Benefits />
      <Download />
      <Footer />
    </main>
  );
};

export default Index;
