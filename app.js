let express = require('express');
let transactionRoutes = require('./routes/transaction');
let payableRoutes = require('./routes/payable');
const bodyParser = require('body-parser');
const errorHandler = require('./controllers/error-handler');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./swagger.json')

let app = express();
app.use(bodyParser.json());

app.use('/transaction', transactionRoutes);
app.use('/payable', payableRoutes);

app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.listen(3000, function () {
    console.log('Server running on port 3000!');
});
