import UserModel from '../models/UserModel';
import { LoginInterface } from '../interfaces/loginInterface';
import CustomError from '../types/customError';
import StatusCodes from '../types/statusCodes';
import bcryptValidate from '../utils/bcryptValidate';
import generateToken from '../utils/generateToken';

export default class UserService {
  constructor(private userModel: UserModel = new UserModel()) {}

  public async login(loginObj: LoginInterface) {
    const { email, password } = loginObj;
    const result = await this.userModel.findOne(email);
    if (!result) throw new CustomError(StatusCodes.UNAUTHORIZED, 'Incorrect email or password');
    await bcryptValidate(result.password, password);
    const token = generateToken(email);
    return token;
  }
}
