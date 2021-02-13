const Joi = require('joi');

// Create schema for request body validation
const Request = Joi.object().keys({
    point: Joi.object({
        long: Joi.number().required(),
        lat: Joi.number().required()
    }),
    radius: Joi.number().required(),
    startDate: Joi.date().iso(),
    endDate: Joi.date().iso()
});

module.exports = Request;