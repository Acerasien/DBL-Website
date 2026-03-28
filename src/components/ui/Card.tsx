import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant - controls the visual style
   * @default "default"
   */
  variant?: "default" | "elevated" | "outlined";
  /**
   * Enable hover lift effect
   * @default false
   */
  hoverable?: boolean;
  /**
   * Make card clickable (renders as button)
   */
  onClick?: () => void;
  /**
   * Children content
   */
  children: React.ReactNode;
}

/**
 * Card Component
 * 
 * Flexible container component for content blocks.
 * Supports multiple variants and optional hover effects.
 * 
 * @example
 * <Card variant="elevated" hoverable>
 *   <CardHeader>Title</CardHeader>
 *   <CardBody>Content here</CardBody>
 * </Card>
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      hoverable = false,
      onClick,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      rounded-xl overflow-hidden
      transition-all duration-300 ease-in-out
    `;

    const variantStyles = {
      default: `
        bg-white
        shadow-sm
      `,
      elevated: `
        bg-white
        shadow-md
      `,
      outlined: `
        bg-white border border-border
        shadow-sm
      `,
    };

    const hoverStyles = hoverable
      ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// ============================================
// Card Header Sub-component
// ============================================

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-6 py-4 border-b border-border", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

// ============================================
// Card Body Sub-component
// ============================================

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-6 py-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = "CardBody";

// ============================================
// Card Footer Sub-component
// ============================================

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-6 py-4 border-t border-border bg-muted/30", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

export default Card;
