import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Product } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFromPrice(product: Product): number {
  console.log(product, "getting product")
  const basePrice = Object.entries(product.priceConfigurations)
      .filter(([key, value]) => {
          return value.priceType === 'base';
      })
      .reduce((acc, [key, value]) => {
          const smallestPrice = Math.min(...Object.values(value.availableOptions));
          return acc + smallestPrice;
      }, 0);
  return basePrice;
}