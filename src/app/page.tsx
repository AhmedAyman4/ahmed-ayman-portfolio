"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import { ProjectsComponent } from "@/components/ProjectsComponent";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import Me1 from "../assets/me.png";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    sectionsRef.current = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    });
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        links={[
          { href: "#", label: "Home" },
          { href: "#projects", label: "Projects" },
          { href: "#experience", label: "Experience" },
          { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <main className="container mx-auto py-10 flex-grow px-4 md:px-8 lg:px-24 xl:px-28">
        {/* Hero Section */}
        <div ref={(el) => el && sectionsRef.current.push(el)}>
          <HeroSection profileImage={Me1} />
        </div>

        {/* Projects Component */}
        <div ref={(el) => el && sectionsRef.current.push(el)}>
          <ProjectsComponent />
        </div>

        {/* Experience Timeline */}
        <section
          className="mb-16 fade-in-section"
          ref={(el) => el && sectionsRef.current.push(el)}
        >
          <ExperienceTimeline />
        </section>

        {/* Skills Section */}
        <section
          className="mb-16 fade-in-section"
          ref={(el) => el && sectionsRef.current.push(el)}
        >
          <SkillsSection />
        </section>

        {/* Contact Section */}
        <section
          className="mb-16 fade-in-section"
          ref={(el) => el && sectionsRef.current.push(el)}
        >
          <ContactSection />
        </section>
      </main>
      <footer className="bg-background border-t py-6 text-center text-sm text-muted-foreground">
        <p className="mt-2">
          Built and designed by Ahmed Ayman.
          <br />
          All rights reserved. ©
        </p>
      </footer>
    </div>
  );
}
