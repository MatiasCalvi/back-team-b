const joi = require('joi')


const schema = joi.object({ 
        itineraryId: joi.string(),
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
        icon: joi.string()
        .min(3)
        .required()
        .uri()
        .messages({
            "any.required": "a URL photo is required",
            "string.empty": "complete the URL photo, please",
          }),
        iconBack: joi.string()
        .min(3)
        .required()
        .uri()
        .messages({
            "any.required": "a URL photo is required",
            "string.empty": "complete the URL photo, please",
            }),
        userId: joi.string(),

})

module.exports = schema