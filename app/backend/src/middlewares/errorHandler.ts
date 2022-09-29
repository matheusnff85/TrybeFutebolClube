import { ErrorRequestHandler } from 'express';
import CustomError from '../types/customError';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof CustomError) {
    return res.status(error.code).json({ message: error.message });
  }
  return res.status(500).json('Internal server error');
};

export default errorHandler;
