// Import necessary libraries (if using Node.js)
const mongodb = require('mongodb');
const { MongoClient } = mongodb;

// MongoDB connection string (update with your credentials)
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

// Main function to predict a new price by part ID
async function getNewPriceByPartId(partId) {
  try {
    // Connect to the database
    await client.connect();
    const db = client.db("carPartsDealer");

    // Collections
    const parts = db.collection("parts");
    const purchaseHistory = db.collection("purchasehistories");

    // Fetch the part details
    const part = await parts.findOne({ part_id: partId });
    if (!part) {
      console.log("Part not found!");
      return;
    }

    // Aggregate total demand for the part
    const totalDemand = await purchaseHistory.aggregate([
      { $match: { part_id: partId } },
      { $group: { _id: "$part_id", totalQuantity: { $sum: "$quantity" } } }
    ]).toArray();

    const demand = totalDemand[0]?.totalQuantity || 0;

    // Predict future demand (naive approach - moving average)
    const recentPurchases = await purchaseHistory.find({ part_id: partId })
      .sort({ purchase_date: -1 })
      .limit(10) // Last 10 purchases
      .toArray();

    const recentDemand = recentPurchases.reduce((sum, record) => sum + record.quantity, 0);
    const predictedDemand = recentDemand / Math.max(recentPurchases.length, 1); // Average demand

    // Calculate new price based on predicted demand
    let newPrice;
    if (predictedDemand > 100) { // High demand
      newPrice = part.price * 1.1; // Increase by 10%
    } else if (predictedDemand < 50) { // Low demand
      newPrice = part.price * 0.9; // Decrease by 10%
    } else { // Stable demand
      newPrice = part.price;
    }

    console.log(`Part ID: ${partId}`);
    console.log(`Old Price: ${part.price}, Predicted Demand: ${predictedDemand.toFixed(2)}, New Price: ${newPrice.toFixed(2)}`);
    return newPrice;
  } catch (error) {
    console.error("Error retrieving predicted price:", error);
  } finally {
    // Close the database connection
    await client.close();
  }
}

// Call the function with a specific part ID
const partId = 4; // Replace with the part ID you want to query
getNewPriceByPartId(partId);
