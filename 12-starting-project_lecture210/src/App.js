import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map(({ episode_id, title, release_date, opening_crawl }) => {
          return {
            id: episode_id,
            title,
            releaseDate: release_date,
            openingText: opening_crawl
          };
        })
        setMovies(transformedMovies);
      })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
