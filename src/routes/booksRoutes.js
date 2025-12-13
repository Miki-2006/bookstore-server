import express from 'express'
import { addNewBook, getAllBooks } from '../controllers/booksControllers.js'

const booksRouter = express.Router()

booksRouter.get('/all', getAllBooks)
booksRouter.post('/new', addNewBook)

export default booksRouter;