"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Use resolvedTheme for fallback when theme is not yet initialized
  const currentTheme = resolvedTheme || theme;

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Wait until the theme is resolved to render the button
  if (!currentTheme) return null;

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {currentTheme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};

export default ThemeToggle;
