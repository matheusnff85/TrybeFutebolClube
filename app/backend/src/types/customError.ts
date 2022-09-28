import StatusCodes from './statusCodes';

class CustomError extends Error {
  public code: StatusCodes;
  public message: string;

  constructor(code: StatusCodes, message: string) {
    super(message);
  }
}

export default CustomError;
