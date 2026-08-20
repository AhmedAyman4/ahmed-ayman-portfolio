"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Patrick_Hand, Caveat } from "next/font/google";
import { ArrowUpRight, PenTool, UserCheck } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { SectionHeader } from "@/components/SectionHeader";
import "@/styles/components/AboutSection.css";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface AboutSectionProps {
  id?: string;
  className?: string;
}

export function AboutSection({ id = "about", className = "" }: AboutSectionProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId) as HTMLElement;
    if (target) {
      const navbar = document.querySelector("header") || document.querySelector("nav");
      const navbarHeight = navbar?.offsetHeight || 80;
      window.scrollTo({
        top: target.offsetTop - navbarHeight - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id={id} className={`about-section-container py-10 md:py-16 ${className}`}>
      <div className="relative max-w-[780px] mx-auto px-4 sm:px-6">
        
        {/* 3D Tilted Sticky Note (Draggable & Pinnable anywhere on the website) */}
        <div className="block absolute right-2 -top-14 sm:right-5 sm:-top-10 md:right-auto md:-left-24 lg:-left-32 md:top-24 lg:top-28 z-50 pointer-events-none">
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            dragPropagation={false}
            initial={{ rotate: -6 }}
            whileHover={{ rotate: -2, scale: 1.05 }}
            whileDrag={{ rotate: 1, scale: 1.1, zIndex: 1000 }}
            style={{ touchAction: "none" }}
            className="about-sticky-note pointer-events-auto px-2.5 py-2 sm:px-3 sm:py-2.5 w-24 sm:w-28 md:w-32 text-center shadow-lg active:cursor-grabbing z-50 select-none"
          >
            {/* 3D Green Pushpin */}
            <div className="about-pushpin pointer-events-none" aria-hidden="true">
              <div className="about-pushpin-head" />
            </div>
            
            <p className={`${caveat.className} text-lg sm:text-xl font-bold leading-tight pt-0.5 sm:pt-1 text-[#332d16] pointer-events-none select-none`}>
              Ahmed Ayman<br />
              <span className="text-xs sm:text-sm font-semibold opacity-85">Portfolio</span>
            </p>
          </motion.div>
        </div>

        {/* Header Content */}
        <FadeInSection>
          <SectionHeader
            title="About"
            subtitle="Data Science & AI Engineer building end-to-end intelligent systems, RAG pipelines, and automated workflows."
            className="mb-8"
          />
        </FadeInSection>

        {/* Bento Grid: 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
          
          {/* ROW 1: 2 Columns on mobile (Col 1 & 2 on desktop) */}
          {/* Card 1: Sky Blue Minimal Pill Card */}
          <FadeInSection className="col-span-1 md:col-span-1 md:order-1">
            <div className="bento-card card-sky-blue h-full p-3.5 sm:p-4 flex flex-col justify-between min-h-[135px] sm:min-h-[142px] relative overflow-hidden">
              <div className="flex items-center justify-between z-10 relative">
                <div className="w-6 sm:w-8 h-1 rounded-full bg-white/60 dark:bg-white/30" />
                <span className="inline-flex items-center px-1.5 py-[1.5px] sm:px-3 sm:py-1 rounded-full bg-[#fed766] text-[#261f0a] text-[9px] sm:text-xs font-bold shadow-sm hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                  About me
                </span>
              </div>

              {/* Centered Avatar Graphic with Theme-matched Highlight */}
              <div className="about-avatar-wrapper pointer-events-none z-0">
                {/* Ambient dynamic radial glow */}
                <div className="about-avatar-glow" aria-hidden="true" />
                
                <div className="relative w-full h-full">
                  <Image
                    src="/images/avatars/5.avif"
                    alt="Ahmed Ayman"
                    fill
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 200px"
                    className="about-avatar-img"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Card 2: Soft Lilac Current Role Card */}
          <FadeInSection className="col-span-1 md:col-span-1 md:order-2">
            <div className="bento-card card-lilac h-full p-3.5 sm:p-4 flex flex-col justify-between min-h-[135px] sm:min-h-[142px]">
              <div>
                <h3 className="text-sm sm:text-base font-bold leading-snug tracking-tight">
                  Data Science & AI Engineer
                </h3>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-black/10 dark:border-white/10">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-75">
                  CURRENT ROLE
                </span>
                <div className="w-5 h-5 rounded-full bg-white/80 dark:bg-white/20 flex items-center justify-center shadow-inner">
                  <UserCheck className="w-3 h-3 text-purple-900 dark:text-purple-200" />
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* ROW 2 on mobile: Wide Photo (Full width on mobile, Col 3 on desktop) */}
          {/* Card 3: Vintage Portrait Photo */}
          <FadeInSection className="col-span-2 md:col-span-1 md:order-3">
            <div className="bento-card card-vintage-image h-full aspect-[16/10] sm:aspect-[16/9] md:aspect-square relative overflow-hidden">
              <Image
                src="/images/instagram profile vintage image.jpg"
                alt="Ahmed Ayman Vintage"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
                priority
              />
              <div className="vintage-overlay absolute inset-0 z-10" />
              <div className="absolute bottom-2.5 left-2.5 z-20">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Mini Ahmed
                </span>
              </div>
            </div>
          </FadeInSection>

          {/* ROW 3 on mobile: 2 Square Cards side-by-side (Col 1 on desktop Row 2) */}
          {/* Card 4: Sage Green Handwritten Card */}
          <FadeInSection className="col-span-1 md:col-span-1 md:order-4">
            <div className="bento-card card-sage-green h-full aspect-square md:aspect-auto p-3.5 sm:p-4 md:p-5 flex flex-col justify-between md:min-h-[152px]">
              <div>
                <p className={`${patrickHand.className} text-lg sm:text-xl md:text-2xl font-medium leading-snug tracking-wide text-white`}>
                  Welcome to my corner on the internet :)
                </p>
              </div>
              <div>
                <a
                  href="#experience"
                  onClick={(e) => handleScrollTo(e, "#experience")}
                  className="bento-link text-white/95 hover:text-white text-[11px] sm:text-xs"
                >
                  <span>My journey</span>
                  <ArrowUpRight className="w-3.5 h-3.5 bento-link-arrow" />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Card 6: Warm Amber Tech Applications Card (Square Col 2 on mobile, Col 1 on desktop Row 3) */}
          <FadeInSection className="col-span-1 md:col-span-1 md:order-6">
            <div className="bento-card card-amber h-full aspect-square md:aspect-auto p-3 sm:p-4 md:p-5 flex flex-col justify-between md:min-h-[152px]">
              <div>
                <div className="flex items-start justify-between gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold leading-tight sm:leading-snug">
                    Building intelligent AI & data systems
                  </h3>
                  <PenTool className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-75 shrink-0 mt-0.5" strokeWidth={2.2} />
                </div>
                <p className="text-[9.5px] sm:text-[11px] md:text-xs opacity-85 leading-tight sm:leading-relaxed">
                  Specializing in RAG pipelines, NLP, machine learning models, and full-stack integrations that turn raw data into functional solutions.
                </p>
              </div>
              <div className="pt-1 sm:pt-2">
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, "#projects")}
                  className="bento-link text-[#261f0a] dark:text-[#fefce8] text-[10.5px] sm:text-xs"
                >
                  <span>Explore projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5 bento-link-arrow" />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* ROW 4 on mobile: Spotify Embed (Full Width on mobile, Spans 2 Cols on desktop Row 2) */}
          {/* Card 5: Spotify Playlist Embed */}
          <FadeInSection className="col-span-2 md:col-span-2 md:order-5">
            <div className="h-[152px] rounded-[12px] overflow-hidden shadow-sm">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/00n8ndiWnIKT3fxtYDLv2w?utm_source=generator&theme=0&si=09a2bb5bdf244792"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              />
            </div>
          </FadeInSection>

          {/* ROW 5 on mobile: Dark Espresso Learning Card (Full Width on mobile, Spans 2 Cols on desktop Row 3) */}
          {/* Card 7: Dark Espresso Learning Card */}
          <FadeInSection className="col-span-2 md:col-span-2 md:order-7">
            <div className="bento-card card-espresso h-full p-4 sm:p-5 flex flex-col justify-between min-h-[140px] sm:min-h-[152px] relative overflow-hidden">
              <div className="relative z-10 pr-20 sm:pr-28 md:pr-32">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  Constantly Learning
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Driven by continuous growth and curiosity, always exploring emerging technologies, refining my engineering craft, and pushing the boundaries of what I can build.
                </p>
              </div>
              <div className="pt-2 relative z-10">
                <a
                  href="#skills"
                  onClick={(e) => handleScrollTo(e, "#skills")}
                  className="bento-link text-gray-300 hover:text-white text-xs"
                >
                  <span>View technical stack</span>
                  <ArrowUpRight className="w-3.5 h-3.5 bento-link-arrow" />
                </a>
              </div>

              {/* Bottom Right Avatar */}
              <div className="absolute right-1 sm:right-3 -bottom-1 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 pointer-events-none">
                <Image
                  src="/images/avatars/3.avif"
                  alt="Constantly Learning Avatar"
                  fill
                  sizes="(max-width: 640px) 100px, 140px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
