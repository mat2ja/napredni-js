const { sumNumbers, extractNumbers } = require('./zad2m');

const sumArguments = () => {
  try {
    const [, , ...args] = process.argv;

    if (!args || !args.length) {
      throw new Error('No arguments provided');
    }

    const [min, max, ...numbers] = extractNumbers(args);

    if (min == null || max == null || !numbers || !numbers.length) {
      throw new Error('Invalid arguments provided');
    }

    return sumNumbers(min, max, numbers);
  } catch (err) {
    return console.error(err.message);
  }
};

const argsSum = sumArguments();
if (argsSum != null) {
  console.log('Sum of arguments:', argsSum);
}
