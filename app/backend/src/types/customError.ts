import StatusCodes from './statusCodes';

class CustomError extends Error {
  constructor(public code: StatusCodes, public message: string) {
    super(message);
  }
}

export default CustomError;
