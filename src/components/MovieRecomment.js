import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieRecommendation } from "../utils/api";
import MovieDisplay from "./MovieDisplay";

function MovieRecomment() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getMovieRecommendation(id)
      .then(setIsLoading(true))
      .then(({ data }) => {
        setMovies(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Container fluid>
      <MovieDisplay
        movies={movies}
        title={"Recommendtaion"}
        loader={isLoading}
        page={""}
      />
    </Container>
  );
}

export default MovieRecomment;
