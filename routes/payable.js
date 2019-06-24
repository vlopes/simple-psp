let express = require('express');
let payableController = require('../controllers/payable-controller');

let router = express.Router();

router.get('/available_funds', payableController.availableFunds);
router.get('/waiting_funds', payableController.waitingFunds);

module.exports = router;