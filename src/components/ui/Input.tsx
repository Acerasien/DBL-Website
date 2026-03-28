import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// ============================================
// Input Component
// ============================================

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Input variant - controls the visual style
   * @default "default"
   */
  variant?: "default" | "filled";
  /**
   * Input size
   * @default "md"
   */
  inputSize?: "sm" | "md" | "lg";
  /**
   * Error state - shows error styling and message
   */
  error?: string;
  /**
   * Success state
   */
  success?: boolean;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Helper text below the input
   */
  helperText?: string;
  /**
   * Icon to display inside the input
   */
  icon?: React.ReactNode;
  /**
   * Full width input
   * @default true
   */
  fullWidth?: boolean;
}

/**
 * Input Component
 * 
 * Text input field with validation states and optional label.
 * Supports all standard HTML input attributes.
 * 
 * @example
 * <Input label="Email" type="email" placeholder="Enter your email" />
 * <Input error="This field is required" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      inputSize = "md",
      error,
      success,
      label,
      helperText,
      icon,
      fullWidth = true,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    const baseStyles = `
      w-full rounded-lg border
      transition-all duration-200 ease-in-out
      placeholder:text-muted-foreground
      focus:outline-none focus:ring-2 focus:ring-offset-0
      disabled:cursor-not-allowed disabled:opacity-50
    `;

    const variantStyles = {
      default: "bg-white border-border",
      filled: "bg-muted border-transparent",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-5 py-3 text-lg",
    };

    const focusStyles = error
      ? "focus:border-red-500 focus:ring-red-500/20"
      : success
      ? "focus:border-green-500 focus:ring-green-500/20"
      : "focus:border-primary-500 focus:ring-primary-500/20";

    const errorStyles = error ? "border-red-500" : "";
    const successStyles = success && !error ? "border-green-500" : "";

    return (
      <div className={cn("w-full", fullWidth ? "" : "w-fit")}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            className={cn(
              baseStyles,
              variantStyles[variant],
              sizeStyles[inputSize],
              focusStyles,
              errorStyles,
              successStyles,
              icon && "pl-10",
              className
            )}
            disabled={disabled}
            {...props}
          />
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={cn(
              "mt-1.5 text-sm",
              error ? "text-red-500" : "text-muted-foreground"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// ============================================
// Textarea Component
// ============================================

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Error message
   */
  error?: string;
  /**
   * Label for the textarea
   */
  label?: string;
  /**
   * Helper text below the textarea
   */
  helperText?: string;
  /**
   * Full width textarea
   * @default true
   */
  fullWidth?: boolean;
  /**
   * Number of rows
   * @default 4
   */
  rows?: number;
}

/**
 * Textarea Component
 * 
 * Multi-line text input with validation states.
 * 
 * @example
 * <Textarea label="Message" rows={5} placeholder="Type your message..." />
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      error,
      label,
      helperText,
      fullWidth = true,
      rows = 4,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    const baseStyles = `
      w-full rounded-lg border border-border
      transition-all duration-200 ease-in-out
      placeholder:text-muted-foreground
      focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
      disabled:cursor-not-allowed disabled:opacity-50
      resize-y
    `;

    const errorStyles = error ? "border-red-500 focus:ring-red-500/20" : "";

    return (
      <div className={cn("w-full", fullWidth ? "" : "w-fit")}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(baseStyles, errorStyles, "px-4 py-2.5", className)}
          disabled={disabled}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={cn(
              "mt-1.5 text-sm",
              error ? "text-red-500" : "text-muted-foreground"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Input;
