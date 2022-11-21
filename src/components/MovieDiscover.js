import React, { useEffect, useState } from "react";
import usePages from "../hooks/usePages";
import { getMovieDiscovery } from "../utils/api";
import MovieDisplay from "./MovieDisplay";

function MovieDiscover() {
  const [movies, setMovies] = useState([]);
  const [pages] = usePages();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieDiscovery(pages)
      .then(setIsLoading(true))
      .then(({ data }) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, [pages]);

  return (
    <MovieDisplay
      movies={movies}
      title={"Discover"}
      page={`movie/discover/list?page=${pages}`}
      loader={isLoading}
    />
  );
}

export default MovieDiscover;
