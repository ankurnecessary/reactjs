import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(() => {
    async () => {

      setError(null);
      setIsLoading(true);

      try {
        const response = await fetch('https://swapi.dev/api/films');
        if (!response.ok) { // Error check should be done after fetch call
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        const transformedMovies = data.results.map(({ episode_id, title, release_date, opening_crawl }) => {
          return {
            id: episode_id,
            title,
            releaseDate: release_date,
            openingText: opening_crawl
          };
        })
        setMovies(transformedMovies);
      }
      catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  // If there are any external dependencies then fetchMoviesHandler could change it's state

  let content = <p>Found no movies!</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
