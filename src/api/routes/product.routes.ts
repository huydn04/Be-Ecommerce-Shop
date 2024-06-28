import { Router } from 'express'
import { getAllProduct,postProduct,deleteProduct,updateProduct,singleProduct } from '../controllers/product.controller'


const router = Router()
router.get('/', getAllProduct)
router.post('/', postProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)
router.get('/:id', singleProduct)

export default router