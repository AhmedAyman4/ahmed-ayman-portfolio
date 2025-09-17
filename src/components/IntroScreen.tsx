"use client";

import React, { useState, useEffect } from "react";
import { TypingEffect } from "./typing-effect";
import "@/styles/components/IntroScreen.css";

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
      className: "intro-hello-word",
    },
  ];
  return (
    <div className={`intro-screen ${fadeOut ? "fade-out" : ""}`}>
      {" "}
      {/* Clean Apple-like background */}
      <div className="intro-background"></div>
      {/* Subtle background animation */}
      <div className="intro-background-animation">
        {/* Single elegant orb */}
        <div className="intro-orb-primary"></div>
        <div className="intro-orb-secondary"></div>
      </div>
      {/* Hello typing effect with handwritten styling */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Subtle backdrop for text */}
        <div className="intro-text-backdrop"></div>{" "}
        <div className="intro-hello-container">
          {showTyping && (
            <div className="intro-hello-text">
              <div className="intro-hello-text-inner text-white drop-shadow-2xl">
                {" "}
                <TypingEffect words={helloWords} typingSpeed={150} />
              </div>
              {/* Soft glow effect */}
              <div className="intro-hello-glow"></div>
            </div>
          )}
        </div>{" "}
        {/* Enhanced subtitle with Apple-like simplicity */}
        <div className={`intro-subtitle ${showTyping ? "show" : "hide"}`}>
          <span className="intro-subtitle-name">I'm Ahmed Ayman Alhofy</span>
        </div>{" "}
        {/* Simple Apple-like loading animation */}
        <div className={`intro-loading ${showTyping ? "show" : "hide"}`}>
          <div className="intro-loading-dot"></div>
          <div className="intro-loading-dot"></div>
          <div className="intro-loading-dot"></div>
        </div>
      </div>
    </div>
  );
};
