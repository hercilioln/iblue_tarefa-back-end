const Joi = require('joi');

const updateUserSchema = Joi.object().keys({
  nome: Joi.string().min(5).max(30).required(), 
  dataNascimento: Joi.date().required(),
})

const validacaoUpadateUser = (request, response) => {
  const validation = updateUserSchema.validate(request.body);

  const { error } = validation;
  if (error) {
    response.status(422).json({
      message: error.details[0].message,
      data: {
        message: validation.value,
      }
    })
  }
  return true;
}

module.exports = validacaoUpadateUser;