import { calculateCartTotal } from './cartService';
import { deductBalance } from './userService';

export function createOrder(user, cart, discount = 0) {
  if (!cart.length) throw new Error('Cart is empty');

  let total = calculateCartTotal(cart);

  if (discount < 0 || discount > 100) {
    throw new Error('Invalid discount');
  }

  total = total - (total * discount) / 100;

  deductBalance(user, total);

  return {
    userId: user.id,
    total,
    items: cart
  };
}