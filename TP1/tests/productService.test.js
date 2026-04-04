import { describe, it, expect } from 'vitest';
import { getProductById } from '../src/services/productService.js';

describe('productService', () => {
  it('should return product for valid id', () => {
    const product = getProductById(1);
    expect(product.name).toBe('Laptop');
  });

  it('should throw error for invalid id', () => {
    expect(() => getProductById(999))
      .toThrow('Product not found');
  });

  it('should return correct product structure', () => {
    const product = getProductById(2);
    expect(product).toHaveProperty('price');
  });
});