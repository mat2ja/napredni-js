/*
Napisati funkciju generator koja kao argument prima string, a vraća funkciju koja radi matematičku operaciju definiranu tim stringom između 2 broja i ispisuje rezultat u konzolu. Pretpostaviti da će argument biti validna operacija. Testirati funkciju pozivom sa stringovima '-', '*' i '%'

Primjer:
let zbrajanje=generator('+');
zbrajanje(2,4);  // ispis 6

HINT: 
Funkcija eval izvršava string kao JavaScript naredbu. Primjer: eval("2+5") će imati vrijednost 7. 
*/

const generator = (oper) => (a, b) => console.log(eval(`${a}${oper}${b}`));

let zbrajanje = generator('+');
zbrajanje(2, 4); // 6

let oduzimanje = generator('-');
oduzimanje(2, 4); // -2

let mnozenje = generator('*');
mnozenje(2, 4); // 8

let modulo = generator('%');
modulo(20, 3); // 2
