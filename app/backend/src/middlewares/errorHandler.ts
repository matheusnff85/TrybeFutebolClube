import { ErrorRequestHandler } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import StatusCodes from '../types/statusCodes';
import CustomError from '../types/customError';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof CustomError) {
    return res.status(error.code).json({ message: error.message });
  }
  if (error instanceof JsonWebTokenError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token must be a valid token' });
  }
  return res.status(500).json(error);
};

export default errorHandler;
