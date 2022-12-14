import { RequestHandler } from 'express';
import UserService from '../services/userService';
import { UserInterface } from '../interfaces/userInterface';
import StatusCodes from '../types/statusCodes';
import { getEmailByToken } from '../middlewares/validateToken';

export default class UserController {
  constructor(private userService: UserService = new UserService()) {}

  public login: RequestHandler = async (req, res, next) => {
    try {
      const loginObj: UserInterface = req.body;
      const result = await this.userService.login(loginObj);
      return res.status(StatusCodes.OK).json({ token: result });
    } catch (error) {
      next(error);
    }
  };

  public validate: RequestHandler = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const userEmail = getEmailByToken(token as string);
      const result = await this.userService.validate(userEmail);
      return res.status(StatusCodes.OK).json({ role: result });
    } catch (error) {
      next(error);
    }
  };
}
