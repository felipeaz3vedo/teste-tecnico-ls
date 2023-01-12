import { formatDate } from '../utils/formatDate';
import { formatMoney } from '../utils/formatMoney';

const date = new Date();

export const products = [
  {
    id: '10f7e242-b254-4796-811c-10fbf0ef3b5e',
    name: 'Televisão Samsung 40 polegadas FHD',
    stock: 'sim',
    price: formatMoney(1400),
    quantity: '2345',
    createdBy: 'Felipe Azevedo',
    lastUpdate: formatDate(date),
  },
  {
    id: '10f7e241-b254-4796-811c-10fbf0ef3b5e',
    name: 'Ventilador',
    stock: 'sim',
    price: formatMoney(120.0),
    quantity: '1200',
    createdBy: 'Heitor Azevedo',
    lastUpdate: formatDate(date),
  },
];
