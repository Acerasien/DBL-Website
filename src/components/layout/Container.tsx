import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container size - controls max-width
   * @default "xl"
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /**
   * Add horizontal padding
   * @default true
   */
  padding?: boolean;
  /**
   * Center the container
   * @default true
   */
  center?: boolean;
  /**
   * Children content
   */
  children: React.ReactNode;
}

/**
 * Container Component
 * 
 * Constrains content width with responsive padding.
 * Used as the primary wrapper for page content.
 * 
 * @example
 * <Container size="xl">
 *   <h1>Page Content</h1>
 * </Container>
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = "xl",
      padding = true,
      center = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const maxWidthStyles = {
      sm: "max-w-2xl",      // 672px
      md: "max-w-3xl",      // 768px
      lg: "max-w-4xl",      // 896px
      xl: "max-w-6xl",      // 1152px (default for corporate)
      "2xl": "max-w-7xl",   // 1280px
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          maxWidthStyles[size],
          center && "mx-auto",
          padding && "px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
