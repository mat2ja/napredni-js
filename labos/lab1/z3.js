/* 
1. Deklarirati polje s 20 nasumičnih cijelih brojeva od 1 do 10. 

2. Ukloniti iz polja sve duplikate. 

3. Pomoću filter metode dobiti novo polje koje se sastoji samo od elemenata originalnog polja većih od njihovih indeksa. 

4. Pomoću map metode pomnožiti sve elemente novo dobivenog polja polja s 2 

5. Ispisati u konzolu dobiveno polje sortirano silazno.

Primjer:
Za ulazno polje [4,7,6,1,9,4,5,1,2,8], nakon filter metode novo polje treba izgledati [4,7,6,9], a nakon map novo polje treba izgledati [8,14,12,18] te to treba ispisati u konzolu sortirano.
*/

// 1
// const randArr = [4, 7, 6, 1, 9, 4, 5, 1, 2, 8];
const randArr = [...Array(20)].map((n) => Math.floor(Math.random() * 10 + 1));
console.log('Random array:', randArr);

// 2
const noDuplicates = [...new Set(randArr)];
console.log('Without duplicates:', noDuplicates);

// 3
const filtered = noDuplicates.filter((n, i) => n > i);
console.log('Filtered:', filtered);

// 4
const doubled = filtered.map((n) => n * 2);
console.log('Doubled:', doubled);

// 5
const sorted = doubled.sort((a, b) => b - a);
console.log('Sorted:', sorted);
