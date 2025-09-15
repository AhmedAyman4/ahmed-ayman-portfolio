"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function MobileModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100/40 dark:bg-gray-800/40 rounded-xl border border-gray-200/30 dark:border-gray-700/30">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Theme
      </span>

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background
          ${
            isDark
              ? "bg-[#4de9d2]/80 focus:ring-[#4de9d2]/50"
              : "bg-gray-300 focus:ring-primary/50"
          }
        `}
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center
            ${isDark ? "translate-x-6" : "translate-x-1"}
          `}
        >
          {isDark ? (
            <Moon className="h-2.5 w-2.5 text-gray-600" />
          ) : (
            <Sun className="h-2.5 w-2.5 text-yellow-500" />
          )}
        </span>
      </button>
    </div>
  );
}
