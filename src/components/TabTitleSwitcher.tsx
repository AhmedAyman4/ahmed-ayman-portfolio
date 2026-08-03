"use client";

import { useEffect } from "react";

export default function TabTitleSwitcher() {
  useEffect(() => {
    let originalTitle = document.title || "Ahmed Ayman";
    let timer: ReturnType<typeof setTimeout> | null = null;
    const DELAY_MS = 3000; // 3 second delay

    const changeToInactiveTitle = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (document.title !== "Hey!!!!") {
          originalTitle = document.title;
        }
        document.title = "Hey!!!!";
      }, DELAY_MS);
    };

    const restoreOriginalTitle = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (document.title === "Hey!!!!") {
        document.title = originalTitle;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        changeToInactiveTitle();
      } else {
        restoreOriginalTitle();
      }
    };

    const handleBlur = () => {
      changeToInactiveTitle();
    };

    const handleFocus = () => {
      restoreOriginalTitle();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}
