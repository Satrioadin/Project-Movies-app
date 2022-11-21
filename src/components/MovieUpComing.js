import React, { useEffect, useState } from "react";
import usePages from "../hooks/usePages";
import { getMovieUpComing } from "../utils/api";
import MovieDisplay from "./MovieDisplay";

function MovieUpComing() {
  const [movies, setMovies] = useState([]);
  const [pages] = usePages();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieUpComing(pages)
      .then(setIsLoading(true))
      .then(({ data }) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, [pages]);

  return (
    <MovieDisplay
      title={"Up Coming"}
      movies={movies}
      page={`/movie/upcoming/list?page=${pages}`}
      loader={isLoading}
    />
  );
}

export default MovieUpComing;
