const sumOfPositiveNumbers = (numbers) => {
  let sum = 0;

  numbers.map((number) => {
    if (number > 0) {
      sum += number;
    }
  });

  return sum;
};

const result = sumOfPositiveNumbers([2, -5, 10, -3, 7]);
console.log(result);
