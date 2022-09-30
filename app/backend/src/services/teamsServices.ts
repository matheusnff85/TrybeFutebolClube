import CustomError from '../types/customError';
import StatusCodes from '../types/statusCodes';
import TeamsModel from '../models/TeamsModel';

export default class TeamsServices {
  constructor(private teamsModel: TeamsModel = new TeamsModel()) {}

  public async findAll() {
    const result = await this.teamsModel.findAll();
    return result;
  }

  public async findOne(id: string) {
    const result = await this.teamsModel.findOne(id);
    if (!result) throw new CustomError(StatusCodes.NOT_FOUND, 'Team not found');
    return result;
  }
}
