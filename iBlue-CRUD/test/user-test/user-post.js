var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Teste de Usuario', () => {
  it('Criar usuários', (done) => {

    let user = {
      nome: "Hercilio Lopes",
      dataNascimento: "1992-07-11"
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .post('/usuario')
      .type('json')
      .send(user)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(201);

        done();
      })
  });
});