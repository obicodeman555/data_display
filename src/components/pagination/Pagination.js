import React from "react";
import "./Pagination.css";

function Pagination({
  userDataPerPage,
  totalUsersData,
  paginate,
  btnCondition,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsersData / userDataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pageNumberContainer">
        <div className="pgnum">Page Numbers:</div>
        {pageNumbers.map((number, index) => (
          <li key={index}>
            <a
              onClick={() => paginate(number)}
              href="!#"
              className={`pageBtn ${
                btnCondition === number ? "active" : "inactive"
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
