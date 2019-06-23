let express = require('express');
let transactionController = require('../controllers/transaction_controller')

let router = express.Router();

router.post('/', transactionController.createTransaction);
router.get('/', transactionController.listTransactions);

module.exports = router;