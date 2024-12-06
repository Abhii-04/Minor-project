const mongoose = require('mongoose');

const purchaseHistorySchema = new mongoose.Schema({
    purchase_id: Number,
    part_id: Number,
    buyer_id: Number,
    quantity: Number,
    purchase_date: Date,
    total_cost: Number
});

module.exports = mongoose.model('PurchaseHistory', purchaseHistorySchema);
