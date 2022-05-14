const userRegistrationRepository = require('../repository/user-repository/user-registration-respository');

const userRegistrationInterface = async () => {
  const usuarios = await userRegistrationRepository();

  return usuarios;
}

module.exports = userRegistrationInterface;