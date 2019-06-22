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
        payment_method: req.body.payment_method,
        card_number: req.body.card_number,
        owner_name: req.body.owner_name,
        ccv: req.body.ccv
    }).then((transaction) => {
        let tax = 0
        let status = ''

        if (transaction.payment_method == 'debit_card') {
            tax = 0.97
            status = 'paid'
        } else {
            tax = 0.95
            status = 'waiting_funds'
        }

        let value = transaction.value * tax

        Payable.create({
            transaction_id: transaction.id,
            value: value,
            status: status,
            payment_date: new Date()
        }).then((payable) => {
            res.status(201).send(transaction)
        })
    })
});

app.listen(3000, function () {
    console.log('Server running on port 3000!');
});
