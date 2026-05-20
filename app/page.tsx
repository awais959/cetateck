import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import CloudEcosystem from "@/components/sections/CloudEcosystem";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <CloudEcosystem />
        <About />
        <Process />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
