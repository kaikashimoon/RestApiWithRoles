import { Router } from "express";
const router = Router()
import {createProduct, getProducts, getProductById, updateProductById, deleteProductById   } from "../controllers/products.controller";
import {verifyToken} from "../middlewares"

router.post('/', verifyToken, createProduct)
router.get('/', getProducts)
router.get('/:productId', getProductById)
router.put('/:productId', verifyToken, updateProductById)
router.delete('/:productId', verifyToken, deleteProductById)



export default router