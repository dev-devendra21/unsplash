import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./index.css";

function Pagination({ pageNo, setPageNo, noMore }) {
  return (
    <nav className="pagination" aria-label="Image pagination">
      {pageNo > 1 && (
        <button
          type="button"
          className="pagination-button pagination-previous"
          onClick={() => setPageNo("Previous")}
        >
          <FiArrowLeft size={15} />
          <span>Previous</span>
        </button>
      )}

      {!noMore && (
        <div className="pagination-page">
          <span className="pagination-label">Page</span>
          <span className="page-no">{pageNo}</span>
        </div>
      )}

      {!noMore && (
        <button
          type="button"
          className="pagination-button pagination-next"
          onClick={() => setPageNo("Next")}
        >
          <span>Next</span>
          <FiArrowRight size={15} />
        </button>
      )}
    </nav>
  );
}

export default Pagination;
