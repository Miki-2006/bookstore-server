import express from 'express'
import booksRouter from './booksRoutes.js';
import usersRouter from './usersRoutes.js';
import reviewsRouter from './reviewsRoutes.js'
import cartRouter from './cartRoutes.js'
import ordersRouter from './ordersRoutes.js'
import favoritesRouter from './favoritesRoutes.js'

const mainRouter = express.Router()

mainRouter.use('/books', booksRouter);
mainRouter.use('/users', usersRouter);
mainRouter.use('/reviews', reviewsRouter);
mainRouter.use('/cart', cartRouter);
mainRouter.use('/orders', ordersRouter);
mainRouter.use('/favorites', favoritesRouter)


export default mainRouter;