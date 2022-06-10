import { Router } from "express";
const router = Router()
import {createProduct, getProducts, getProductById, updateProductById, deleteProductById   } from "../controllers/products.controller";
import {verifyToken, isAdmin, isModerator} from "../middlewares"

router.post('/', [verifyToken, isAdmin], createProduct)
router.get('/', getProducts)
router.get('/:productId', getProductById)
router.put('/:productId', [verifyToken, isModerator], updateProductById)
router.delete('/:productId', [verifyToken, isModerator], deleteProductById)

export default router