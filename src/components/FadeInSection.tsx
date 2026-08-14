"use client";

import React, { useState, useEffect, useRef } from "react";
import "@/styles/components/FadeInSection.css";

interface FadeInSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: string;
  threshold?: number;
  once?: boolean;
}

export default function FadeInSection({
  children,
  delay = "0s",
  threshold = 0.1,
  once = true,
  className = "",
  style,
  ...props
}: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ ...style, "--delay": delay } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

