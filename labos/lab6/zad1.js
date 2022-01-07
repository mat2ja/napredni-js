const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const readFileFn = async (fileName) => {
  try {
    const data = await readFileAsync(fileName);
    return data.toString();
  } catch (err) {
    console.error(err.message);
  }
};

const writeFileFn = async (fileName, content) => {
  try {
    await writeFileAsync(fileName, content);
  } catch (err) {
    console.error(err.message);
  }
};

const readAndWrite = async (inFileName, outFileName, callback) => {
  try {
    const content = await readFileFn(inFileName);
    const newContent = callback ? callback(content) : content;
    await writeFileFn(outFileName, newContent);
  } catch (err) {
    console.error(err.message);
  }
};

const parseNumbers = (content) => {
  const whitespaceRgx = /\s+/g;
  const numbers = content.split(whitespaceRgx).map(Number);
  return numbers;
};

const organizeNumbers = (numbers) => {
  const evenNumbers = numbers.filter((n) => n % 2 === 0);
  const oddNumbersCount = numbers.length - evenNumbers.length;
  return { evenNumbers, oddNumbersCount };
};

const numberLogicFn = (content) => {
  const numbers = parseNumbers(content);
  const { evenNumbers, oddNumbersCount } = organizeNumbers(numbers);
  const numbersStr = evenNumbers.join(' ');

  console.log('Odd numbers count:', oddNumbersCount);
  return numbersStr;
};

readAndWrite('input.txt', 'output.txt', numberLogicFn);
