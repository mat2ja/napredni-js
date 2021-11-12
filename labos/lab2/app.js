// https://full-women.surge.sh/

let movies = [];

const reverseCheckbox = document.querySelector('#filter-reverse');
const yearSelect = document.querySelector('#filter-year-select');
const limitFilter = document.querySelector('#filter-limit');
const loadToggle = document.querySelector('#load-toggle');
const refreshToggle = document.querySelector('#refresh-toggle');
const formNewMovie = document.querySelector('#form-new-movie');
const newMovieFields = [...formNewMovie.querySelectorAll('.form-control')];
const formToggleBtn = document.querySelector('#form-toggle-btn');

const hideElement = (elem) => elem.classList.add('d-none');
const showElement = (elem) => elem.classList.remove('d-none');
const addElemError = (elem) => elem.classList.add('error');
const removeElemErr = (elem) => elem.classList.remove('error');

const applyFilters = () => {
  const limit = limitFilter.value;
  const selYear = yearSelect.value;
  const reverseChecked = reverseCheckbox.checked;

  let filteredMovies = movies;

  filteredMovies = selYear
    ? filterMoviesByYear(filteredMovies, selYear)
    : filteredMovies;

  filteredMovies = reverseChecked
    ? filteredMovies.sort((a, b) => b.index - a.index)
    : filteredMovies.sort((a, b) => a.index - b.index);

  filteredMovies = limit ? limitMovies(filteredMovies, limit) : filteredMovies;

  fillTable(filteredMovies);
};

loadToggle.addEventListener('click', () => {
  resetFilters();
  fetchMovies();
});

refreshToggle.addEventListener('click', applyFilters);

const showNewMovieInputs = () => {
  hideElement(formToggleBtn);
  showElement(formNewMovie);
};

formToggleBtn.addEventListener('click', showNewMovieInputs);

formNewMovie.addEventListener('submit', (e) => {
  e.preventDefault();

  const fieldsAreValid = validateNewMovieFields(newMovieFields);

  if (fieldsAreValid) {
    newMovieFields.forEach(removeElemErr);

    addNewMovie(newMovieFields);
    clearFields(newMovieFields);
    initYearSelect();
    applyFilters();
  } else {
    newMovieFields.forEach(addElemError);
  }
});

const addNewMovie = (fields) => {
  const newMovie = {};
  fields.forEach(({ name, value }) => (newMovie[name] = value));

  const maxIndex = Math.max(...movies.map((m) => m.index));
  newMovie.index = maxIndex + 1;

  movies.push(newMovie);
};

const limitMovies = (movies, end) => movies.slice(0, end);

const filterMoviesByYear = (movies, targetYear) =>
  targetYear ? movies.filter(({ year }) => year === targetYear) : movies;

const resetFilters = () => {
  limitFilter.value = '';
  yearSelect.value = '';
  reverseCheckbox.checked = false;
};

const clearFields = (fields) => {
  fields.forEach((field) => (field.value = ''));
};

const fetchMovies = async () => {
  try {
    const moviesUrl = 'https://bridge.hr/ipw/imdb.json';
    const res = await fetch(moviesUrl);
    movies = await res.json();

    if (movies.length) {
      initYearSelect();
      fillTable(movies);
    }
  } catch (err) {
    console.error(err.message);
    movies = [];
  }
};

const validateNewMovieFields = (inputs) => {
  const everyIsFilled = inputs.every(({ value }) => value.trim() !== '');
  return everyIsFilled;
};

const fillTable = (movies) => {
  const table = document.querySelector('#movie-table');
  const tableBody = table.querySelector('tbody');

  const movieRows = movies
    .map((movie) => {
      const { index, name, year, rating, poster } = movie;
      return /*html*/ `
      <tr>
        <th>${index}</th>
        <td>${name}</td>
        <td>${year}</td>
        <td>${rating}</td>
        <td class="table-poster">
          <img src="${poster}" />
        </td>
        <td>
          <button class="btn btn-danger btn-sm delete-movie-btn" data-index="${index}" aria-label="Delete">
            <i class="bi bi-x"></i>
          </button>
        </td>
      </tr>
    `;
    })
    .join('\n');

  tableBody.innerHTML = movieRows;

  const deleteMovieButtons = document.querySelectorAll('.delete-movie-btn');
  deleteMovieButtons.forEach((btn) =>
    btn.addEventListener(
      'click',
      (e) => deleteMovieByIndex(+e.currentTarget.dataset.index),
      false
    )
  );
};

const deleteMovieByIndex = (targetIndex) => {
  console.log(`Delete movie with index ${targetIndex}`);
  movies = movies.filter(({ index }) => index !== +targetIndex);
  fillTable(movies);
};

const getUniqueMovieYears = () => {
  const movieYears = movies.map(({ year }) => year);
  const uniqueYears = [...new Set(movieYears)].sort((a, b) => a - b);
  return uniqueYears;
};

const initYearSelect = () => {
  const uniqueYears = getUniqueMovieYears();
  const yearOptionsArr = uniqueYears.map(
    (yr) => /*html*/ `<option value="${yr}">${yr}</option>`
  );
  yearOptionsArr.unshift(
    /*html*/ `<option selected value="">All years</option>\n`
  );
  const yearOptions = yearOptionsArr.join('/n');

  yearSelect.innerHTML = yearOptions;
};

fetchMovies();
