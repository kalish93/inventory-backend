const express = require('express');
const reportController = require('../../controllers/report/reportController');
const apReportController = require('../../controllers/report/ApSummaryController');
const authenticate = require('../../middlewares/authenticate');

const router = express.Router();
router.use(authenticate);

router.get('/customer-aging-report', (req, res) => {
  req.requiredPermissions = ['GenerateCustomerAgingReport'];
  authenticate(req, res, () => reportController.generateCustomerAgingSummary(req, res));
});

router.get('/bank-transaction-report', (req, res) => {
  req.requiredPermissions = ['GenerateBankTransactionReport'];
  authenticate(req, res, () => reportController.generateBankTransactionSummary(req, res));
});

router.get('/ap-aging-report', (req, res) => {
  req.requiredPermissions = ['GenerateAPAgingReport'];
  authenticate(req, res, () => apReportController.generateApAgingSummary(req, res));
});

module.exports = router;