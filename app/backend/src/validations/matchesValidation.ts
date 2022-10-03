import * as Joi from 'joi';
import CustomError from '../types/customError';
import { CreatedMatchInterface } from '../interfaces/matchInterface';
import StatusCodes from '../types/statusCodes';
import TeamsModel from '../models/TeamsModel';

const matchSchema = Joi.object({
  homeTeam: Joi.number().required(),
  awayTeam: Joi.number().required(),
  homeTeamGoals: Joi.number().required(),
  awayTeamGoals: Joi.number().required(),
  inProgress: Joi.boolean().required(),
});

const teamsModel = new TeamsModel();
const equalTeamsMessage = 'It is not possible to create a match with two equal teams';

const validateNewMatch = async (newMatch: CreatedMatchInterface): Promise<void> => {
  const { homeTeam, awayTeam } = newMatch;
  if (homeTeam === awayTeam) {
    throw new CustomError(StatusCodes.UNAUTHORIZED, equalTeamsMessage);
  }

  const { error } = matchSchema.validate(newMatch);
  if (error) throw new CustomError(StatusCodes.BAD_REQUEST, 'All fields must be filled');

  const findHomeTeam = await teamsModel.findOne(`${homeTeam}`);
  const findAwayTeam = await teamsModel.findOne(`${awayTeam}`);
  if (!findHomeTeam || !findAwayTeam) {
    throw new CustomError(StatusCodes.NOT_FOUND, 'There is no team with such id!');
  }
};

export default validateNewMatch;
