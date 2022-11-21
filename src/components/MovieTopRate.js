import React, { useEffect, useState } from "react";
import { getMovieTopRate } from "../utils/api";
import MovieDisplay from "./MovieDisplay";

function MovieTopRate() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieTopRate(1)
      .then(setIsLoading(true))
      .then(({ data }) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, []);
  return (
    <MovieDisplay
      movies={movies}
      title={"Top Rate"}
      loader={isLoading}
      page={`movie/toprate/list?page=${1}`}
    />
  );
}

export default MovieTopRate;
