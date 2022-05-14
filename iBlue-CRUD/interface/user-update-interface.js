const express = require('express');
const validacaoUpadateUser = require('../controller/update-user-controller');
const userUpdate = require('../repository/user-repository/user-update-repository');
const updateUserInterface = express.Router();

updateUserInterface.put('/api/user/:id', async (request, response) => {
  const isFieldsValid = validacaoUpadateUser(request, response);

  if (isFieldsValid != true)  response.sendStatus(400).send();
  const userUpdated = await userUpdate(request, response);
  
  response.status(userUpdated.statusCode).json({userUpdated}).send();
});

module.exports = updateUserInterface;