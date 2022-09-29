import { Router } from 'express';
import UserController from '../controllers/userController';
import loginMiddleware from '../middlewares/loginMiddleware';

const userController = new UserController();
const loginRouter = Router();

loginRouter.post('/login', loginMiddleware, userController.login);

export default loginRouter;
