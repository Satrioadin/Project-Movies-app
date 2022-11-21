import React, { useEffect, useState } from "react";
import { getMovieTrending } from "../utils/api";
import MovieDisplay from "./MovieDisplay";

function MovieTrending() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieTrending(1)
      .then(setIsLoading(true))
      .then(({ data }) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, []);

  return (
    <MovieDisplay
      movies={movies}
      title={"Trending"}
      page={`movie/trending/list?page=${1}`}
      loader={isLoading}
    />
  );
}

export default MovieTrending;
