import { Router } from 'express'
import { getAllComments,postComments,deleteComments,updateComments,singleComments } from '../controllers/comments.controller'


const router = Router()
router.get('/', getAllComments)
router.post('/', postComments)
router.delete('/:id', deleteComments)
router.patch('/:id', updateComments)
router.get('/:id', singleComments)

export default router