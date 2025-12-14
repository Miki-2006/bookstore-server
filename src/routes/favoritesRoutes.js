import express from 'express'
import { addBookToFavorites, getFavoritesOfUser } from '../controllers/favoritesControllers.js';

const favoritesRouter = express.Router()

favoritesRouter.get('/:userId', getFavoritesOfUser)
favoritesRouter.post('/add', addBookToFavorites)

export default favoritesRouter;