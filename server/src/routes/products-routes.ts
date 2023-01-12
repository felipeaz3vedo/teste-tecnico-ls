import { ensureLoggedIn } from 'connect-ensure-login';
import { Router } from 'express';
import { ProductController } from '../controllers/productController';

const router = Router();

const product = new ProductController();

router.post('/product/user/:id', ensureLoggedIn('/'), product.create);
router.get('/products', ensureLoggedIn('/'), product.findAll);
router.put('/product/:id', ensureLoggedIn('/'), product.update);
router.delete('/product/:id', product.delete);

export { router };
