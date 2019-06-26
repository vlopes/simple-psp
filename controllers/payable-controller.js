const { Payable } = require('../models');
const utils = require('../utils')

exports.availableFunds = function (req, res, next) {
    Payable.sum('value', { where: { status: 'paid' } }).then((sum) => {
        let formatedSum = utils.centavosToReal(sum)
        res.status(200).send({ message: 'Available funds: ' + formatedSum });
    }).catch(next);
}

exports.waitingFunds = function (req, res, next) {
    Payable.sum('value', { where: { status: 'waiting_funds' } }).then((sum) => {
        let formatedSum = utils.centavosToReal(sum)
        res.status(200).send({ message: 'Waitings funds: ' + formatedSum });
    }).catch(next);
}