const reversedStr = (str) => {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
};

const result = reversedStr("hello world");
console.log(result);
