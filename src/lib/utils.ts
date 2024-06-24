import { type ClassValue, clsx } from 'clsx';
import CryptoJs from 'crypto-js';
import { twMerge } from 'tailwind-merge';
import { Product } from './types';
import { CartItem } from './store/features/cartSlice';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function hashTheItem(payload: CartItem): string {
    const jsonString = JSON.stringify({ ...payload, qty: undefined });

    const hash = CryptoJs.SHA256(jsonString).toString();

    return hash;
}

export function getFromPrice(product: Product): number {
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

export function getItemTotal(product: CartItem) {
    const toppingsTotal = product.chosenConfigurations.selectedToppings.reduce(
        (acc, curr) => acc + curr.price,
        0
    );

    const configPricing = Object.entries(product.chosenConfigurations.priceConfigurations).reduce(
        (acc, [key, value]: [string, string]) => {
            const price = product.priceConfigurations[key].availableOptions[value];
            return acc + price;
        },
        0
    );
    return configPricing + toppingsTotal;
}