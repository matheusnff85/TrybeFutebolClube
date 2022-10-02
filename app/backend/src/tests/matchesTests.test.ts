import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { MatchInterface, CreatedMatchInterface } from '../interfaces/matchInterface';
import { allMatches,
  inProgressMatches,
  finishedMatches,
  newMatch,
  createdMatch } from './mocks/matchesMocks';
import MatchesModels from '../models/MatchesModel';
import Matches from '../database/models/Matches';
import oneUser from './mocks/userMocks';
import UserModel from '../models/UserModel';
import User from '../database/models/User';
import { UserInterface } from '../interfaces/userInterface';

chai.use(chaiHttp);

const { expect } = chai;
const matchesModel = new MatchesModels();
const userModel = new UserModel();

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

  describe('Ao realizar uma requisição por partidas em andamento', () => {
    before(async () => {
      sinon.stub(Matches, 'findAll').resolves(inProgressMatches as Matches[]);
      sinon.stub(matchesModel, 'findAll').resolves(inProgressMatches as MatchInterface[]);
    });
    after(async () => {
      (Matches.findAll as sinon.SinonStub).restore();
      (matchesModel.findAll as sinon.SinonStub).restore();
    });

    it('Retorna somente as partidas em progresso', async () => {
      const response: Response = await chai.request(app).get('/matches').query({ inProgress: 'true' });

      expect(response.status).to.be.equal(200);
      expect(response.body[0].inProgress).to.be.equal(true);
    });
  });

  describe('Ao realizar uma requisição por partidas já terminadas', () => {
    before(async () => {
      sinon.stub(Matches, 'findAll').resolves(finishedMatches as Matches[]);
      sinon.stub(matchesModel, 'findAll').resolves(finishedMatches as MatchInterface[]);
    });
    after(async () => {
      (Matches.findAll as sinon.SinonStub).restore();
      (matchesModel.findAll as sinon.SinonStub).restore();
    });

    it('Retorna somenta as partidas que ja acabaram', async () => {
      const response: Response = await chai.request(app).get('/matches').query({ inProgress: 'false' });

      expect(response.status).to.be.equal(200);
      expect(response.body[0].inProgress).to.be.equal(false);
    });
  });

  describe('Ao criar uma nova partida', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves({...oneUser} as User);
      sinon.stub(userModel, 'findOne').resolves({...oneUser} as UserInterface);

      sinon.stub(Matches, 'create').resolves(createdMatch as Matches);
      sinon.stub(matchesModel, 'create').resolves(createdMatch as CreatedMatchInterface);
    });
    after(async () => {
      (User.findOne as sinon.SinonStub).restore();
      (userModel.findOne as sinon.SinonStub).restore();

      (Matches.create as sinon.SinonStub).restore();
      (matchesModel.create as sinon.SinonStub).restore();
    });

    it('Retorna um objeto com a nova partida criada', async () => {
      const getToken = await chai.request(app).post('/login')
          .send({ email: oneUser.email, password: 'secret_user' });
      const { token } = getToken.body;

      const response: Response = await chai.request(app).post('/matches').send(newMatch).set('authorization', token);

      expect(response.status).to.be.equal(201);
      expect(response.body.id).to.be.equal(1);
    });
  })
});