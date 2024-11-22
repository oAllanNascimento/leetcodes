// Declares a function that takes an array of numbers as input and returns a boolean value
function containsDuplicate(nums: number[]): boolean {
    // Defines a variable with an array of numbers using a sorted copy of the input
    // The comparison function (a, b) => a - b tells sort() how to order numbers:
    // If result is negative (a - b < 0): a comes before b
    // If result is positive (a - b > 0): b comes before a
    // If result is zero (a - b = 0): order stays the same
    // Without this, sort() converts numbers to strings and sorts them alphabetically, which can give incorrect results for numbers. For example:
    const sorted: number[] = nums.sort((a, b) => a - b);

    // Creates a for loop that: Initializes counter let i = 0;  Continues while i is less than array length; Increments i after each iteration
    for (let i = 0; i < sorted.length; i++) {
        // Checks if the current element equals the next element
        if (sorted[i] == sorted[i + 1]) {
            // Returns true if adjacent elements are equals
            return true
        }
    }

    // Return false if no equals are found
    return false
}