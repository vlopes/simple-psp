const Payable = require('../models').Payable;

exports.availableFounds = function (req, res) {
    Payable.sum('value', { where: { status: 'paid' } }).then((sum) => {
        res.status(200).send({ message: 'Available funds: ' + (sum / 100) });
    });
}

exports.waitingFounds = function (req, res) {
    Payable.sum('value', { where: { status: 'paid' } }).then((sum) => {
        res.status(200).send({ message: 'Available funds: ' + (sum / 100) });
    });
}