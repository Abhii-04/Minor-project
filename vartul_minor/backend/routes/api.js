const express = require('express');
const { getAllParts, getAllPurchaseHistory } = require('../controllers/partsController');

const router = express.Router();

router.get('/parts', getAllParts);
router.get('/purchase-history', getAllPurchaseHistory);

module.exports = router;
