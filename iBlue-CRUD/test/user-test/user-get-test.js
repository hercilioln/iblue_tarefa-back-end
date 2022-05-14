var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Teste de Usuario', () => {
  it('Retornar todos os usuarios', (done) => {

    chai.request('localhost:' + process.env.NODE_PORT)
      .get('/usuario')
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