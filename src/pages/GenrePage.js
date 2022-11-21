import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getGendreList } from "../utils/api";

function GenrePage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGendreList().then(({ data }) => {
      setGenres(data);
    });
  }, []);

  return (
    <div className="genre-page d-flex flex-wrap gap-1 justify-content-center">
      {genres.map((genre) => (
        <Link to={`/movie/genre/${genre.name}/${genre.id}`} key={genre.id}>
          <Button variant="primary">{genre.name}</Button>
        </Link>
      ))}
    </div>
  );
}

export default GenrePage;
