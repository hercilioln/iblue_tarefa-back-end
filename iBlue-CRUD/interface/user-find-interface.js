const express = require('express');
const findUser = require('../repository/user-repository/user-find-repository');
const findUserInterface = express.Router();

findUserInterface.get('/api/user', async (request, response) => {
  const listUsers = await findUser(request, response);
  
  return response.status(listUsers.statusCode).json({listUsers}).send();
});

module.exports = findUserInterface;