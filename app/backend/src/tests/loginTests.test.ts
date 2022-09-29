import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import oneUser from './mocks/userMockst';
import UserModel from '../models/UserModel';
import { UserInterface } from '../interfaces/userInterface';
import User from '../database/models/User';

chai.use(chaiHttp);

const { expect } = chai;
const userModel = new UserModel();

describe('Login tests', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  describe('Os dados informados estão corretos', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves({...oneUser} as User);
      sinon.stub(userModel, 'findOne').resolves({...oneUser} as UserInterface);
    });

    after(async () => {
      (User.findOne as sinon.SinonStub).restore();
      (userModel.findOne as sinon.SinonStub).restore();
    });

    it('Retorna o status de sucesso e o token', async () => {
      const response: Response = await chai.request(app).post('/login').send({
        email: oneUser.email, 
        password: 'secret_user'
      });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.a.key('token');
    });

    // it('teste', async () => {
    //   const token: Response = await chai.request(app).post('/login').send({
    //     email: oneUser.email, 
    //     password: 'secret_user'
    //   });
    //   const response: Response = await chai.request(app).get('/login/validate').set('authorization', token.body)
      
    //   console.log(response.body);
    // })
  });

  describe('Os dados informados estão incorretos', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(userModel, 'findOne').resolves(null);
    });
    after(async () => {
      (User.findOne as sinon.SinonStub).restore();
      (userModel.findOne as sinon.SinonStub).restore();
    });

    it('A requisição retorna um erro e uma mensagem', async () => {
      const response: Response = await chai.request(app).post('/login').send({
        email: oneUser.email, password: 'senha_incorreta'
      });

      expect(response.status).to.be.equal(401);
      expect(response.body.message).to.be.equal('Incorrect email or password');
    });
  });

  describe('Faltam alguns dados ou eles foram informados incorretamente', () => {

    it('O email não foi informado', async () => {
      const response: Response = await chai.request(app).post('/login').send({
        password: 'senha_incorreta'
      });

      expect(response.status).to.be.equal(400);
      expect(response.body.message).to.be.equal('All fields must be filled');
    });

    it('A senha não foi informada', async () => {
      const response: Response = await chai.request(app).post('/login').send({
        email: oneUser.email,
      });

      expect(response.status).to.be.equal(400);
      expect(response.body.message).to.be.equal('All fields must be filled');
    });

  });
});
