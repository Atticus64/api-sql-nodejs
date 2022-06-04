import {Router} from 'express';
import {countTotalProducts, createNewProduct, deleteProductById, getAllProducts, getProductById, getProducts, updateProductById} from '../controllers/products.controller';


const router = Router();

router.get('/products', getProducts);

router.post('/products', createNewProduct);

router.get('/products/count', countTotalProducts);

router.get('/products/:id', getProductById);

router.delete('/products/:id', deleteProductById);

router.put('/products/:id', updateProductById);


export default router;

