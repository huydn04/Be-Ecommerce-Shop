import { Router } from 'express'
import { getBillDetails,postBillDetails,deleteBillDetails,updateBillDetails,singleBillDetails } from '../controllers/billDetails.controller'


const router = Router()
router.get('/', getBillDetails)
router.post('/', postBillDetails)
router.delete('/:id', deleteBillDetails)
router.patch('/:id', updateBillDetails)
router.get('/:id', singleBillDetails)

export default router