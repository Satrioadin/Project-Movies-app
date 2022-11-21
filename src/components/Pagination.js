import React from "react";
import { Link } from "react-router-dom";

function Paginations({ pages, onPagesChange, nextPages, prevPages }) {
  return (
    <div className="d-flex align-items-center px-2 gap-3">
      <button onClick={prevPages} className="my-auto">
        kembali
      </button>
      <input
        type="text"
        style={{ width: "20px" }}
        value={pages}
        onChange={onPagesChange}
      />
      <button onClick={nextPages} className="my-auto">
        Lanjut
      </button>
    </div>
  );
}

export default Paginations;
