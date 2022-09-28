import StatusCodes from './statusCodes';

interface loginResponse {
  code: StatusCodes,
  error?: string,
  token?: string,
}

export default loginResponse;
