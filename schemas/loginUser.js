const joi = require('joi')

const schema = joi.object({
    email: joi.string()
        .required()
        .min(10)
        .max(50)
        .messages({
            'any.required': 'mail or password is required',
            'string.empty': 'mail or password is required',
            'string.min': 'your mail is to short',
            'string.max': 'Nyour mail is to long',
        }),
    password: joi.string()
        .required()
        .min(5)
        .max(20)
        .messages({
            'any.required': 'mail or password is required',
            'number.min': 'the password required min is 10  ',
            'number.min': 'the password required max is 10',
        }),
})

module.exports = schema