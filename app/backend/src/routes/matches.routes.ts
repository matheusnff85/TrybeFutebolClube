import { Router } from 'express';
import { validateToken } from '../middlewares/validateToken';
import MatchesController from '../controllers/matchesController';

const matchesController = new MatchesController();
const matchesRouter = Router();

matchesRouter.get('/matches', matchesController.findAll);
matchesRouter.post('/matches', validateToken, matchesController.create);

export default matchesRouter;
