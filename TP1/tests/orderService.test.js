import { describe, it, expect } from 'vitest';
import { createOrder } from '../src/services/orderService.js';

describe('orderService', () => {
  it('should create order successfully', () => {
    const user = { id: 1, balance: 1000 };
    const cart = [{ product: { price: 100 }, quantity: 2 }];

    const order = createOrder(user, cart, 10);

    expect(order.total).toBe(180);
  });

  it('should throw if cart is empty', () => {
    const user = { id: 1, balance: 1000 };
    expect(() => createOrder(user, []))
      .toThrow('Cart is empty');
  });

  it('should throw if insufficient balance', () => {
    const user = { id: 1, balance: 50 };
    const cart = [{ product: { price: 100 }, quantity: 1 }];

    expect(() => createOrder(user, cart))
      .toThrow('Insufficient balance');
  });

  it('should throw if discount is invalid', () => {
  const user = { id: 1, balance: 1000 };
  const cart = [{ product: { price: 100 }, quantity: 1 }];

  expect(() => createOrder(user, cart, 200))
    .toThrow('Invalid discount');
});
});