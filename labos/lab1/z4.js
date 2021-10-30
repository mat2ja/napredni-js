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
    prosjek: 3.92,
    semestar: 3,
  },
];

const printStudent = (student) => {
  const { ime, jmbag, prosjek, semestar } = student;
  console.log(`${ime.toUpperCase()} (${jmbag}) - ${prosjek} (${semestar})`);
};

console.log('Studenti:');
studenti.forEach(printStudent);

const sortStudents = (a, b) => {
  if (a.semestar > b.semestar) {
    return 1;
  } else if (a.semestar < b.semestar) {
    return -1;
  }
  return a.prosjek < b.prosjek ? 1 : -1;
};

console.log('\nSortirano po semestru ↓, po prosjeku ↑:');
studenti.sort(sortStudents).forEach(printStudent);

const calcYear = (semestar) =>
  parseInt(semestar % 2 ? semestar / 2 + 1 : semestar / 2);

const calcProsjek = ({ prosjek, brojStudenata }, student) => {
  const noviProsjek =
    (prosjek * (brojStudenata - 1) + student.prosjek) / brojStudenata;
  return parseFloat(noviProsjek.toFixed(2));
};

const fetchYearStats = (stats, currYear) =>
  stats.find(({ godina }) => godina === currYear);

const initYearStats = (stats, year) => {
  const yearStats = {
    godina: year,
    brojStudenata: 0,
    prosjek: 0,
  };
  stats.push(yearStats);
  return yearStats;
};

const statsPerYear = studenti.reduce((stats, student) => {
  const year = calcYear(student.semestar);
  const yearStats = fetchYearStats(stats, year) ?? initYearStats(stats, year);
  yearStats.brojStudenata++;
  yearStats.prosjek = calcProsjek(yearStats, student);
  return stats;
}, []);

const sortedStatsPerYear = statsPerYear.sort((a, b) =>
  a.prosjek < b.prosjek ? 1 : -1
);

console.log('\nStatistika po godinama:', sortedStatsPerYear);

const prosjekGodine = (trazenaGodina) =>
  studenti
    .filter(({ semestar }) => calcYear(semestar) === trazenaGodina)
    .reduce(
      (prosjek, student, i, studenti) =>
        prosjek + student.prosjek / studenti.length,
      0
    )
    .toFixed(2);

const prosjekTreceGodine = prosjekGodine(3);
console.log('\nProsjek 3. godine:', prosjekTreceGodine);

/*
Studenti:
MARIAN (0009282645) - 4.1 (5)
PATRIK (0004498776) - 3.4 (5)
MATIJA (0036519571) - 4.7 (5)
MARIN (0004311714) - 2.6 (3)
MISLAV (0007498555) - 3.92 (3)

Sortirano po semestru ↓, po prosjeku ↑:
MISLAV (0007498555) - 3.92 (3)
MARIN (0004311714) - 2.6 (3)
MATIJA (0036519571) - 4.7 (5)
MARIAN (0009282645) - 4.1 (5)
PATRIK (0004498776) - 3.4 (5)

Statistika po godinama: [
  { godina: 3, brojStudenata: 3, prosjek: 4.07 },
  { godina: 2, brojStudenata: 2, prosjek: 3.26 }
]

Prosjek 3. godine: 4.07
*/
