import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changePage } from "../redux/actions/moviesActions";

const Pagination = () => {
  const { page_number, genre, sort_by } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const nextPage = () => {
    dispatch(changePage(page_number + 1, genre, sort_by));
  };

  const previousPage = () => {
    if (page_number > 1) {
      dispatch(changePage(page_number - 1, genre, sort_by));
    }
  };

  return (
    <div className="pagination-container">
      <div className="pagination">
        <h1 className="icon-modal-close" onClick={previousPage}>
          &#8592;
        </h1>
        <p style={{ margin: "0 10px" }}>Page {page_number}</p>
        <h1 className="icon-modal-close" onClick={nextPage}>
          &#8594;
        </h1>
      </div>
    </div>
  );
};

export default Pagination;
