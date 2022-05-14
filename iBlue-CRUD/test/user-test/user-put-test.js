var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Teste de Usuário', () => {
  it('Atualizar usuários', (done) => {

    let user = {
      name: "Hercilio Lopes Nunes",
      birthDate: "1992-07-11"
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .put('/usuario/{id}')
      .type('json')
      .send(user)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(200);

        done();
      })
  });
});