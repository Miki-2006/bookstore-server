import expres from 'express'
import { registerNewUser, loginUser, getAllUsers, editUser } from '../controllers/usersControllers.js'

const usersRouter = expres.Router()

usersRouter.get('/', getAllUsers)
usersRouter.post('/register', registerNewUser);
usersRouter.post('/login', loginUser);
usersRouter.put('/:id', editUser)

export default usersRouter