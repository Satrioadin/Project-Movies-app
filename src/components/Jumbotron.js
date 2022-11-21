import React from "react";
import { Container } from "react-bootstrap";
import MovieUpComing from "./MovieUpComing";

function Jumbotron({ title, subTitle }) {
  return (
    <div className="jumbotron">
      <div className="jumbotron-content d-flex flex-column justify-content-center align-items-center text-white position-relative">
        <div className="jumbotron-content__body text-center">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        {window.screen.width > 600 ? (
          ""
        ) : (
          <Container
            fluid
            className="position-absolute"
            style={{ bottom: "5rem" }}
          >
            <MovieUpComing />
          </Container>
        )}
      </div>
    </div>
  );
}

export default Jumbotron;
