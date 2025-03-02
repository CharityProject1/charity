const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');

// Route to handle payment submission
router.post('/process-payment', paymentsController.processPayment);

module.exports = router;
