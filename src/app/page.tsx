import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <main className="cursor-none">
      <CustomCursor/>
      <Navbar/>
      <Hero/>
      <Showcase/>
      Hello World
    </main>
  );
}
