import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MovieListPage from "../components/MovieListPage";
import Paginations from "../components/Pagination";
import usePages from "../hooks/usePages";
import { getMovieDiscovery } from "../utils/api";

function DiscoverPage() {
  const [movies, setMovies] = useState([]);
  const [pages, onPagesChange, nextPages, prevPages] = usePages();

  useEffect(() => {
    getMovieDiscovery(pages).then(({ data }) => {
      setMovies(data.results);
    });
  }, [pages]);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center py-5 gap-4"
    >
      <MovieListPage movies={movies} />
      <Paginations
        onPagesChange={onPagesChange}
        pages={pages}
        nextPages={nextPages}
        prevPages={prevPages}
      />
    </Container>
  );
}

export default DiscoverPage;
