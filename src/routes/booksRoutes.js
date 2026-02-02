import express from 'express'
import { addNewBook, getAllBooks, getBestSellers, getNewReleases } from '../controllers/booksControllers.js'

const booksRouter = express.Router()

booksRouter.get('/all', getAllBooks)
booksRouter.get('/bestsellers', getBestSellers)
booksRouter.get('/newreleases', getNewReleases)
booksRouter.post('/new', addNewBook)

export default booksRouter;