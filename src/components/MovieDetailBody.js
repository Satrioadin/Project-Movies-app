import React from "react";
import { IMG_URL } from "../utils/api";
import MovieTrailer from "./MovieTrailer";

function MovieDetailBody({
  original_title,
  release_date,
  tagline,
  overview,
  status,
  backdrop_path,
  poster_path,
}) {
  return (
    <div className="movie-detail-page">
      <div className="movie-detail-page__backdrop">
        <img
          src={`${IMG_URL}${backdrop_path}`}
          alt={`${original_title}`}
          loading="lazy"
        />
      </div>
      <div className="movie-detail-page__body">
        <div className="d-flex align-items-center ps-3 gap-2">
          <img
            src={`${IMG_URL}${poster_path}`}
            alt={`${original_title}`}
            className="movie-detail-page__poster"
          />
          <div>
            <h3 className="movie-detail-page__title">{original_title}</h3>
            <p>
              {status}: {release_date}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="ps-2">{overview}</p>
          <MovieTrailer />
        </div>
      </div>
    </div>
  );
}

export default MovieDetailBody;
