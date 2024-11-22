function isValid(s: string): boolean {

    // Defines a hash map variable mapping the closings with the correpondent openings
    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    // Defines a variable array that will be changed by the loop below
    let openBracketsStack: string[] = []

    // Starts a for loop with i = 0, will continue the loop until i is less than the length of the string s, after each iteration i will be i + 1.
    for (let i = 0; i < s.length; i++) {
        // Defines a variable that will hold the character of the string s in the current execution index of i
        const currentBracket: string = s[i]

        // Checks if the currentBracket is an opening bracket by comparing it with an array with the three possible opening brackets
        // ['(', '[', '{']
        // .includes(currentBracket) this method checks if the currentBracket character exists in that array
        if (['(', '[', '{'].includes(currentBracket)) {
            // Adds the currentBracket at the end of the array openBracketStack
            openBracketsStack.push(currentBracket);
        } // If the current bracket is not an opening one, it is a closing one
        // openBracketsStack.pop() - Removes and returns the last opening bracket from the stack
        // bracketsMap[currentBracket] - Gets the expected opening bracket for the current closing bracket
        // The !== comparison checks if they match - if they don't match, it returns false since the brackets are improperly nested
        else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
            return false
        }
    }
    // Checks if all brackets were properly closed
    // true if stack is empty (length = 0), meaning all brackets were matched
    // false if stack still has opening brackets (length > 0), meaning some brackets weren't closed
    return !openBracketsStack.length
};