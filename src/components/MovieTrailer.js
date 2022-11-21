import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieTrailer } from "../utils/api";
import Loading from "./Loading";

function MovieTrailer() {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieTrailer(id)
      .then(setIsLoading(true))
      .then(({ data }) => {
        setVideo(data);
        setIsLoading(false);
      });
  }, [id]);

  const filtered = video.filter((vid) => {
    return vid.type === "Trailer";
  });

  return isLoading ? (
    <Loading />
  ) : (
    <Container fluid>
      <div className="mx-auto">
        <Carousel interval={null} indicators={false}>
          {filtered.map((vid) => (
            <Carousel.Item key={vid.id}>
              <iframe
                className="ratio ratio-16x9 frame-video__trailer"
                src={`https://www.youtube.com/embed/${vid.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default MovieTrailer;
