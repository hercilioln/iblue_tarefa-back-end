const express = require('express');
const router = express.Router();
const userRegistrationInterface = require('../interface/user-registration-interface');

router.get('/usuarios', async (req, res) => {
    const usuarios = await userRegistrationInterface();
  
    return response.status(200).json({ data: usuarios });
});

router.post('/usuarios', async (req, res) => {
    const { nome, dataNascimento } = request.body;
    const usuarios = await userRegistrationInterface(nome, dataNascimento);    
  
    return response.status(200).json({ data: usuarios });
});



module.exports = router;