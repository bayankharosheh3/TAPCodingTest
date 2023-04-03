let arrayOfNum = [0, 1];

const calcArraySum = (arrayOfNum) => {
  return arrayOfNum.reduce((a, b) => {
    return a + b;
  });
};

const calcSumWithMissingValue = (n) => {
  return (n * (n + 1)) / 2;
};

const getMissedNumber = (arrayOfNum) => {
  return calcSumWithMissingValue(arrayOfNum.length) - calcArraySum(arrayOfNum);
};

let missingNum = getMissedNumber(arrayOfNum);

console.log(missingNum);
