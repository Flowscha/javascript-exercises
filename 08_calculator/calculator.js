const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(a) {
  
  let result = 0;

  for (const num of a) {
    result += num;
  }

  return result;
};

const multiply = function(a) {
  let result = 1;
  for (const number of a) {
    result *= number;
  }
  return result;
};

const power = function(a,b) {
  	return Math.pow(a,b);
};

const factorial = function(a) {
  let sum = 1;
  for (let i = 1; i <= a; i++){
    sum *= i;
  }
  return sum;
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
