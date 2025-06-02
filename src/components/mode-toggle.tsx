"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative group bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:bg-gray-200/50 dark:hover:bg-gray-700/60 hover:border-gray-300/40 dark:hover:border-gray-600/50 transition-all duration-300 rounded-full w-8 h-8"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  );
}
