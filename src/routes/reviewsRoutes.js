import express from 'express'
import { getReviewsOfBookById, getReviewsOfUser } from '../controllers/reviewsControllers.js';

const reviewsRouter = express.Router()

reviewsRouter.get('/book/:id', getReviewsOfBookById)
reviewsRouter.get('/user/:id', getReviewsOfUser)

export default reviewsRouter;