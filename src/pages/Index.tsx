import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CustomizeGuardians from "@/components/CustomizeGuardians";
import WhoItsFor from "@/components/WhoItsFor";
import Benefits from "@/components/Benefits";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <CustomizeGuardians />
        <WhoItsFor />
        <Benefits />
        <Download />
        <Footer />
      </main>
    </>
  );
};

export default Index;
