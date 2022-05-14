const express = require('express');
const app = express();
const userRegistration = require('./interface/user-registration-interface');
const userUpdate = require('./interface/user-update-interface');
const userFind = require('./interface/user-find-interface');

app.use(userRegistration);
app.use(userFind);
app.use(userUpdate)



app.listen(3001, ()=> console.log("Server funcionando na porta 3001")); 