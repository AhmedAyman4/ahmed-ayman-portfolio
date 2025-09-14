"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionSeparatorProps {
  variant?: "gradient" | "dots" | "wave" | "geometric";
  className?: string;
}

export function SectionSeparator({
  variant = "gradient",
  className = "",
}: SectionSeparatorProps) {
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = separatorRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "center",
      },
      {
        opacity: 1,
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const variants = {
    gradient: (
      <div className="relative w-full h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 animate-pulse"></div>
      </div>
    ),
    dots: (
      <div className="flex justify-center items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <div className="w-3 h-3 rounded-full bg-accent"></div>
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
        <div className="w-3 h-3 rounded-full bg-accent"></div>
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      </div>
    ),
    wave: (
      <div className="relative w-full h-6 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full"
        >
          <path
            d="M0,60 Q300,0 600,60 T1200,60 V120 H0 Z"
            fill="currentColor"
            className="text-primary/20"
          />
          <path
            d="M0,80 Q300,20 600,80 T1200,80 V120 H0 Z"
            fill="currentColor"
            className="text-accent/30"
          />
        </svg>
      </div>
    ),
    geometric: (
      <div className="flex justify-center items-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary"></div>
          <div className="w-3 h-3 border-2 border-primary rotate-45 bg-transparent"></div>
          <div className="w-6 h-6 border-2 border-accent rounded-full bg-transparent flex items-center justify-center">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </div>
          <div className="w-3 h-3 border-2 border-primary rotate-45 bg-transparent"></div>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary"></div>
        </div>
      </div>
    ),
  };

  return (
    <div
      ref={separatorRef}
      className={`my-6 md:my-8 lg:my-10 flex justify-center items-center max-w-5xl mx-auto ${className}`}
    >
      {variants[variant] || variants.gradient}
    </div>
  );
}

export function AnimatedSeparator({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = container.querySelectorAll(".particle");

    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -20,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2,
      });
    });

    gsap.fromTo(
      container.querySelector(".main-line"),
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative my-6 md:my-8 lg:my-10 h-8 flex justify-center items-center max-w-5xl mx-auto ${className}`}
    >
      <div className="main-line w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="particle absolute w-1 h-1 bg-primary rounded-full -translate-x-20 opacity-60"></div>
        <div className="particle absolute w-1.5 h-1.5 bg-accent rounded-full -translate-x-10 opacity-80"></div>
        <div className="particle absolute w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-90"></div>
        <div className="particle absolute w-1.5 h-1.5 bg-accent rounded-full translate-x-10 opacity-80"></div>
        <div className="particle absolute w-1 h-1 bg-primary rounded-full translate-x-20 opacity-60"></div>
      </div>
    </div>
  );
}
