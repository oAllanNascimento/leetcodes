function romanToInt(s: string): number {
    // Defines a helper function to handle the specific cases where a Roman numeral should be subtracted instead of added
    // A helper function is created to perform a repeated or modular task within a larger function
    // It is an arrow function that takes three string parameters and returns a number parameter
    const calcScale = (c: string, a1: string, a2: string): number => {
        // Uses a ternary operator to decide between returning 1 or -1. The rule is if c is equal to a1 or equal to a2
        // After the condition that results in true of false comes the ternary operator using the structure "condition ? value_if_true : value_if_false"
        // a1 and a2 are not defined yet. But if c is equal to one of them, the condition is true and the return will be -1. Otherwise, the return will be 1.
        return (c === a1 || c === a2) ? -1 : 1;
    }

    // This initializes a variable with the type number and the value 0.
    // It uses let instead of const because it will be updated further in the function
    let result: number = 0;

    // This is a for loop that uses n as an interator with the type number and starting value 0. The loop will keep repeating itself until the value of n is less than the length of the string s. At each iteration n will be increased by 1.
    for (let n: number = 0; n < s.length; n++) {
        // Defines a variable nextChar with the type string that will have the index value of s n + 1, to get the next character in the string. If the string s is empty then the value is an empty string.
        const nextChar: string = s[n + 1] || '';

        // A switch based on the current character in the string in the index position n
        // As roman numerals only have 7 variations a switch statement is better than an if/else because: It's more readable; It's often more performant; Cleaner to organize the logic.
        switch (s[n]) {
            // Executes this line when s[n] is M, adds 1000 to the result total. The break exits the switch statement.
            case 'M': result += 1000; break;
            // Executes this line when s[n] is D, adds 500 to the result total and then exits the switch.
            case 'D': result += 500; break;
            // Executes this line when s[n] is C. It is special because CM is 900 and CD is 400. So I need to check the next character to decide if I will add or subtract 100.
            // It runs the function calcScale with the parameters nextChar (that is s[n + 1] current n index plus one, that is the next character because it is the next index); And check if the next character is either an M or D; If it is one of them, the calcScale will return -1. Then 100 * -1 becomes -100 and this value will be substracted from the result. If the next character is not M or D, this line only adds 100 to the result. Then the line break and exits the switch.
            case 'C': result += 100 * calcScale(nextChar, 'M', 'D'); break;
            // Same as the first two but for the value 50
            case 'L': result += 50; break;
            // Same as the case C but for the value 10 and checks the characters C and L
            case 'X': result += 10 * calcScale(nextChar, 'C', 'L'); break;
            // Same as default values but for 5
            case 'V': result += 5; break;
            // Same as cases C and X but for the value 1 and checks for the characters X and V
            case 'I': result += 1 * calcScale(nextChar, 'X', 'V'); break;
        }
    }

    // Returns the calculated result
    return result;
};