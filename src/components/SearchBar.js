import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { TbSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const keyboardRef = useRef("");

  const keywordChangeHandler = (event) => {
    setKeyword(event.target.value);
    navigate(`/movie/search/${event.target.value}`);
  };

  const onSubmitHandler = () => {
    navigate(`/movie/search/${keyword}`);
  };

  return (
    <Form
      className="d-flex align-items-center bg-white rounded-3"
      onSubmit={onSubmitHandler}
    >
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 border-0 bg-transparent"
        aria-label="Search"
        onChange={keywordChangeHandler}
        value={keyword}
        ref={keyboardRef}
      />
      <button type="submit" className="bg-transparent border-0">
        <TbSearch />
      </button>
    </Form>
  );
}

export default SearchBar;
