

const GENRE_EMOJI = {
  'Action': '⚔️',
  'Comedy': '😄',
  'Drama': '🎭',
  'Horror': '👻',
  'Sci-Fi': '🚀',
  'Romance': '❤️',
  'Thriller': '👁️',
  'Animation': '✨',
  'Documentary': '📽️',
  '': '🎬',
};

let movies = [
  { id: 1, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', watched: true, rating: 5 },
  { id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action', watched: true, rating: 5 },
  { id: 3, title: 'Parasite', year: 2019, genre: 'Thriller', watched: false, rating: 0 },
  { id: 4, title: 'Everything Everywhere All at Once', year: 2022, genre: 'Comedy', watched: false, rating: 0 },
  { id: 5, title: 'Oppenheimer', year: 2023, genre: 'Drama', watched: false, rating: 0 },
];

let nextId = 6;
let currentFilter = 'all';



const movieList = document.getElementById('movie-list');
const inpTitle  = document.getElementById('inp-title');
const inpYear   = document.getElementById('inp-year');
const inpGenre  = document.getElementById('inp-genre');
const addBtn    = document.getElementById('add-btn');
const filterBtns = document.querySelectorAll('.filter-btn');


addBtn.addEventListener('click', addMovie);

inpTitle.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addMovie();
});

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    render();
  });
});



function addMovie() {
  const title = inpTitle.value.trim();
  const year  = inpYear.value.trim();
  const genre = inpGenre.value;

  if (!title) {
    inpTitle.focus();
    inpTitle.style.borderColor = '#e24b4a';
    setTimeout(function () { inpTitle.style.borderColor = ''; }, 1000);
    return;
  }

  const newMovie = {
    id: nextId++,
    title: title,
    year: year,
    genre: genre,
    watched: false,
    rating: 0,
  };

  movies.unshift(newMovie);

  inpTitle.value = '';
  inpYear.value  = '';
  inpGenre.value = '';

  render();
}

function toggleWatched(id) {
  const movie = movies.find(function (m) { return m.id === id; });
  if (movie) {
    movie.watched = !movie.watched;
    render();
  }
}

function deleteMovie(id) {
  movies = movies.filter(function (m) { return m.id !== id; });
  render();
}

function setRating(id, rating) {
  const movie = movies.find(function (m) { return m.id === id; });
  if (movie) {
    movie.rating = rating;
    render();
  }
}



function render() {
  updateStats();

  const filtered = movies.filter(function (m) {
    if (currentFilter === 'watched')   return m.watched;
    if (currentFilter === 'unwatched') return !m.watched;
    return true;
  });

  if (filtered.length === 0) {
    movieList.innerHTML =
      '<div class="empty">' +
        '<span class="empty-icon">🎬</span>' +
        'No movies here yet. Add one above!' +
      '</div>';
    return;
  }

  movieList.innerHTML = '';

  filtered.forEach(function (movie) {
    const card = createMovieCard(movie);
    movieList.appendChild(card);
  });
}

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card' + (movie.watched ? ' watched' : '');

  // Poster
  const poster = document.createElement('div');
  poster.className = 'poster';
  poster.textContent = GENRE_EMOJI[movie.genre] || '🎬';

  // Info
  const info = document.createElement('div');
  info.className = 'movie-info';

  const title = document.createElement('div');
  title.className = 'movie-title';
  title.textContent = movie.title;

  const meta = document.createElement('div');
  meta.className = 'movie-meta';

  if (movie.genre) {
    const genreBadge = document.createElement('span');
    genreBadge.className = 'badge badge-genre';
    genreBadge.textContent = movie.genre;
    meta.appendChild(genreBadge);
  }

  if (movie.year) {
    const yearBadge = document.createElement('span');
    yearBadge.className = 'badge badge-year';
    yearBadge.textContent = movie.year;
    meta.appendChild(yearBadge);
  }

  if (movie.watched) {
    const starsEl = document.createElement('div');
    starsEl.className = 'stars';
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.className = 'star' + (movie.rating >= i ? ' on' : '');
      star.textContent = '★';
      star.setAttribute('aria-label', i + ' star');
      star.setAttribute('role', 'button');
      (function (rating) {
        star.addEventListener('click', function () {
          setRating(movie.id, rating);
        });
      })(i);
      starsEl.appendChild(star);
    }
    meta.appendChild(starsEl);
  }

  info.appendChild(title);
  info.appendChild(meta);

  // Actions
  const actions = document.createElement('div');
  actions.className = 'movie-actions';

  const watchedBtn = document.createElement('button');
  watchedBtn.className = 'icon-btn watched-btn' + (movie.watched ? ' on' : '');
  watchedBtn.textContent = movie.watched ? '✓' : '○';
  watchedBtn.setAttribute('aria-label', movie.watched ? 'Mark as unwatched' : 'Mark as watched');
  watchedBtn.addEventListener('click', function () {
    toggleWatched(movie.id);
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'icon-btn del-btn';
  deleteBtn.textContent = '✕';
  deleteBtn.setAttribute('aria-label', 'Delete movie');
  deleteBtn.addEventListener('click', function () {
    deleteMovie(movie.id);
  });

  actions.appendChild(watchedBtn);
  actions.appendChild(deleteBtn);

  card.appendChild(poster);
  card.appendChild(info);
  card.appendChild(actions);

  return card;
}

function updateStats() {
  document.getElementById('st-total').textContent   = movies.length;
  document.getElementById('st-watched').textContent = movies.filter(function (m) { return m.watched; }).length;
  document.getElementById('st-left').textContent    = movies.filter(function (m) { return !m.watched; }).length;
}



render();
