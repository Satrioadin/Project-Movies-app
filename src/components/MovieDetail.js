import React from "react";
import MovieDetailBody from "./MovieDetailBody";

function MovieDetail({ movie }) {
  return (
    <div>
      <MovieDetailBody {...movie} />
    </div>
  );
}

export default MovieDetail;
