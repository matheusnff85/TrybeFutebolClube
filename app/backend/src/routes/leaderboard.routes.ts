import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardController = new LeaderboardController();
const leaderboardRouter = Router();

leaderboardRouter.get('/leaderboard', leaderboardController.getAll);
leaderboardRouter.get('/leaderboard/home', leaderboardController.getHome);
leaderboardRouter.get('/leaderboard/away', leaderboardController.getAway);

export default leaderboardRouter;
