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
      {/* Starry Sky Background */}
      <div className="starry-sky">
        <div className="nebula"></div>
        <div className="constellation">
          <div
            className="constellation-star"
            style={{ top: "15%", left: "20%", animationDelay: "0s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "25%", left: "40%", animationDelay: "1s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "35%", left: "60%", animationDelay: "2s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "45%", left: "80%", animationDelay: "0.5s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "65%", left: "15%", animationDelay: "1.5s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "75%", left: "35%", animationDelay: "2.5s" }}
          ></div>
          <div
            className="constellation-star"
            style={{ top: "85%", left: "75%", animationDelay: "3s" }}
          ></div>

          <div
            className="constellation-line"
            style={{
              top: "20%",
              left: "20%",
              width: "120px",
              transform: "rotate(25deg)",
              animationDelay: "0s",
            }}
          ></div>
          <div
            className="constellation-line"
            style={{
              top: "40%",
              left: "60%",
              width: "80px",
              transform: "rotate(-15deg)",
              animationDelay: "1s",
            }}
          ></div>
          <div
            className="constellation-line"
            style={{
              top: "70%",
              left: "15%",
              width: "100px",
              transform: "rotate(45deg)",
              animationDelay: "2s",
            }}
          ></div>
        </div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Cool Animated Background for Light Mode */}
      <div className="light-mode-bg">
        <div className="light-wave"></div>
        <div className="light-rays"></div>

        {/* Floating particles */}
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>
        <div className="light-particle"></div>

        {/* Geometric shapes */}
        <div className="light-geometric light-triangle"></div>
        <div className="light-geometric light-square"></div>
        <div className="light-geometric light-circle"></div>
        <div className="light-geometric light-hexagon"></div>
      </div>
    </>
  );
}
