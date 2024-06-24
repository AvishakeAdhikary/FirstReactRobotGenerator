import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="search"
        placeholder="Search"
        value={searchField}
        onChange={searchChange}
      />
      <button className="searchButton">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBox;
