const USER_REGISTRATION_MODEL = require('./model/user-model/user-registration-model');

const buildingDataBase = () => {
    USER_REGISTRATION_MODEL.sync();
}

module.exports = buildingDataBase;

