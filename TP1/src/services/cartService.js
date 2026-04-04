import { getProductById } from './productService';

export function addToCart(cart, productId, quantity) {
  if (quantity <= 0) throw new Error('Invalid quantity');

  const product = getProductById(productId);

  const existing = cart.find(item => item.product.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }

  return cart;
}

export function calculateCartTotal(cart) {
  return cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}