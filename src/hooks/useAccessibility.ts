"use client";

import { useEffect, useState } from "react";

interface UseAccessibilityOptions {
  detectReducedMotion?: boolean;
  detectHighContrast?: boolean;
}

/**
 * useAccessibility Hook
 * 
 * Provides accessibility preferences and utilities for enhanced user experience.
 */
export function useAccessibility({
  detectReducedMotion = true,
  detectHighContrast = true,
}: UseAccessibilityOptions = {}) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  // Detect reduced motion preference
  useEffect(() => {
    if (!detectReducedMotion) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [detectReducedMotion]);

  // Detect high contrast preference
  useEffect(() => {
    if (!detectHighContrast) return;

    const mediaQuery = window.matchMedia("(prefers-contrast: more)");
    setHighContrast(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setHighContrast(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [detectHighContrast]);

  // Detect keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsKeyboardUser(true);
        document.documentElement.classList.add("keyboard-user");
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
      document.documentElement.classList.remove("keyboard-user");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Skip to main content functionality
  const skipToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  return {
    reducedMotion,
    highContrast,
    isKeyboardUser,
    skipToContent,
  };
}

export default useAccessibility;
