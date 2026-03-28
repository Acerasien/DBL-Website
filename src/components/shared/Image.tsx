"use client";

import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageProps extends Omit<NextImageProps, "loading" | "className"> {
  className?: string;
  /**
   * Priority loading for above-the-fold images
   * @default false
   */
  priority?: boolean;
  /**
   * Enable lazy loading optimization
   * @default true
   */
  lazy?: boolean;
  /**
   * Placeholder blur effect
   * @default "blur"
   */
  placeholder?: "blur" | "empty";
  /**
   * Blur data URL for placeholder
   */
  blurDataURL?: string;
}

/**
 * Optimized Image Component
 * 
 * Wrapper around Next.js Image component with:
 * - Automatic lazy loading for below-fold images
 * - Priority loading for hero/above-fold images
 * - Smooth loading transitions
 * - WebP/AVIF format optimization
 * 
 * Usage:
 * ```tsx
 * // Above the fold (hero, main content)
 * <Image src="/hero.jpg" alt="Hero" priority />
 * 
 * // Below the fold (default lazy loading)
 * <Image src="/team.jpg" alt="Team" />
 * ```
 */
export const Image: React.FC<ImageProps> = ({
  className,
  priority = false,
  lazy = true,
  placeholder = "blur",
  blurDataURL,
  sizes,
  ...props
}) => {
  // Default blur placeholder for images without explicit placeholder
  const defaultBlur = blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q==";

  // Determine loading strategy
  const loadingStrategy = priority ? "eager" : lazy ? "lazy" : "eager";

  // Default sizes for responsive images
  const defaultSizes = sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <NextImage
        {...props}
        loading={loadingStrategy}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlur}
        sizes={sizes || defaultSizes}
        className="transition-opacity duration-300 ease-in-out"
      />
    </div>
  );
};

export default Image;
