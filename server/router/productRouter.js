import express from 'express';
import { create, list, get, put, remove } from '../controller/productController.js';

let router = express.Router();
// import verifyJWT from '../middleware/verifyJWT.js';

//router.use(verifyJWT);

router.post('/products',  create);
router.get('/products', list);
router.get('/products/:id', get);
router.put('/products/:id', put);
router.delete('/products/:id', remove);

export default router;
