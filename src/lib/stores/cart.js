import { writable } from 'svelte/store';

export const cart = writable([]);

export function addToCart(product) {
    cart.update(items => {
      const existing = items.find(item => item.name === product.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        items.push({ ...product, quantity: 1 });
      }
      return [...items];
    });
  }
  
  export function removeFromCart(productName) {
    cart.update(items => items.filter(item => item.name !== productName));
  }