const USER_REGISTRATION_MODEL = require('../../database/model/user-model/user-registration-model');
const httpStatusResponse = require('../../commons/http-response/http-status-response');

const userUpdate = async (request, response) => {
  try {
    const { nome, dataNascimento } = request.body;
    const id = request.params.id;

    await USER_REGISTRATION_MODEL.update({
      id,
      nome,
      dataNascimento
    }, {
      where: {
        id: id,
      }
    });

    return httpStatusResponse(200, ("Usuário atualizado com sucesso"), 'Nenhum erro encontrado');

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'User update repository');
    return finalError;
  }
}

module.exports = userUpdate;