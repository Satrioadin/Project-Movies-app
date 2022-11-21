import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "react-bootstrap";
import MovieUpComing from "../components/MovieUpComing";
import MovieTrending from "../components/MovieTrending";
import MovieDiscover from "../components/MovieDiscover";
import MovieTopRate from "../components/MovieTopRate";

function HomePage() {
  return (
    <section className="movie-page">
      <Jumbotron
        title={"Movie's Cinema"}
        subTitle={"A perfect place to watch the movie"}
      />
      <Container fluid className="overflow-hidden">
        <div className="mt-3">
          {window.screen.width > 600 ? <MovieUpComing /> : ""}
          <MovieTopRate />
          <MovieTrending />
          <MovieDiscover />
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
