import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const teamsController = new TeamsController();
const teamsRouter = Router();

teamsRouter.get('/teams', teamsController.findAll);
teamsRouter.get('/teams/:id', teamsController.findOne);

export default teamsRouter;
