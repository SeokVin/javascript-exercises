const repeatString = function(string, num) {
    let repeatedString = "";
    if (num < 0) return "ERROR";
    for (let i = 0; i < num; i++) {
        repeatedString += string; // repeatedString = repeatedString + string;
        // repeatedString = repeatedString.concat(string); is an alternative
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
