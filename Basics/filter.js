
/// *****FILTER******  
/*
filter Method Basics
    The filter method in JavaScript is designed as a higher-order function that 
    iterates over each element of an array, allowing developers to apply a specific
    condition to filter out elements.

    The filter method doesn't modify the original array, but instead creates 
    and returns a new array containing only the elements that meet the specified 
    condition


    SYNTAX: array.filter(function(currentValue, index, arr), thisValue)

    1.	currentValue: The current element being processed in the array.
	2.	index: (Optional) The index of the current element being processed.
	3.	array: (Optional) The original array being filtered.

    Return Value:

	•	A new array with elements that pass the test (i.e., the function returns true)



    Common Use Cases:

	•	Filtering out certain values from an array (e.g., removing null values or filtering numbers based on conditions).
	•	Finding items that match certain criteria in a list or dataset.
*/





const numbers = [1, 2, 3, 4, 5];

// Filter out numbers greater than 2
const result = numbers.filter(function(num) {
  return num > 2;
});

console.log(result); // Output: [3, 4, 5]

const result2 = numbers.filter(num => num > 2);
console.log(result2); // Output: [3, 4, 5]



////**** Filtering Out Null or Undefined Values ****

const values = [10, null, 20, undefined, 30];
const filteredValues = values.filter(value => value !== null && value !== undefined);
// filteredValues: [10, 20, 30]


// *****Filtering Objects Based on Property Values *******

const products = [
    { id: 1, name: 'Product 1', price: 40 },
    { id: 2, name: 'Product 2', price: 60 },
    { id: 3, name: 'Product 3', price: 30 }
  ];
  const expensiveProducts = products.filter(product => product.price > 50);
  // expensiveProducts: [{ id: 2, name: 'Product 2', price: 60 }]