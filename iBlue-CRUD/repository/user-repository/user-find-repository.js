const USER_REGISTRATION_MODEL = require('../../database/model/user-model/user-registration-model');
const httpStatusResponse = require('../../commons/http-response/http-status-response');

const findUser = async (request, response) => {
  try {
    const id = request.params.id;

    const user = await USER_REGISTRATION_MODEL.findAll({
      where: {
        id: id,
      }
    });

    if(user.length == 0) return httpStatusResponse(400, ("User not exists"), 'Not found error');

    return httpStatusResponse(200, (user), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(404, (error.message), 'User find repository');
    return finalError;
  }
}

module.exports = findUser;