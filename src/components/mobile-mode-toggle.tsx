"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export function MobileModeToggle() {
  const { setTheme, theme, themes } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a skeleton that matches the component dimensions to prevent layout shift
    return (
      <div className="flex items-center justify-between p-3 bg-gray-100/40 rounded-xl border border-gray-200/30">
        <span className="text-sm font-medium text-gray-400">Theme</span>
        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 animate-pulse">
          <span className="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm translate-x-1" />
        </div>
      </div>
    );
  }

  const isDark = theme === "dark";
  const isSystem = theme === "system";

  // Cycle through themes: light -> dark -> system
  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (isSystem) return <Monitor className="h-2.5 w-2.5 text-blue-500" />;
    if (isDark) return <Moon className="h-2.5 w-2.5 text-indigo-400" />;
    return <Sun className="h-2.5 w-2.5 text-amber-500" />;
  };

  const getTogglePosition = () => {
    if (isSystem) return "translate-x-3.5";
    if (isDark) return "translate-x-6";
    return "translate-x-1";
  };

  const getBackgroundColor = () => {
    if (isSystem) return "bg-blue-400/80 focus:ring-blue-400/50";
    if (isDark) return "bg-emerald-400/80 focus:ring-emerald-400/50";
    return "bg-gray-300 focus:ring-gray-400/50";
  };

  const getThemeLabel = () => {
    if (isSystem) return "System";
    if (isDark) return "Dark";
    return "Light";
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100/40 dark:bg-gray-800/40 rounded-xl border border-gray-200/30 dark:border-gray-700/30 backdrop-blur-sm">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Theme
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {getThemeLabel()}
        </span>
      </div>

      <button
        onClick={handleThemeToggle}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background hover:scale-105 active:scale-95
          ${getBackgroundColor()}
        `}
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${
          theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
        } mode`}
        title={`Current: ${getThemeLabel()}. Click to cycle themes.`}
      >
        <span
          className={`
            h-4 w-4 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center ring-1 ring-black/5
            ${getTogglePosition()}
          `}
        >
          {getIcon()}
        </span>
      </button>
    </div>
  );
}
