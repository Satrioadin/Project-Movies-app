import React from "react";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function MovieDisplay({ title, movies, page, loader }) {
  return (
    <div className="movie-page-display d-flex flex-column position-relative">
      {title === "Up Coming" ? (
        window.screen.width > 600 ? (
          <div className="d-flex justify-content-between align-items-center">
            <h4>{title}</h4>
            <Link to={`/${page}`}>
              <p className="bg-white px-3 py-1 rounded-5">Details</p>
            </Link>
          </div>
        ) : (
          ""
        )
      ) : (
        <div className="d-flex justify-content-between align-items-center">
          <h4>{title}</h4>
          <Link to={`/${page}`}>
            <p className="bg-white px-3 py-1 rounded-5">Details</p>
          </Link>
        </div>
      )}
      {loader ? (
        <Loading />
      ) : (
        <div className="movie-list">
          <MovieList movies={movies} />
        </div>
      )}
    </div>
  );
}

export default MovieDisplay;
