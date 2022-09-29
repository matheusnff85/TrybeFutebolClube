import User from '../database/models/User';
import { UserInterface } from '../interfaces/userInterface';

export default class UserModel {
  private _userModel = User;

  public async findOne(email: string): Promise<UserInterface | null> {
    const result = await this._userModel.findOne({ where: { email } });
    return result;
  }
}
