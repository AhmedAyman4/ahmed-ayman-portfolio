"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Simplified Starry Sky Background - Dark Mode */}
      <div className="starry-sky">
        <div className="nebula"></div>
        {/* Reduced constellation stars */}
        <div className="constellation">
          <div
            className="constellation-star"
            style={{ top: "20%", left: "30%", animationDelay: "0s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "40%", left: "70%", animationDelay: "1.5s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "70%", left: "20%", animationDelay: "3s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "60%", left: "80%", animationDelay: "4.5s" }}
          ></div>
        </div>
        {/* Single shooting star */}
        <div className="shooting-star"></div>
      </div>

      {/* Simplified Light Mode Background */}
      <div className="light-mode-bg">
        <div className="light-wave"></div>

        {/* Reduced floating particles */}
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>

        {/* Simplified geometric shapes */}
        <div className="light-geometric light-circle"></div>
        <div className="light-geometric light-square"></div>
      </div>
    </>
  );
}
