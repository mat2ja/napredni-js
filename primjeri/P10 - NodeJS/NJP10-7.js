let args = process.argv;
let suma = 0;

console.log(args[0]);
console.log(args[1]);

args.forEach((e, i) => {
  if (i > 1) suma += Number(e);
});

console.log(args.length - 2);
console.log(suma);

//args.filter((e,i)=>i>1).forEach(e => suma+=Number(e));
