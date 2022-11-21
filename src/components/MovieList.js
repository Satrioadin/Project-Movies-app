import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <MovieItem {...movie} key={movie.id} />
      ))}
    </>
  );
}

export default MovieList;
