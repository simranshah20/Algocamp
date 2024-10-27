// Importing the linearSearch function from another file called '02_searching.js'
// const linearSearch = require('./02_searching.js');   // Uncomment this line to use linearSearch directly

// Using the linearSearch function to search for the value 15 in the array [10, 15, 20, 25, 30]
// The expected output is 1, which is the index of the value 15 in the array
// console.log(linearSearch([10,15,20,25,30],15));    // Uncomment this line to see the output for linearSearch

// Importing all the exported functions from '02_searching.js' as an object called Searching
const Searching = require('./02_searching');

// Logging the entire Searching object to see what functions are available
console.log(Searching);

// Using the binarySearch function from the Searching object to search for the value 15 in the array [10, 15, 20, 25, 30]
// The expected output is -1, which indicates that the value 15 was not found (this is likely due to a logical error in the binary search implementation)
console.log(Searching.binarySearch([10,15,20,25,30],15));    // Output -1

