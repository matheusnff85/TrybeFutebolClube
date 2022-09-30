import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { oneTeam, allTeams } from './mocks/teamsMocks';
import { TeamInterface } from '../interfaces/teamInterface';
import TeamsModels from '../models/TeamsModel';
import Teams from '../database/models/Teams';

chai.use(chaiHttp);

const { expect } = chai;
const teamsModel = new TeamsModels();

describe('Teams testes', () => {
  describe('Ao realizar uma requisição para todos os times', () => {
    before(async () => {
      sinon.stub(Teams, 'findAll').resolves(allTeams as Teams[]);
      sinon.stub(teamsModel, 'findAll').resolves(allTeams as TeamInterface[]);
    });
    after(async () => {
      (Teams.findAll as sinon.SinonStub).restore();
      (teamsModel.findAll as sinon.SinonStub).restore();
    });

    it('Retorna um array com todos os times cadastrados', async () => {
      const response: Response = await chai.request(app).get('/teams');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.length(4);
    });
  });

  describe('Ao realizar uma requisição para apenas um time', () => {
    before(async () => {
      sinon.stub(Teams, 'findOne').resolves({...oneTeam} as Teams);
      sinon.stub(teamsModel, 'findOne').resolves({...oneTeam} as TeamInterface);
    });
    after(async () => {
      (Teams.findOne as sinon.SinonStub).restore();
      (teamsModel.findOne as sinon.SinonStub).restore();
    });

    it('Retorna um array com todos os times cadastrados', async () => {
      const response: Response = await chai.request(app).get('/teams/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.id).to.be.equal(1);
      expect(response.body.teamName).to.be.equal('Flamengo');
    });
  });
});
