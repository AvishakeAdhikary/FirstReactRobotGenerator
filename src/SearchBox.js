import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="search"
        name=""
        placeholder="Search"
        onChange={searchChange}
      />
      <button className="searchButton" onClick={searchChange}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBox;
