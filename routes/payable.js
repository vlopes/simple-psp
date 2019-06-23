let express = require('express');
let payableController = require('../controllers/payable_controller')

let router = express.Router();

router.get('/available_funds', payableController.availableFounds);
router.get('/waiting_funds', payableController.waitingFounds);

module.exports = router;