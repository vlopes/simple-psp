let express = require('express');
let app = express();
const bodyParser = require('body-parser')
const Transaction = require('./models').Transaction;

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
    }).then((transaction) => res.status(201).send(transaction))
});

app.listen(3000, function () {
    console.log('Server running on port 3000!');
});
