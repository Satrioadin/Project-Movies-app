import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import { getMovieSearch } from "../utils/api";

function SearchPage() {
  const { keyword } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieSearch(keyword).then(({ data }) => {
      setMovies(data);
    });
  }, [keyword]);

  return (
    <div className="py-4">
      <div className="movie-display__details">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default SearchPage;
