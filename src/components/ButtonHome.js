import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";

function ButtonHome() {
  return (
    <button type="button" className="home-button bg-transparent" title="home">
      <Link to="/">
        <TbArrowBack size={42} color="black" />
      </Link>
    </button>
  );
}

export default ButtonHome;
