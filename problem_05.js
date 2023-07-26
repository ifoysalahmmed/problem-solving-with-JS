const calculator = (num1, num2, operator) => {
  let calculation;

  switch (operator) {
    case "+":
      calculation = num1 + num2;
      break;
    case "-":
      calculation = num1 - num2;
      break;
    case "*":
      calculation = num1 * num2;
      break;
    case "/":
      calculation = num1 / num2;
      break;

    default:
      return "Please provide two number and a operator(+, -, * , /)";
  }

  return calculation;
};

const result = calculator(9, 7, "+");
console.log(result);
