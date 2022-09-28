const palindromes = function (str) {
    let string = str.toLowerCase().replace(/\W/g, '');;
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string.charAt(left) !== string.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
