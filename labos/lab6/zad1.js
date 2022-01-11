const { readFile, writeFile } = require('fs/promises');

const readAndWrite = async (inFileName, outFileName, callback) => {
  try {
    const content = await readFile(inFileName).then((c) => c.toString());
    const newContent = callback?.(content) ?? content;
    await writeFile(outFileName, newContent);
  } catch (err) {
    console.error(err.message);
  }
};

const parseNumbers = (content, regex = /\s+/g) => {
  const numbers = content.split(regex).map(Number);
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
