const express = require('express');
const app = express();
const rotas = require('./routes/route');

const buildingDataBase = require('./database/building-modeling-structure');
buildingDataBase.sequlize.sync();

app.use(rotas);

app.listen(3001, ()=> console.log("Server funcionando na porta 3001")); 