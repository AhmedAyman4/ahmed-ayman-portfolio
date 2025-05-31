"use client";

import dynamic from "next/dynamic";

// Import BackgroundEffects with no SSR to prevent hydration issues
const BackgroundEffects = dynamic(
  () => import("@/components/BackgroundEffects"),
  {
    ssr: false,
  }
);

export default function ClientBackgroundWrapper() {
  return <BackgroundEffects />;
}
