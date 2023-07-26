const changeRomanToInteger = (str) => {
  let romanNum = str.toUpperCase();

  let updatedInteger = 0;

  const romanCounter = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < romanNum.length; i++) {
    const currentNum = romanCounter[romanNum[i]];
    const nextNum = romanCounter[romanNum[i + 1]];

    if (nextNum && nextNum > currentNum) {
      updatedInteger += nextNum - currentNum;
      i++;
    } else {
      updatedInteger += currentNum;
    }
  }

  return updatedInteger;
};

const result = changeRomanToInteger("xxi");
console.log(result);
