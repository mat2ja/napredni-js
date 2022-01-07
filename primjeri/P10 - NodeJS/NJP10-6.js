console.log(__filename);

console.log(__dirname);

//console.log(process);
//console.log(console);

setTimeout(function () {
  console.log('Timeout poruka');
  clearInterval(i);
}, 5000);

let i = setInterval(function () {
  console.log('Interval poruka');
}, 500);
