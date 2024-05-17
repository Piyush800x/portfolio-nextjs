import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Design from "@/components/Designs";

export default function Home() {
  return (
    <main className="cursor-none select-none">
      <CustomCursor/>
      <Navbar/>
      <Hero/>
      <Showcase/>
      <Design/>
      Hello World
    </main>
  );
}
