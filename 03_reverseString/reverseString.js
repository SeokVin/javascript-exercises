const reverseString = function(string) {
    let stringReversed = "";
    let stringArray = string.split("");
    for (let i = stringArray.length - 1; i >= 0; i--) {
        stringReversed += stringArray[i];
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
