const Part = require('../models/Part');
const PurchaseHistory = require('../models/PurchaseHistory');
exports.getAllParts = async (req, res) => {
    try {
        const parts = await Part.find();
        res.status(200).json(parts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllPurchaseHistory = async (req, res) => {
    try {
        const purchaseHistory = await PurchaseHistory.find();
        res.status(200).json(purchaseHistory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
