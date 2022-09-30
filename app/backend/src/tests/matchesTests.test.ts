import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { MatchInterface } from '../interfaces/matchInterface';
import { allMatches } from './mocks/matchesMocks';
import MatchesModels from '../models/MatchesModel';
import Matches from '../database/models/Matches';

chai.use(chaiHttp);

const { expect } = chai;
const matchesModel = new MatchesModels();

describe('Matches Tests', () => {
  describe('Ao realizar uma requisição por todas as partidas', () => {
    before(async () => {
      sinon.stub(Matches, 'findAll').resolves(allMatches as Matches[]);
      sinon.stub(matchesModel, 'findAll').resolves(allMatches as MatchInterface[]);
    });
    after(async () => {
      (Matches.findAll as sinon.SinonStub).restore();
      (matchesModel.findAll as sinon.SinonStub).restore();
    });

    it('retorna corretamente todas as partidas', async () => {
      const response: Response = await chai.request(app).get('/matches');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.length(5);
    });
  });
});