import { Router } from 'express';
import UserController from '../controllers/userController';
import loginMiddleware from '../middlewares/loginMiddleware';
import { validateToken } from '../middlewares/validateToken';

const userController = new UserController();
const loginRouter = Router();

loginRouter.post('/login', loginMiddleware, userController.login);
loginRouter.get('/login/validate', validateToken, userController.validate);

export default loginRouter;
