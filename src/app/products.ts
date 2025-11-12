export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: 'Телефон XL', price: 12000, description: 'Великий телефон' },
  { id: 2, name: 'Телефон Mini', price: 10000, description: 'Компактний телефон' },
  { id: 3, name: 'Телефон Standard', price: 9000, description: 'Звичайний телефон' }
];