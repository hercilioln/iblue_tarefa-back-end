const Joi = require('joi');

const createUserSchema = Joi.object().keys({
  nome: Joi.string().min(5).max(30).required(),
  dataNascimento: Joi.date().required(),
})

const validacaoCreateUser = (request, response) => {
  const validation = createUserSchema.validate(request.body);

  const { error } = validation;
  if (error) {
    response.status(422).json({
      message: error.details[0].message,
      data: {
        message: validation.value,
      }
    });
  }
  return true;
}

module.exports = validacaoCreateUser;