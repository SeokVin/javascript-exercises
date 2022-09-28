const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let sum = 0;
	nums.forEach(num => {
		sum += num;
	});
	return sum;
};

const multiply = function(nums) {
	let total = 1;
	nums.forEach(num => {
		total = total * num;
	});
	return total;

	/* alternate method
	let total = numArr[0];
	for (let i = 1, i < numArr.length; i++) {
		total = total * numArr[i];
	}
	*/
	
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0) return 1; // factorial 0 equates to 1
	
	let total = num;
	for (let i = num - 1; i > 0; i--) {
		total = total * i;
	}
	return total;

	/* alternate method
	let total = 1;
	for (let i = 1; i <= num; i++) {
		total = total * i;
	}
	*/
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
