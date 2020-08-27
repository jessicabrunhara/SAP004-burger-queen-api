import { Router } from 'express'
import OrderController from '../controllers/OrderController'

const router = Router()
router.get('/', OrderController.getAllOrders)
router.post('/', OrderController.getAllOrders)
router.get('/:id', OrderController.getAllOrders)
router.put('/:id', OrderController.getAllOrders)
router.delete('/:id', OrderController.getAllOrders)

export default router