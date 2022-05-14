const express = require('express');
const validacaoCreateUser = require('../controller/create-user-controller');
const userRegistrationRepository = require('../repository/user-repository/user-registration-respository');
const createUserInterface = express.Router();

createUserInterface.post('/usuario', async (request, response) => {
  const isFieldsValid = validacaoCreateUser(request, response);
  console.log(isFieldsValid);
  if(isFieldsValid != true) return response.sendStatus(400).send();

  const userCreated = await userRegistrationRepository(request, response);
  
  response.status(userCreated.statusCode).json({userCreated}).send();
});

module.exports = createUserInterface;