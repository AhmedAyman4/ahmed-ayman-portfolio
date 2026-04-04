"use client";

import { useState, useEffect } from "react";
import { Patrick_Hand } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import { MdEmail } from "react-icons/md";
import { TypingEffect } from "@/components/typing-effect";
import FractalTree from "@/components/FractalTree";
import FadeInSection from "@/components/FadeInSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import "@/styles/components/HeroSection.css";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

interface HeroSectionProps {
  profileImage: string | StaticImageData;
  introComplete?: boolean;
}

export function HeroSection({ profileImage, introComplete = false }: HeroSectionProps) {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (introComplete) {
      const timer = setTimeout(() => setStartTyping(true), 300);
      return () => clearTimeout(timer);
    }
  }, [introComplete]);

  return (
    <section id="hero" className="text-center relative w-full">
      <FadeInSection className="relative z-10">
        <div className="profile-container relative mx-auto mb-4 w-[140px] h-[140px] md:w-[150px] md:h-[150px] group">
          <Avatar className="absolute inset-0 w-full h-full p-[3px] bg-gradient-to-r from-[#4de9d2] via-blue-500 to-purple-600">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
              <AvatarImage asChild src={typeof profileImage === 'string' ? profileImage : profileImage.src}>
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={150}
                  height={150}
                  className="aspect-square object-cover"
                />
              </AvatarImage>
              <AvatarFallback>AA</AvatarFallback>
            </div>
          </Avatar>
          <div className="profile-pulse-overlay" />
        </div>

        <h1 className={`flex items-center justify-center text-5xl lg:text-6xl font-light ${patrickHand.className}`}>
          <span className="dark:text-white text-black">Hi,</span>
          {startTyping && (
            <TypingEffect
              words={[
                { text: "", color: "white" },
                { text: "Ahmed", className: "typing-word-ahmed" },
                { text: "here.", className: "typing-word-here" },
              ]}
              typingSpeed={130}
            />
          )}
        </h1>

        <p className="mt-2 text-3xl lg:text-4xl font-light dark:text-gray-300 text-black">
          I create stuff sometimes.
        </p>

        <p className="mt-2 text-sm sm:text-base dark:text-gray-400 text-black max-w-lg mx-auto px-4 sm:px-0">
          AI Engineer and Data Scientist (IS background) specializing in RAG, NLP, and automation, 
          building end-to-end agents and predictive models. 
          Passionate about bridging the gap between raw data and functional AI products.
        </p>

        <div className="mt-0 flex justify-center">
          <div className="w-32 h-32">
            <FractalTree />
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <a href="mailto:ahmedalhofy42@gmail.com" className="contact-button">
            <MdEmail className="contact-button-icon" />
            Say hi!
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}


