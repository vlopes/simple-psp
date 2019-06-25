let express = require('express');
let transactionController = require('../controllers/transaction-controller');
const expressJoi = require('express-joi-validation')({passError: true});
const createTransaction = require('../validators/create-transaction')

let router = express.Router();

router.post('/', expressJoi.body(createTransaction), transactionController.createTransaction);
router.get('/', transactionController.listTransactions);

module.exports = router;