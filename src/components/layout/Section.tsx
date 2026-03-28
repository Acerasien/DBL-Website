import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Section variant - controls background styling
   * @default "default"
   */
  variant?: "default" | "muted" | "primary" | "dark";
  /**
   * Padding size - controls vertical spacing
   * @default "lg"
   */
  padding?: "sm" | "md" | "lg" | "xl" | "none";
  /**
   * Remove padding on mobile
   * @default false
   */
  noPaddingMobile?: boolean;
  /**
   * Children content
   */
  children: React.ReactNode;
  /**
   * HTML element to render (defaults to section)
   */
  as?: "section" | "header" | "footer" | "main";
  /**
   * Unique identifier for navigation
   */
  id?: string;
}

/**
 * Section Component
 * 
 * Primary wrapper for page sections with consistent spacing.
 * Supports multiple background variants and padding sizes.
 * 
 * @example
 * <Section variant="muted" padding="xl">
 *   <Container>
 *     <h2>Section Title</h2>
 *   </Container>
 * </Section>
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      variant = "default",
      padding = "lg",
      noPaddingMobile = false,
      children,
      className,
      as: Component = "section",
      id,
      ...props
    },
    ref
  ) => {
    const baseStyles = "w-full";

    const variantStyles = {
      default: "bg-white",
      muted: "bg-muted",
      primary: "bg-primary-500 text-white",
      dark: "bg-gray-900 text-white",
    };

    const paddingStyles = {
      sm: "py-8",
      md: "py-12",
      lg: "py-16",
      xl: "py-20",
      none: "",
    };

    const mobilePaddingStyles = noPaddingMobile ? "sm:py-0" : "";

    return (
      <Component
        ref={ref}
        id={id}
        className={cn(
          baseStyles,
          variantStyles[variant],
          paddingStyles[padding],
          noPaddingMobile && mobilePaddingStyles,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = "Section";

export default Section;
