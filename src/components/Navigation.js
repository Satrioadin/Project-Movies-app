import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { getGendreList } from "../utils/api";
import SearchBar from "./SearchBar";

function Navigation() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGendreList().then(({ data }) => {
      setGenres(data);
    });
  }, []);

  return (
    <Navbar key={"md"} expand={"md"} className="mb-3 fixed-top bg-transparent">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#ff1e00" }}>
          Stran Movie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Link</Nav.Link>
              <NavDropdown
                title="Genre"
                id={`offcanvasNavbarDropdown-expand-md`}
                className="w-100"
              >
                <div className="d-flex gap-2 flex-wrap justify-content-center">
                  {genres.map((genre) => (
                    <Link
                      to={`/movie/genre/${genre.name}/${genre.id}`}
                      key={genre.id}
                    >
                      <Button variant="danger">{genre.name}</Button>
                    </Link>
                  ))}
                </div>
              </NavDropdown>
            </Nav>
            <SearchBar />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
