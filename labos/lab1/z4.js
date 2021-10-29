/*
Deklarirati polje od 5 student objekata. Jedan student ima svojstva ime, jmbag, prosjek, semestar.

1. Ispisati dobiveno polje u formatu  IME (JMBAG) - PROSJEK (semestar) pomoću forEach metode. 

2. Sortirati studente po semestru uzlazno i prosjeku silazno za studente istog semestra te novo dobiveno polje ispisati u istom formatu

3. Iz postojećeg polja dobiti novo polje objekata, gdje svaki objekt sadrži svojstva godinaStudija, brojStudenata, prosjek (npr. {godina:1, brojStudenata:4, prosjek:4.12}, ...), te ga sortirati po prosjeku silazno.

4. Filtrirati originalno polje tako da u njemu ostanu samo studenti na trećoj godini te izračunati i ispisati prosjek prosjeka tih studenata.
*/

const studenti = [
  {
    ime: 'marian',
    jmbag: '0009282645',
    prosjek: 4.1,
    semestar: 5,
  },
  {
    ime: 'patrik',
    jmbag: '0004498776',
    prosjek: 3.4,
    semestar: 5,
  },
  {
    ime: 'matija',
    jmbag: '0036519571',
    prosjek: 4.7,
    semestar: 5,
  },
  {
    ime: 'marin',
    jmbag: '0004311714',
    prosjek: 2.6,
    semestar: 3,
  },
  {
    ime: 'mislav',
    jmbag: '0007498555',
    prosjek: 3.9,
    semestar: 3,
  },
];

const printStudent = (student) => {
  const { ime, jmbag, prosjek, semestar } = student;
  console.log(`${ime} (${jmbag}) - ${prosjek} (${semestar})`);
};

console.log('1. studenti:');
studenti.forEach(printStudent);

const sortStudents = (a, b) => {
  if (a.semestar > b.semestar) {
    return 1;
  } else if (a.semestar < b.semestar) {
    return -1;
  }
  return a.prosjek < b.prosjek ? 1 : -1;
};

console.log('\n2. Sortirano po semestru ↓, po prosjeku ↑:');
studenti.sort(sortStudents).forEach(printStudent);
console.log('\n');

const calcYear = ({ semestar }) => parseInt(semestar / 2);

const calcProsjek = ({ prosjek, brojStudenata }, student) => {
  return (prosjek * (brojStudenata - 1) + student.prosjek) / brojStudenata;
};

const fetchYearStats = (stats, currYear) =>
  stats.find(({ godina }) => godina === currYear);

const initYearStats = (stats, year) => {
  const yearStats = {
    godina: year,
    brojStudenata: 0,
    prosjek: 0.0,
  };
  stats.push(yearStats);
  return yearStats;
};

const stats = studenti.reduce((arr, student) => {
  console.log(student);
  const year = calcYear(student);
  const yearStats = fetchYearStats(arr, year) ?? initYearStats(arr, year);
  yearStats.brojStudenata++;
  yearStats.prosjek = calcProsjek(yearStats, student);
  return arr;
}, []);

console.log('\nStatistika po godinama:', stats);

const prosjekTrecegSemestra = studenti
  .filter(({ semestar }) => semestar === 3)
  .reduce(
    (prosjek, student, i, studenti) =>
      prosjek + student.prosjek / studenti.length,
    0
  );
console.log('\nProsjek 3. semestra:', prosjekTrecegSemestra);
