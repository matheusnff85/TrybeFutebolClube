import { RequestHandler } from 'express';
import StatusCodes from '../types/statusCodes';
import MatchesServices from '../services/matchesServices';

export default class MatchesController {
  constructor(private matchesServices: MatchesServices = new MatchesServices()) {}

  public findAll: RequestHandler = async (req, res, next) => {
    try {
      const { inProgress } = req.query;
      if (inProgress === 'true' || inProgress === 'false') {
        return '';
      }
      const result = await this.matchesServices.findAll();
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
