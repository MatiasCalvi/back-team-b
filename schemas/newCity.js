const joi = require('joi')

const schema = joi.object({ 
    name: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            "any.required": "NAME_REQUIRED",
            "string.empty": "NAME_REQUIRED",
            "string.min": "NAME_TOO_SHORT",
            "string.max": "NAME_TOO_LARGE",
        }),
    continent: joi.string()
        .required()
        .min(4)
        .messages({
            'any.required': 'CONTINENT_REQUIRED',
            'number.base': 'CONTINENT_REQUIRED',
            'number.min': 'INVALID_CONTINENT',
        }),
    photo: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'IMG_REQUIRED',
            'string.empty': 'IMG_REQUIRED',
            'string.uri':'INVALID_URL'
        }),
    population: joi.number()
        .required()
        .messages({
            'any.required': 'POPULATION_REQUIRED',
            'string.empty': 'POPULATION_REQUIRED',
        }),
    userId: joi
        .string()
        .required()
        .min(24)
        .max(24) 
})

module.exports = schema