import { Router } from 'express'
import { getAllBill,postBill,deleteBill,updateBill,singleBill } from '../controllers/bill.controller'


const router = Router()
router.get('/', getAllBill)
router.post('/', postBill)
router.delete('/:id', deleteBill)
router.patch('/:id', updateBill)
router.get('/:id', singleBill)

export default router