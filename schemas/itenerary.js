const joi = require("joi");

const schema = joi.object({
  userId: joi.any(),
  name: joi.string().required().messages({
    "any.required": "Name is required",
    "string.empty": "The field 'name' is required",
    "string.base": "Enter the tinerary name",
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "The URL photo is required",
    "string.empty": "Complete the URL photo",
    "string.uri": "The photo must be an url",
    "any.required": "The field 'photo' is required",
  }),
  price: joi.number().min(0).required().messages({
    "any.required": "The Price is required",
    "number.base": "Price must be a number",
  }),
  duration: joi.number().min(1).required().messages({
    "any.required": "The Duration is required",
    "number.base": "Duration must be a number",
  }),
  description: joi.string().required().messages({
    "any.required": "The Description is required",
    "string.empty": "The field 'Description' is required",
    "string.base": "Description must be a string",
  }),
  cityId: joi.any(),
});

module.exports = schema;