let express = require('express');
let transactionRoutes = require('./routes/transaction')
let payableRoutes = require('./routes/payable')
const bodyParser = require('body-parser');
const errorHandler = require('./controllers/error-handler')

let app = express();
app.use(bodyParser.json());

app.use('/transaction', transactionRoutes);
app.use('/payable', payableRoutes);

app.use(errorHandler);

app.listen(3000, function () {
    console.log('Server running on port 3000!');
});
