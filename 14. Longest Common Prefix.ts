function longestCommonPrefix(strs: string[]): string {
    // Initiates the function with a guard clause, an early return with an empty string if the length of strs is 0. Normally it returns a false value, but with ! it will be true.
    // In JS/TS if an if statement contains only one line, I can omit braces. This is an implicit block or single-line conditional.
    if (!strs.length) return '';

    // strs.sort() calls the built-in sort method on the array, it compares the contents of the array and change their positions based on what was defined as argument
    // (a, b) => a.localeCompare(b) is the comparison function passed to sort
    // a and b are any two elements being compared; localeCompare() compares two strings based on the current locale (any language/region specific rules); Returns a negative number if a should come before b, positive if b should come before a, or 0 if they're equal;
    strs.sort((a, b) => a.localeCompare(b));
    // Defines a private variable with an empty string value
    let _prefix: string = '';

    // A for... of... loop that iterates through each character of the first string in an array called strs
    for (let char of strs[0])
        // An one line if statement
        // strs.every(...) checks if ALL strings in the array meet a condition
        // a => a.startsWith(_prefix + char); Takes each string (a); Checks if it starts with current prefix PLUS the new character;
        // If ALL strings pass this test: _prefix += char adds the character to our prefix
        // If ANY string fails the test: else break exits the loop since we've found the longest common prefix
        if (strs.every(a => a.startsWith(_prefix + char))) _prefix += char
        else break;

    return _prefix;
};