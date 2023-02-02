import React from "react";
import s from "./MyPagination.module.css";
import Pagination from "@material-ui/lab/Pagination";

const MyPagination = ({usersPerPage, totalUsers, paginate}) => {

  const pageNumbers = [];
  const pageCount = Math.ceil(totalUsers / usersPerPage);
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Pagination
        count={pageNumbers.length}
        defaultPage={1}
        classes={{
          ul: s.pagination_list,
        }}
        size={'large'}
        onChange={(event, number) => paginate(number)}
        siblingCount={2}/>
    </div>
  )
}

export default MyPagination;