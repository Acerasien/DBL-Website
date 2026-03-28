"use client";

import React from "react";

/**
 * Skip Link Component
 * 
 * Accessible skip link that appears on keyboard focus.
 * Must be placed as the first focusable element in the page.
 */
export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
