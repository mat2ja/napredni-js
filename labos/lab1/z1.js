/*
Napišite funkciju racunaj koja kao parametre prima 3 varijable:

- broj a
- broj b
- funkciju f koja će biti pozvana sa ta 2 broja koja određuje operaciju između njih
Pozvati funkciju f nad brojevima a i b, te rezultat vratiti u glavni program.

U glavnom programu je potrebno napisati funkcije zbrajanje i oduzimanje koje kao parametre primaju 2 broja i vraćaju rezultat ekvivalente operacije u glavni program.
Pozvati funkciju racunaj s 2 broja po želji i funkcijama zbrajanje i oduzimanje i rezultat ispisati u konzolu.
Također, pozvati funkciju racunaj sa anonimnom funkcijom koja radi modulo operaciju između 2 broja.
 
Primjer poziva:
console.log ( racunaj(13,4, zbrajanje) )  // ispis 17
console.log ( racunaj(13,4, oduzimanje) ) // ispis 9
*/

const racunaj = (a, b, operacija) => operacija(a, b);

const zbrajanje = (a, b) => a + b;
const oduzimanje = (a, b) => a - b;

console.log(racunaj(13, 4, zbrajanje));
console.log(racunaj(13, 4, oduzimanje));
console.log(racunaj(13, 4, (a, b) => a % b));
