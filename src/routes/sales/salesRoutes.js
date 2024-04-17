const express = require('express');
const salesController = require('../../controllers/sales/salesController');
const authenticate = require('../../middlewares/authenticate');

const router = express.Router();
router.use(authenticate);

router.get('/sales', (req, res) => {
  req.requiredPermissions = ['GetSales'];
  authenticate(req, res, () => salesController.getSales(req, res));
});

router.post('/sales', (req, res) => {
  req.requiredPermissions = ['CreateSale'];
  authenticate(req, res, () => salesController.createSale(req, res));
});

router.get('/sales/:id', (req, res) => {
  req.requiredPermissions = ['GetSaleById'];
  authenticate(req, res, () => salesController.getSaleById(req, res));
});

router.delete('/sales/:id', (req, res) => {
  req.requiredPermissions = ['DeleteSale'];
  authenticate(req, res, () => salesController.deleteSaleById(req, res));
});

router.put('/sales/:id', (req, res) => {
  req.requiredPermissions = ['UpdateSale'];
  authenticate(req, res, () => salesController.updateSale(req, res));
});

module.exports = router;
