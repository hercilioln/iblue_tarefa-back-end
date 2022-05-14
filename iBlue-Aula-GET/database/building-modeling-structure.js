const usuario = require('./model/user-model/user-registration-model');

const buildingDataBase = () => {
    usuario.sync();
}

module.exports = buildingDataBase;