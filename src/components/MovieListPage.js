import React from "react";
import MovieList from "./MovieList";

function MovieListPage({ movies }) {
  return (
    <div className="movie-display__details">
      <MovieList movies={movies} />
    </div>
  );
}

export default MovieListPage;
