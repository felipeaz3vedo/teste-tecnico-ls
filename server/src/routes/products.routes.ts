import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productRoutes = Router();

productRoutes.post('users/:id/products', async (req, res) => {
  const userId = req.params.id;
  const { name, price, quantity } = req.body;

  const product = prisma.product.create({
    data: {
      name,
      price,
      quantity,
      userId,
    },
  });

  return res.status(201).json(product);
});

export { productRoutes };
