"use client";

// React imports
import { useEffect, useRef } from "react";

// Third-party imports
import { gsap } from "gsap";

// Icon imports
import { Mail, Github, Linkedin } from "lucide-react";

// Component imports
import { SectionHeader } from "@/components/SectionHeader";

// Styles
import "@/styles/components/ContactSection.css";

// Component definition
export function ContactSection() {
  // Refs for animation targets
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const emailRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  // Animation setup
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.from(paragraphRef.current, { opacity: 0, y: 20 }, "-=0.5").from(
      emailRef.current,
      { opacity: 0, scale: 0.8 },
      "-=0.4"
    );

    if (iconsRef.current?.children) {
      tl.from(
        iconsRef.current.children,
        {
          opacity: 0,
          y: 10,
          stagger: 0.2,
        },
        "-=0.3"
      );
    }
  }, []);

  // Contact links data
  const contactLinks = [
    {
      href: "mailto:ahmedalhofy42@gmail.com",
      icon: Mail,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/ahmed-alhofy/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/AhmedAyman4",
      icon: Github,
      label: "GitHub",
    },
  ];

  // Render
  return (
    <div id="contact" className="text-center">
      {/* Section Heading */}
      <SectionHeader label="Get In Touch" title="Contact" className="mb-4" />

      {/* Description */}
      <p ref={paragraphRef} className="dark:text-gray-300 text-gray-600 mb-4">
        I'm eager to join a data-driven team where I can apply my passion for
        AI, machine learning, and problem-solving to create meaningful impact.
        <br /> Got a project in mind or looking to collaborate? Let's connect!
      </p>

      {/* Email Display */}
      <p ref={emailRef} className="dark:text-white text-black mb-4">
        ahmedalhofy42@gmail.com
      </p>

      {/* Social Links */}
      <div
        ref={iconsRef}
        className="flex justify-center items-center space-x-4"
      >
        {contactLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
            aria-label={label}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
