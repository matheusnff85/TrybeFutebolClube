import * as bcrypt from 'bcryptjs';
import CustomError from '../types/customError';
import StatusCodes from '../types/statusCodes';

const validatePassword = async (hash: string, password: string): Promise<void> => {
  const validate = await bcrypt.compare(password, hash);
  if (!validate) throw new CustomError(StatusCodes.UNAUTHORIZED, 'Unauthorized user');
};

export default validatePassword;
