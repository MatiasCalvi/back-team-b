const joi = require("joi");


const schema = joi.object({
  userId:joi.any(),
  showId:joi.any(),
  date:joi.any()
  .messages({
    "any.required": "The date is required",
  }),
  comment:joi.string()
  .required()
  .min(3)
  .max(100)
  .messages({
    "any.required": "Enter a commentary",
    "string.empty": "A commentary is required",
    "string.base": "Enter a commentary please",
    "string.min": "you have to enter at least 3 characters",
    "string.max": "the limit is 100 characters",
  }),
  photo:joi.any()

});

module.exports = schema;