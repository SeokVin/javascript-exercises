const fibonacci = function(num) {
    if (num == 1) return 1;
    if (num <= 0) return "OOPS";
    
    let prevNum = 1;
    let currentNum = 1;
    let member = 2;

    while (member < num) {
        let temp = currentNum;
        currentNum += prevNum;
        prevNum = temp;
        member++;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
