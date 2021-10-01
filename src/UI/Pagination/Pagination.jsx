import React from "react";
import { getPagesArrey } from "../../utils/getPageCount";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArrey(totalPages);
  return (
    <div className={"pagination"}>
      {pagesArray.map((p) => {
        return (
          <button
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "btn current" : "btn"}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
