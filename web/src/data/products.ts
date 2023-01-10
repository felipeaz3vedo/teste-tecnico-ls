const date = new Date();

export const products = [
  {
    id: '1',
    name: 'Televisão',
    stock: 'sim',
    price: '1400.00',
    quantity: '2345',
    lastUpdate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
  },
  {
    id: '2',
    name: 'Ventilador',
    stock: 'sim',
    price: '120.00',
    quantity: '1200',
    lastUpdate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
  },
];
