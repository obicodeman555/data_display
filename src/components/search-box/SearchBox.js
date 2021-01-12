import React from "react";

import "./SearchBox.css";

const SearchBox = ({ placeholder, handleChange }) => (
  <div className="searchBoxContainer">
    <input
      type="search"
      placeholder={placeholder}
      className="searchBoxInput"
      onChange={handleChange}
    />
  </div>
);

export default SearchBox;
