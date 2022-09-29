import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
// import userModel from '../models/UserModel';
import oneUser from './mocks/userMockst';
import UserModel from '../models/UserModel';

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
      sinon
        .stub(userModel, 'findOne')
        .resolves(oneUser);
    });

    after(async () => {
      (userModel.findOne as sinon.SinonStub).restore();
    });

    it('Retorna o status de sucesso e o token', async () => {
      const response: Response = await chai.request(app).post('/login').send({
        email: oneUser.email, 
        password: 'secret_user'
      });
      console.log(response.body);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.a.key('token');
    });
  });
});
