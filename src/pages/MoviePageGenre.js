import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import { getMovieGenre } from "../utils/api";

function MoviePageGenre() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieGenre(id).then(({ data }) => {
      setMovies(data);
    });
  }, [id]);

  return (
    <Container className="py-3">
      <div className="movie-display__details">
        <MovieList movies={movies} />
      </div>
    </Container>
  );
}

export default MoviePageGenre;
