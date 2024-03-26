const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Example provided in index.js
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Using reduce to sum up all the battery amounts
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // Output will be the sum of all battery amounts