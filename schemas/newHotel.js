/* const joi = require ('joi')

const schema = joi.object ( {
    name: joi.string()
        .required()
        .min(5)
        .max(25)
        .messages({
            "any.required": "complete the name imput is required",
            "string.empty": "nothing was writed",
            "string.min": "you have to enter at least 5 characters",
            "string.max": "the limit is 25 characters",
        }),
    photo: [joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'complete the img imput is required',
            'string.empty': 'no url was sended',
            'string.uri':'url was not valid'
        })],
    capacity: joi.number()
        .required()
        .min(100)
        .max(100000)
        .messages({
            "number.empty": "enter the number of the capacity please",
            "number.base": "enter the number of the capacity please",
        }),
    cityId:joi.string()
        .required()
        .min(24)
        .max(24)
        .messages({
            "any.required": "complete the name of the city is required",
            "string.empty": "nothing was writed",
            "string.min": "you have to enter at least 24 characters",
            "string.max": "the limit is 24 characters",
        }) ,
    userId:joi.string()
        .required()
        .min(24)
        .max(24)
        .messages({
            "any.required": "complete the user id is required",
            "string.empty": "nothing was writed",
            "string.min": "you have to enter at least 24 characters",
            "string.max": "the limit is 24 characters",
        }) ,
}

)

module.export = schema */

const joi = require('joi')

const schema = joi.object({ 
    name: joi.string()
        .required()
        .min(5)
        .max(25)
        .messages({
            "any.required": "a name imput is required",
            "string.empty": "nothing was writed",
            "string.min": "you have to enter at least 5 characters",
            "string.max": "the limit is 25 characters",
        }),
        photo: joi.string()
        .min(3)
        .required()
        .uri()
        .messages({
            "any.required": "a URL photo is required",
            "string.empty": "complete the URL photo, please",
          }),
        capacity: joi.number()
            .required()
            .min(100)
            .max(1000000)
            .messages({
                "number.empty": "a number of capacity is required",
                "number.base": "enter the number of the capacity please",
                "number.min": "you have to enter at least 100 characters",
                "number.max": "the limit is 1000000 characters",
            }),
        cityId: joi.string()
            .required()
            .min(24)
            .max(24)
            .messages({
                "any.required": "a cityID is required",
                "string.empty": "nothing was writed",
                "string.min": "you have to enter at least 24 characters",
                "string.max": "the limit is 24 characters",
            }),
        userId: joi
            .string()
            .required()
            .min(24)
            .max(24)
            .messages({
                "any.required": "complete the name of the city is required",
                "string.empty": "nothing was writed",
                "string.min": "you have to enter at least 24 characters",
                "string.max": "the limit is 24 characters",
            })

})

module.exports = schema