"use client";

import { useEffect, useState } from "react";
import "@/styles/components/BackgroundEffects.css";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="background-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/background-image.jpg"
      >
        <source
          src="/videos/Abstract blurs streak and smear (loop) 1 _ Free Stock Video Footage.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
