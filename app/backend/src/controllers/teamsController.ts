import { RequestHandler } from 'express';
import TeamsServices from '../services/teamsServices';
import StatusCodes from '../types/statusCodes';

export default class TeamsController {
  constructor(private teamsServices: TeamsServices = new TeamsServices()) {}

  public findAll: RequestHandler = async (_req, res, next) => {
    try {
      const result = await this.teamsServices.findAll();
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  public findOne: RequestHandler = async (req, res, next) => {
    try {
      const result = await this.teamsServices.findOne(req.body.id);
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
