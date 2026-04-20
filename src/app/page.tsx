import { CustomCursor } from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      <CustomCursor />
      
      {/* Navigation takes full width of screen, but centers items to max-w-7xl */}
      <Navigation />
      
      <div className="w-full max-w-7xl relative">
        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
        
        <Footer />
      </div>
    </main>
  );
}
