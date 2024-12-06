const tf = require('@tensorflow/tfjs');
const mongodb = require('mongodb');
const { MongoClient } = mongodb;

const url = "mongodb://localhost:27017/"; // MongoDB connection string
const client = new MongoClient(url);

async function trainAndPredictPrice(partId) {
  try {
    await client.connect();
    const db = client.db("carPartsDealer");

    // Collections
    const parts = db.collection("parts");
    const purchaseHistory = db.collection("purchasehistories");

    // Fetch part details
    const part = await parts.findOne({ part_id: partId });
    if (!part) {
      console.log("Part not found!");
      return;
    }

    // Fetch purchase history for the given part ID
    const purchases = await purchaseHistory.find({ part_id: partId }).toArray();
    if (!purchases.length) {
      console.log("No purchase history available for this part.");
      return;
    }

    // Prepare the data
    const data = purchases.map(purchase => ({
      quantity: purchase.quantity,
      date: new Date(purchase.purchase_date).getTime() // Convert date to timestamp
    }));

    // Sort by date
    data.sort((a, b) => a.date - b.date);

    // Split features (X) and target (y)
    const X = data.map(d => d.date); // Dates as features
    const y = data.map(d => d.quantity); // Quantities as target

    // Normalize the data
    const X_min = Math.min(...X);
    const X_max = Math.max(...X);
    const X_normalized = X.map(val => (val - X_min) / (X_max - X_min));
    const y_normalized = y.map(val => val / Math.max(...y));

    // Convert data to tensors
    const X_tensor = tf.tensor2d(X_normalized, [X_normalized.length, 1]);
    const y_tensor = tf.tensor2d(y_normalized, [y_normalized.length, 1]);

    // Define a simple linear regression model
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

    // Train the model
    await model.fit(X_tensor, y_tensor, { epochs: 100 });

    // Predict demand for the next period
    const futureDate = new Date().getTime(); // Current timestamp
    const futureDateNormalized = (futureDate - X_min) / (X_max - X_min);
    const futureTensor = tf.tensor2d([futureDateNormalized], [1, 1]);

    const prediction = model.predict(futureTensor);
    let predictedDemand = prediction.dataSync()[0] * Math.max(...y); // De-normalize

    // Clamp predicted demand to avoid negative values
    predictedDemand = Math.max(0, predictedDemand);

    // Calculate new price based on predicted demand
    const oldPrice = part.price;
    let newPrice;
    if (predictedDemand > 100) {
      newPrice = oldPrice * 1.1; // Increase by 10%
    } else if (predictedDemand < 50) {
      newPrice = oldPrice * 0.9; // Decrease by 10%
    } else {
      newPrice = oldPrice; // Keep price stable
    }

    // Apply a baseline demand to ensure a minimum demand value
    const baselineDemand = 10; // Minimum expected demand
    const finalDemand = Math.max(predictedDemand, baselineDemand);

    // Display results
    console.log(`Part ID: ${partId}`);
    console.log(`Old Price: $${oldPrice.toFixed(2)}`);
    console.log(`Predicted Demand: ${finalDemand.toFixed(2)}`);
    console.log(`New Price: $${newPrice.toFixed(2)}`);

    return { predictedDemand: finalDemand, oldPrice, newPrice };

  } catch (error) {
    console.error("Error in demand prediction or price calculation:", error);
  } finally {
    await client.close();
  }
}

// Run the function with a specific part ID
const partId = 9; // Replace with your desired part ID
trainAndPredictPrice(partId);
