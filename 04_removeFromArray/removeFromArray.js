const removeFromArray = function(arr, ...args) {
    
    let newArray = [];

    arr.forEach(arrElement => { // for (let i = 0; i < arr.length; i++) ~ is functionally equivalent
        if (!args.includes(arrElement)) {
            newArray.push(arrElement);
        }
    });

    return newArray;

    /* Does not pass test case 2
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (arr[i] === nums[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
    */
};

// Do not edit below this line
module.exports = removeFromArray;
