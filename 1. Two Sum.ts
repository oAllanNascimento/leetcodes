// Receives an array of numbers called nums and the target number as the input, returns an array of numbers as the output (the results are indices of the two numbers that add up to targe)
function twoSum(nums: number[], target: number): number[] {
    // Saves each number in a hash table, the key is the number and the value is the index. This decision is to make the lookup fast for each number. The values inside <> indicate that both key and value must be numbers
    const ht = new Map<number, number>();

    // This is a loop that will iterate over each element in nums
    // i = 0: initializes i as the starting index in the array
    // i < nums.length: keeps the loop working as long as i is less than the length of nums
    // .length does not return the same count as index, if numbs = [0, 3] its length will not be 1 (starting from 0 and 1) because this is just the index. It will count the length starting from 1 and not 0.
    // i++: Increments i by 1 after each iteration, moving to the next element in nums.
    for (let i = 0; i < nums.length; i++) {
        // Assigns the current elements of nums (at the index i) to the variable num
        const num = nums[i];

        // As I can't use the same element twice I need to check if the complement number already exists in a different index before adding it to the hash table. In this way each num will pair with only numbers previously seen in the array. And the result will contain a pair of different indeces.
        // Checks using the method of Map .has if the target - num (the complement of the current number in nums) exists in the hash table. Example... If the num is 4 and the target is 6, will do 6 - 4 and check if the hash table contains the number two.
        if (ht.has(target - num)) {
            // If the complement is found, returns indices of both numbers in an array with two items. The .get method of Map will return the value of the key got with target - num (an index) and the current num index.
            // By default the .get method could return the value i'm looking for or undefined and TypeScript doesn’t analyze code logic to the extent of "knowing" that you've already checked if the key exists. The possibility of returning a undefined makes TypeScript raise an error. Adding "!" tells to TypeScript that I know this is safe and will not return undefined
            // TypeScript tries to prevent any situation where a null or undefined value could be used unexpectedly
            // The ! was not needed in .has because this method only returns a boolean,  it doesn’t have the possibility of being undefined
            return [ht.get(target - num)!, i];
        }

        // Adds the current num as a key and the current index as a value in the hash table
        ht.set(num, i);
    }

    // Return an empty array if no solution is found
    return [];
};