import React, { useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import OrbitSlider from "@/components/sections/OrbitSlider";
import Projects from "@/components/sections/Projects";
import InProgress from "@/components/sections/InProgress";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    // Force dark mode on root for this portfolio
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="orbit" className="py-24 relative z-10">
          <OrbitSlider />
        </section>
        
        <section id="projects" className="py-24 relative z-10 bg-background/50 backdrop-blur-md">
          <Projects />
        </section>
        
        <section id="in-progress" className="py-24 relative z-10">
          <InProgress />
        </section>
      </main>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
