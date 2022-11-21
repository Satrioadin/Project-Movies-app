import React from "react";
import { Badge, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/api";

function MovieItem({ poster_path, id, vote_average, title }) {
  return (
    <Link to={`/details/${id}`}>
      <Card className="movie-card shadow rounded overflow-hidden position-relative">
        <div className="movie-card-img__wrapper">
          <img
            className="movie-card__img d-blok"
            variant="top"
            src={`${IMG_URL}${poster_path}`}
            alt={`${title}`}
            loading="lazy"
          />
        </div>
        <Badge bg="warning" className="position-absolute end-0 mt-1 me-1">
          <div className="d-flex align-items-center gap-1">
            <AiFillStar />
            {vote_average}
          </div>
        </Badge>
        <Card.Body>
          <Card.Title className="movie-card__title">{title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
export default MovieItem;
