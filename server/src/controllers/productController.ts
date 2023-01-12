import { Request, Response } from 'express';
import { prisma } from '../index';

export class ProductController {
  async create(request: Request, response: Response) {
    try {
      const { name, price, quantity } = request.body;
      const authorId = String(request.params.id);

      const product = await prisma.product.create({
        data: {
          name: name,
          price: price,
          quantity: quantity,
          authorId: authorId,
        },
      });

      return response.status(201).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { name, price, quantity } = request.body;
      const id = request.params.id;

      const product = await prisma.product.update({
        where: { id },
        data: {
          name,
          price,
          quantity,
        },
      });

      return response.status(201).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const products = await prisma.product.findMany();

      response.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const product = await prisma.product.findUnique({
        where: { id },
      });

      if (!product) {
        return response.json({ error: 'Não possivel encotrar esse produto' });
      }

      await prisma.product.delete({
        where: {
          id,
        },
      });

      return response
        .status(200)
        .json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      console.log(error);
    }
  }
}
