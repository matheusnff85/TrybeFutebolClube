import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import { MatchInterface } from '../interfaces/matchInterface';

export default class MatchesModel {
  private _matchesModel = Matches;

  public async findAll(): Promise<MatchInterface[] | null> {
    const result = await this._matchesModel.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return result;
  }

  public async findByProgress(progress: boolean): Promise<MatchInterface[] | null> {
    const result = await this._matchesModel.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
      where: { inProgress: progress },
    });
    return result;
  }
}
