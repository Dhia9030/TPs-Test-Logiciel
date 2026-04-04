import { describe, it, expect } from 'vitest';
import { addToCart, calculateCartTotal } from '../src/services/cartService.js';

describe('cartService', () => {
  it('should add product to cart', () => {
    const cart = [];
    addToCart(cart, 1, 2);
    expect(cart.length).toBe(1);
  });

  it('should calculate total correctly', () => {
    const cart = [
      { product: { price: 100 }, quantity: 2 }
    ];
    expect(calculateCartTotal(cart)).toBe(200);
  });

  it('should throw for invalid quantity', () => {
    const cart = [];
    expect(() => addToCart(cart, 1, 0))
      .toThrow('Invalid quantity');
  });

  it('should increase quantity if product already exists', () => {
  const cart = [];

  addToCart(cart, 1, 1);
  addToCart(cart, 1, 2);

  expect(cart.length).toBe(1);
  expect(cart[0].quantity).toBe(3);
});
});