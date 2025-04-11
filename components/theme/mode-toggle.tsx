"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Force dark mode for this design
  React.useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <div className="inline-flex rounded-full border border-muted/20 items-center justify-center p-[6px] bg-[--color-card-bg]/80 backdrop-blur-sm">
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-full p-1.5 ${theme === "dark" ? "bg-[--color-accent-green] text-black" : "bg-transparent text-white"}`}
        aria-label="Dark mode"
      >
        <div className="flex items-center justify-center">
          <Moon className="h-4 w-4" />
        </div>
      </button>

      <button
        onClick={() => setTheme("light")}
        className={`rounded-full p-1.5 ${theme === "light" ? "bg-[--color-accent-green] text-black" : "bg-transparent text-white"}`}
        aria-label="Light mode"
      >
        <div className="flex items-center justify-center">
          <Sun className="h-4 w-4" />
        </div>
      </button>
    </div>
  );
}
