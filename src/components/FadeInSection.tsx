"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: string;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = "0s",
  className = "",
}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } ${className}`}
      style={{ transitionDelay: delay }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
