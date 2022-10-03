import { RequestHandler } from 'express';
import StatusCodes from '../types/statusCodes';
import MatchesServices from '../services/matchesServices';

export default class MatchesController {
  constructor(private matchesServices: MatchesServices = new MatchesServices()) {}

  public findAll: RequestHandler = async (req, res, next) => {
    try {
      const { inProgress } = req.query;
      if (inProgress === 'true' || inProgress === 'false') {
        const result = await this.matchesServices.findByProgress(inProgress === 'true');
        return res.status(200).json(result);
      }
      const result = await this.matchesServices.findAll();
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  public create: RequestHandler = async (req, res, next) => {
    try {
      const newMatch = req.body;
      const result = await this.matchesServices.create(newMatch);
      return res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  };

  public finish: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await this.matchesServices.finish(id);
      return res.status(StatusCodes.OK).json({ message: result });
    } catch (error) {
      next(error);
    }
  };

  public update: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await this.matchesServices.update(req.body, id);
      return res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  };
}
