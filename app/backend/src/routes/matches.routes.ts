import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const matchesController = new MatchesController();
const matchesRouter = Router();

matchesRouter.get('/matches', matchesController.findAll);

export default matchesRouter;
