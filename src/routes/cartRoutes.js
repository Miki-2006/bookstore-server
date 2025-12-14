import express from 'express'
import { addBookToCart, getCartOfUser } from '../controllers/cartControllers.js';

const cartRouter = express.Router()

cartRouter.get('/:userId', getCartOfUser)
cartRouter.post('/add', addBookToCart)

export default cartRouter;