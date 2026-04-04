import { describe, it, expect } from 'vitest';
import { getUserById, deductBalance } from '../src/services/userService.js';

describe('userService', () => {
  it('should return user for valid id', () => {
    const user = getUserById(1);
    expect(user.name).toBe('Dhia');
  });

  it('should deduct balance correctly', () => {
    const user = { id: 1, balance: 100 };
    const result = deductBalance(user, 40);
    expect(result).toBe(60);
  });

  it('should throw if insufficient balance', () => {
    const user = { id: 1, balance: 10 };
    expect(() => deductBalance(user, 50))
      .toThrow('Insufficient balance');
  });

  it('should throw error when user does not exist', () => {
  expect(() => getUserById(999))
    .toThrow('User not found');
});
});