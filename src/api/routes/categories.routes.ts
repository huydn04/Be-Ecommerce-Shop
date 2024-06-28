import { Router } from 'express'
import { getAllCategories,postCategories,deleteCategories,updateCategories,singleCategories } from '../controllers/categories.controller'


const router = Router()
router.get('/', getAllCategories)
router.post('/', postCategories)
router.delete('/:id', deleteCategories)
router.patch('/:id', updateCategories)
router.get('/:id', singleCategories)

export default router