import { clsx, type ClassValue } from "clsx";
import { typeof tailwindMerge } from "tailwind-merge";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
