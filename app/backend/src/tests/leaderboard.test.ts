import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { leaderboard,
  finishedMatches, homeLeaderboard, awayLeaderboard } from './mocks/leaderboardMocks';
import { MatchInterface } from '../interfaces/matchInterface';
import MatchesModels from '../models/MatchesModel';
import Matches from '../database/models/Matches';

chai.use(chaiHttp);

const { expect } = chai;
const matchesModel = new MatchesModels();

describe('Leaderboard testes', () => {
  describe('Realiza a requisição a rota de leaderboard', () => {
    before(async () => {
      sinon.stub(Matches, 'findAll').resolves(finishedMatches as Matches[]);
      sinon.stub(matchesModel, 'findAll').resolves(finishedMatches as MatchInterface[]);
    });
    after(async () => {
      (Matches.findAll as sinon.SinonStub).restore();
      (matchesModel.findAll as sinon.SinonStub).restore();
    });

    it('Ao buscar por todos os times', async () => {
      const response: Response = await chai.request(app).get('/leaderboard');

      expect(response.status).to.be.equal(200);
      expect(response.body[0].name).to.be.equal(leaderboard[0].name);
    });

    it('Ao buscar pelos times da casa', async () => {
      const response: Response = await chai.request(app).get('/leaderboard/home');

      expect(response.status).to.be.equal(200);
      expect(response.body[0].name).to.be.equal(homeLeaderboard[0].name);
    });
    
    it('Ao buscar pelos times visitantes', async () => {
      const response: Response = await chai.request(app).get('/leaderboard/away');

      expect(response.status).to.be.equal(200);
      expect(response.body[0].name).to.be.equal(awayLeaderboard[0].name);
    });
  });
});
