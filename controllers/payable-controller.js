const Payable = require('../models').Payable;

exports.availableFunds = function (req, res) {
    Payable.sum('value', { where: { status: 'paid' } }).then((sum) => {
        sum = sum ? sum : 0;
        res.status(200).send({ message: 'Available funds: ' + (sum / 100) });
    });
}

exports.waitingFunds = function (req, res) {
    Payable.sum('value', { where: { status: 'waiting_funds' } }).then((sum) => {
        sum = sum ? sum : 0;
        res.status(200).send({ message: 'Waitings funds: ' + (sum / 100) });
    });
}