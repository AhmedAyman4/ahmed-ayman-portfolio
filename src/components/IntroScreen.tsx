"use client";

import React, { useState, useEffect } from "react";
import { TypingEffect } from "./typing-effect";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [showTyping, setShowTyping] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    // Start typing animation after a brief delay
    const timer = setTimeout(() => {
      setShowTyping(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (showTyping) {
      // After typing completes, wait a moment then fade out
      const timer = setTimeout(() => {
        setFadeOut(true);
        // Complete intro after fade animation
        setTimeout(() => {
          onComplete();
        }, 600);
      }, 2800); // Moderate reduction from original 3500ms

      return () => clearTimeout(timer);
    }
  }, [showTyping, onComplete]);
  const helloWords = [
    {
      text: "Hello",
      color: "#ffffff",
      style: {
        fontFamily: "var(--font-dancing-script), 'Dancing Script', cursive",
        textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
        fontWeight: "500",
      },
    },
  ];
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-800 ${
        fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {" "}
      {/* Clean Apple-like background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Single elegant orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-white/5 to-gray-300/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-gray-200/5 to-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      {/* Hello typing effect with handwritten styling */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Subtle backdrop for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/30 to-transparent blur-xl rounded-full"></div>{" "}
        <div className="relative mb-8">
          {showTyping && (
            <div className="text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-light tracking-normal leading-none">
              <div
                className="text-white drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 60px rgba(255, 255, 255, 0.2))",
                }}
              >
                {" "}
                <TypingEffect words={helloWords} typingSpeed={150} />
              </div>
              {/* Soft glow effect */}
              <div className="absolute inset-0 text-white blur-sm opacity-30 -z-10"></div>
            </div>
          )}
        </div>{" "}
        {/* Enhanced subtitle with Apple-like simplicity */}
        <div
          className={`text-lg md:text-xl lg:text-2xl text-gray-400 font-light tracking-wide transition-all duration-800 delay-1500 ${
            showTyping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-gray-300">I'm Ahmed Ayman Alhofy</span>
        </div>{" "}
        {/* Simple Apple-like loading animation */}
        <div
          className={`mt-12 flex justify-center space-x-2 transition-all duration-800 delay-1800 ${
            showTyping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-400"></div>{" "}
        </div>
      </div>
    </div>
  );
};
