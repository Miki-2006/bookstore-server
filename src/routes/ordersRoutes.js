import express from 'express'
import { createNewOrder, getOrdersOfUserById } from '../controllers/ordersControllers.js';

const ordersRouter = express.Router()

ordersRouter.get('/:userId', getOrdersOfUserById)
ordersRouter.post('/new', createNewOrder)

export default ordersRouter;