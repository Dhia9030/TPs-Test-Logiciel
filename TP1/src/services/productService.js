const products = [
  { id: 1, name: 'Laptop', price: 3000 },
  { id: 2, name: 'Mouse', price: 50 },
  { id: 3, name: 'Keyboard', price: 100 }
];

export function getProductById(id) {
  const product = products.find(p => p.id === id);
  if (!product) throw new Error('Product not found');
  return product;
}