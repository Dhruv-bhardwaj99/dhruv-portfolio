import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const hoverCard =
  "transition hover:-translate-y-1 hover:shadow-md hover:border-foreground/20 dark:hover:border-white/20 dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_12px_40px_rgba(0,0,0,0.35)]";
