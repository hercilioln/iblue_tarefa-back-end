const express = require('express');
const router = express.Router();
const userRegistrationInterface = require('../interface/user-interface')

router.get('/usuarios', async (req, res) => {
    const usuarios = await userRegistrationInterface();
  
    return response.status(200).json({ data: usuarios });
  });



/* 
router.get('/teste', function (req, res){
    res.send('TESTE TESTE');
});

router.get('/json', function (req, res){
    res.json([{
        id: 1,
        title: "titulo",

    }]);
});


router.get('/teste', function (req, res){
    res.send('TESTE TESTE');
});
 */

module.exports = router;