let express = require('express');
let app = express();
const bodyParser = require('body-parser')
const Transaction = require('./models').Transaction;
const Payable = require('./models').Payable;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.send('teste')
})


app.post('/transaction', function (req, res) {
    Transaction.create({
        value: req.body.value,
        description: req.body.description,
        paymentMethod: req.body.payment_method,
        cardNumber: req.body.card_number,
        ownerName: req.body.owner_name,
        ccv: req.body.ccv
    }).then((transaction) => {
        let tax = 0
        let status = ''
        let paymentDate = new Date()

        if (transaction.paymentMethod == 'debit_card') {
            tax = 0.97
            status = 'paid'
        } else {
            tax = 0.95
            status = 'waiting_funds'
            paymentDate.setDate(paymentDate.getDate() + 30)
        }

        let value = transaction.value * tax

        return Payable.create({
            transactionId: transaction.id,
            value: value,
            status: status,
            paymentDate: paymentDate
        })
    })
        .then(() => {
            res.status(201).send(
                { message: 'The transaction was successfuly created!' }
            )
        })
});

app.listen(3000, function () {
    console.log('Server running on port 3000!');
});
