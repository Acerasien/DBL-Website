import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant - controls the visual style
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /**
   * Button size - controls padding and font size
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Loading state - shows spinner and disables button
   * @default false
   */
  loading?: boolean;
  /**
   * Icon to display before the text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the text
   */
  rightIcon?: React.ReactNode;
  /**
   * Render as a child component (e.g., Next.js Link)
   * @default false
   */
  asChild?: boolean;
  /**
   * Children (button text or Link component)
   */
  children: React.ReactNode;
}

/**
 * Button Component
 * 
 * Primary action button for PrimaCons website.
 * Supports multiple variants, sizes, and icon configurations.
 * 
 * @example
 * <Button variant="primary" size="lg">Get Started</Button>
 * <Button variant="outline" leftIcon={<ArrowRight />}>Learn More</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      asChild = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-semibold rounded-lg
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      active:scale-[0.98]
    `;

    const variantStyles = {
      // Primary: navy deepens naturally on hover — gold only as focus ring
      primary: `
        bg-primary-500 text-white
        hover:bg-primary-600
        focus:ring-2 focus:ring-accent-400 focus:ring-offset-2
        shadow-md hover:shadow-lg hover:shadow-primary-800/20
      `,
      // Secondary/CTA: gold button — the deliberate "action" color
      secondary: `
        bg-accent-500 text-primary-900
        hover:bg-accent-400
        focus:ring-2 focus:ring-accent-600 focus:ring-offset-2
        shadow-md hover:shadow-lg hover:shadow-accent-500/25
      `,
      // Outline: navy border → gold text/border tint on hover (subtle)
      outline: `
        border-2 border-primary-500 text-primary-500
        hover:border-accent-500 hover:text-accent-700
        focus:ring-2 focus:ring-accent-400 focus:ring-offset-2
        bg-transparent
      `,
      // Ghost: very subtle, navy text stays, light warm tint on hover
      ghost: `
        text-primary-500
        hover:bg-primary-50 hover:text-primary-600
        focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
        bg-transparent
      `,
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-8 py-3 text-lg",
    };

    // If asChild is true, render children without wrapping button
    if (asChild) {
      return (
        <>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              const childProps = child.props as { className?: string };
              return React.cloneElement(child, {
                className: cn(
                  baseStyles,
                  variantStyles[variant],
                  sizeStyles[size],
                  fullWidth && "w-full",
                  loading && "pointer-events-none",
                  className,
                  childProps.className
                ),
              } as React.ClassAttributes<Element>);
            }
            return child;
          })}
        </>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          loading && "pointer-events-none",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {leftIcon && !loading && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
