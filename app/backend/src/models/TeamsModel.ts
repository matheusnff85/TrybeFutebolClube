import Teams from '../database/models/Teams';
import { TeamInterface } from '../interfaces/teamInterface';

export default class TeamsModel {
  private _teamsModel = Teams;

  public async findAll(): Promise<TeamInterface[] | null> {
    const result = await this._teamsModel.findAll();
    return result;
  }

  public async findOne(id: string): Promise<TeamInterface | null> {
    const result = await this._teamsModel.findOne({ where: { id } });
    return result;
  }
}
