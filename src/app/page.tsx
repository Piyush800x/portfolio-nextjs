import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Design from "@/components/Designs";
import ProjectSection from "@/components/ProjectsSection";
import Statistics from "@/components/Statistics";
import CTA from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="cursor-none select-none">
      <CustomCursor/>
      <Navbar/>
      <Hero/>
      <Showcase/>
      <Design/>
      <ProjectSection/>
      <Statistics/>
      <CTA/>
      <Footer/>
    </main>
  );
}
