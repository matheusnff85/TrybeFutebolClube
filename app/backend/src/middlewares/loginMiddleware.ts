import { Request, Response, NextFunction } from 'express';
import { LoginInterface } from '../interfaces/loginInterface';
import CustomError from '../types/customError';
import StatusCodes from '../types/statusCodes';
import loginSchema from '../validations/userSchema';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body as LoginInterface;
  const { error } = loginSchema.validate({ email, password });
  if (error) throw new CustomError(StatusCodes.SEMANTIC_ERROR, error.details[0].message);
  next();
};
