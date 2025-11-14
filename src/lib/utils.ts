import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function to merge CSS classes.
 * It uses `clsx` to conditionally apply classes and `tailwind-merge` to resolve conflicting Tailwind CSS classes.
 *
 * @param {...ClassValue[]} inputs - An array of class values to be merged.
 * @returns {string} The merged CSS class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
