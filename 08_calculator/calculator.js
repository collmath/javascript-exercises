const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(argArray) {
  let results = 0;
  argArray.forEach(element => {
    results += element;
  });
  return Number(results);
};

const multiply = function(argArray) {
  let results = 1;
  argArray.forEach(element => {
    results *= element;
  });
  return Number(results);
};

const power = function(base, power) {
	return base**power
};

const factorial = function(num) {
  if (num < 0) {
    return undefined;
  } else if (num === 0) {
    return 1;
  } else {
    let results = 1
    for (let index = 1; index <= num; index++) {
      results *= index;
    };
    return results;
  };
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
