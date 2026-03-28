import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge to resolve conflicts
 * 
 * @example
 * cn("px-4", "px-6") // => "px-6" (last one wins)
 * cn("text-red-500", isActive && "text-blue-500") // => conditional class
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
