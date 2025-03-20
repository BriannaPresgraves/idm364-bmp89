import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialCart = browser ? JSON.parse(localStorage.getItem('cart')) || [] : [];
export const cart = writable(initialCart);

// Sync cart to localStorage
if (browser) {
  cart.subscribe((value) => {
    localStorage.setItem('cart', JSON.stringify(value));
  });
}

// Add item to cart
export function addToCart(product) {
  cart.update(items => {
      const existing = items.find(item => item.id === product.id);
      if (existing) {
          existing.quantity += 1;
      } else {
          items.push({ ...product, quantity: 1 });
      }
      return [...items];
  });
}

// Remove item from cart
export function removeFromCart(productId) {
  cart.update(items => items.filter(item => item.id !== productId));
}

// Empty cart
export function clearCart() {
  cart.set([]);
}