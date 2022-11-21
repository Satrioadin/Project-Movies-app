import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonHome from "../components/ButtonHome";
import Loading from "../components/Loading";
import MovieDetail from "../components/MovieDetail";
import MovieRecomment from "../components/MovieRecomment";
import { getMovieDetail } from "../utils/api";

function DetailPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieDetail(id)
      .then(setIsLoading(true))
      .then(({ data }) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div>
        <MovieDetail {...movieDetails} movie={movieDetails} />
        <MovieRecomment />
        <ButtonHome />
      </div>
    );
  }
}

export default DetailPage;
