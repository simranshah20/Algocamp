// Function to perform a linear search on an array
export function linearSearch(arr, val) {
    // Loop through each element in the array
    for (var i = 0; i < arr.length; i++) {
        // Check if the current element is equal to the value we're searching for
        if (arr[i] == val) {
            // If found, return the index of the element
            return i;
        }
    }
    // If the value is not found, return -1
    return -1;
}

// Function to perform a binary search on a sorted array
export function binarySearch(arr, val) {
    // Initialize left and right pointers for the search range
    let left = 0;
    let right = arr.length - 1;

    // Calculate the middle index of the current search range
    let middle = Math.floor((left + right) / 2);

    // Continue searching as long as the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // If the value at the middle index is equal to the target value, return the middle index
        if (arr[middle] == val) {
            return middle;
        }
        // If the target value is less than the value at the middle index,
        // narrow the search to the left half of the array
        if (val < arr[middle]) {
            right = middle - 1;
        } else {
            // If the target value is greater, narrow the search to the right half of the array
            left = middle + 1;
        }
        // Recalculate the middle index for the new search range
        middle = Math.floor((left + right) / 2);
    }
    // If the value is not found, return -1
    return -1;
}