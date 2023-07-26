const findIndices = (sortedArr, target) => {
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j <= i + 1; j++) {
      if (sortedArr[i] + sortedArr[j] === target) {
        return [i, j];
      }
    }
  }

  return "sum can not be performed";
};

const result = findIndices([1, 3, 6, 8, 11, 15], 9);
console.log(result);
