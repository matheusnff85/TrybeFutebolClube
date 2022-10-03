import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import { CreatedMatchInterface,
  MatchInterface, updateMatchGoals } from '../interfaces/matchInterface';

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

  public async create(newMatch: CreatedMatchInterface): Promise<MatchInterface> {
    const result = await this._matchesModel.create(newMatch);
    return result;
  }

  public async finish(id: string): Promise<string> {
    await this._matchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
    return 'Finished';
  }

  public async update(goalsObject: updateMatchGoals, id: string): Promise<string> {
    const { homeTeamGoals, awayTeamGoals } = goalsObject;
    await this._matchesModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return 'Match Updated';
  }
}
