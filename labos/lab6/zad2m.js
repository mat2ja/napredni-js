const sumNumbers = (min, max, numbers) => {
  return numbers.reduce((acc, num) => {
    const isBetweenRange = num >= min && num <= max;
    return isBetweenRange ? acc + num : acc;
  }, 0);
};

const extractNumbers = (args) => {
  return args.filter((arg) => !isNaN(arg)).map(Number);
};

module.exports = { sumNumbers, extractNumbers };
