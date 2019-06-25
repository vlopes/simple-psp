const Joi = require('joi');

const schema = Joi.object({
    value: Joi.number().positive().precision(2).required(),
    description: Joi.string().required(),
    paymentMethod: Joi.string().valid('credit_card', 'debit_card').required(),
    cardNumber: Joi.string().creditCard().required(),
    ownerName: Joi.string().required(),
    cvv: Joi.string().regex(/^\d{3}$/).required()
});

module.exports = schema;