const frequentElement = (arr) => {
  const frequencyCounter = {};

  for (let element of arr) {
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  }

  let mostFrequentElement;
  let highestFrequentElement = 0;

  for (let element in frequencyCounter) {
    if (frequencyCounter[element] > highestFrequentElement) {
      mostFrequentElement = element;
      highestFrequentElement = frequencyCounter[element];
    }
  }

  return mostFrequentElement;
};

const result = frequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
console.log(result);
