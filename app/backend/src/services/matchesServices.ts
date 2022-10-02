import { CreatedMatchInterface } from '../interfaces/matchInterface';
import MatchesModel from '../models/MatchesModel';

export default class MatchesServices {
  constructor(private matchesModel: MatchesModel = new MatchesModel()) {}

  public async findAll() {
    const result = await this.matchesModel.findAll();
    return result;
  }

  public async findByProgress(progress: boolean) {
    const result = await this.matchesModel.findByProgress(progress);
    return result;
  }

  public async create(newMatch: CreatedMatchInterface) {
    // validate
    const result = await this.matchesModel.create(newMatch);
    return result;
  }
}
