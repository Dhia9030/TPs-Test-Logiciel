const users = [
  { id: 1, name: 'Dhia', balance: 5000 },
  { id: 2, name: 'Ali', balance: 200 }
];

export function getUserById(id) {
  const user = users.find(u => u.id === id);
  if (!user) throw new Error('User not found');
  return user;
}

export function deductBalance(user, amount) {
  if (user.balance < amount) {
    throw new Error('Insufficient balance');
  }
  user.balance -= amount;
  return user.balance;
}