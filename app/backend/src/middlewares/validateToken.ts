import { NextFunction, Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import CustomError from '../types/customError';
import StatusCodes from '../types/statusCodes';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const validateToken = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw new CustomError(StatusCodes.UNAUTHORIZED, 'Token must be a valid token');
  const data = jwt.verify(token, JWT_SECRET);
  if (!data) throw new CustomError(StatusCodes.UNAUTHORIZED, 'Token must be a valid token');
  next();
};

const getEmailByToken = (token: string) => {
  const result = jwt.verify(token, JWT_SECRET);
  return (<any>result).email;
};

export { validateToken, getEmailByToken };
