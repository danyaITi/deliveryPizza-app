import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type FuncProps = { onChangePage: (page: number) => void };

const Pagination: React.FC<FuncProps> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.box}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      previousLabel="<"
    />
  );
};
export default Pagination;