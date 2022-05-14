const Joi = require('joi');

const updateUserSchema = Joi.object().keys({
  nome: Joi.string().min(5).max(30).required().messages({
    'string.base': `"nome" should be a type of 'text'`,
    'string.empty': `"nome" cannot be an empty field`,
    'string.min': `"nome" should have a minimum length of {#limit}`,
    'any.required': `"nome" is a required field`
  }), 
  dataNascimento: Joi.date().required().messages({
    'string.base': `"dataNascimento" should be a type of 'text'`,
    'string.empty': `"dataNascimento" cannot be an empty field`,
    'string.min': `"dataNascimento" should have a minimum length of {#limit}`,
    'any.required': `"dataNascimento" is a required field`
  }),
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