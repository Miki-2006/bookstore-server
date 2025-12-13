import expres from 'express'
import { registerNewUser, loginUser } from '../controllers/usersControllers.js'

const usersRouter = expres.Router()

usersRouter.post('/register', registerNewUser);
usersRouter.post('/login', loginUser);


export default usersRouter