const { Transaction, Payable } = require('../models');
const utils = require('../utils')

exports.createTransaction = function (req, res, next) {
    let value = utils.reaisToCentavos(req.body.value)

    Transaction.create({
        value: value,
        description: req.body.description,
        paymentMethod: req.body.paymentMethod,
        cardNumber: req.body.cardNumber,
        ownerName: req.body.ownerName,
        cvv: req.body.cvv
    })
        .then(createPayableForTransaction)
        .then(res.status(201).send(
            { message: 'The transaction was successfuly created!' }
        ))
        .catch(next);
};

const createPayableForTransaction = (transaction) => {
    const { tax, status, paymentDate } = generatePayableData(
        transaction.paymentMethod
    );

    let payableValue = transaction.value * tax;
    payableValue = Math.floor(payableValue);

    return Payable.create({
        transactionId: transaction.id,
        value: payableValue,
        status: status,
        paymentDate: paymentDate
    });
}

const generatePayableData = (paymentMethod) => {
    let paymentDate = new Date();

    if (paymentMethod == 'debit_card') {
        return {
            tax: 0.97,
            status: 'paid',
            paymentDate: paymentDate
        };
    }

    if (paymentMethod == 'credit_card') {
        paymentDate.setDate(paymentDate.getDate() + 30)

        return {
            tax: 0.95,
            status: 'waiting_funds',
            paymentDate: paymentDate
        };
    }
}

exports.listTransactions = function (req, res, next) {
    Transaction.findAll().then(
        (transactions) => res.status(200).send(transactions)
    ).catch(next);
}