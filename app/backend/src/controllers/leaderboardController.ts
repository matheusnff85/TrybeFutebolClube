import { RequestHandler } from 'express';
import LeaderboardService from '../services/leaderboardServices';
import StatusCodes from '../types/statusCodes';

export default class LeaderboardController {
  constructor(private leaderboardServices = new LeaderboardService()) {}

  public getAway: RequestHandler = async (_req, res, next) => {
    try {
      const result = await this.leaderboardServices.getAway();
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  public getHome: RequestHandler = async (_req, res, next) => {
    try {
      const result = await this.leaderboardServices.getHome();
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  public getAll: RequestHandler = async (_req, res, next) => {
    try {
      const result = await this.leaderboardServices.getAll();
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
