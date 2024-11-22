function isPalindrome(x: number): boolean {
    let numberStr = x.toString();
    let reversedNumberStr = numberStr.split("").reverse().join("");

    if (numberStr === reversedNumberStr) {
        return true;
    } else {
        return false;
    }
};