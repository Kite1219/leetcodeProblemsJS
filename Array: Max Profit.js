function maxProfit(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      max = min;
    }
    max = Math.max(max, arr[i]);
  }
  if (max > min) {
    return max - min;
  }
  return 0;
}

// ------------------------------------
//  Test array with increasing prices
// ------------------------------------
console.log("Increasing prices:");
let increasingPrices = [1, 2, 3, 4, 5];
console.log("Array:", increasingPrices);
console.log("Expected Max Profit: 4");
console.log("Actual Max Profit:", maxProfit(increasingPrices));
console.log("---------------");

// ------------------------------------
//  Test array with decreasing prices
// ------------------------------------
console.log("Decreasing prices:");
let decreasingPrices = [5, 4, 3, 2, 1];
console.log("Array:", decreasingPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(decreasingPrices));
console.log("---------------");

// ------------------------------------
//  Test array with random prices
// ------------------------------------
console.log("Random prices:");
let randomPrices = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Array:", randomPrices);
console.log("Expected Max Profit: 8");
console.log("Actual Max Profit:", maxProfit(randomPrices));
console.log("---------------");

// ------------------------------------
//  Test array with same prices
// ------------------------------------
console.log("Same prices:");
let samePrices = [2, 2, 2, 2, 2];
console.log("Array:", samePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(samePrices));
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
console.log("Empty array:");
let emptyPrices = [];
console.log("Array:", emptyPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(emptyPrices));
console.log("---------------");

// ------------------------------------
//  Test array with negative prices
// ------------------------------------
console.log("Negative prices:");
let negativePrices = [-1, -2, -3, -4];
console.log("Array:", negativePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(negativePrices));
console.log("---------------");

// ------------------------------------
//  Test array with mixed prices
// ------------------------------------
console.log("Mixed prices:");
let mixedPrices = [1, 4, 2, -1, 6];
console.log("Array:", mixedPrices);
console.log("Expected Max Profit: 7");
console.log("Actual Max Profit:", maxProfit(mixedPrices));
console.log("---------------");
