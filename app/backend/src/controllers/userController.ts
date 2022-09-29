import { RequestHandler } from 'express';
import UserService from '../services/userService';
import { UserInterface } from '../interfaces/userInterface';
import StatusCodes from '../types/statusCodes';

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
}
