import React from "react";
import "./Search.css";

import { IoSearchOutline } from "react-icons/io5";

function Search({ handleSearchNote }) {
  const handleSearchNotes = (e) => {
    handleSearchNote(e.target.value);
  };
  return (
    <div className="search-container">
      <div className="search">
        <IoSearchOutline className="search-icon" size="1.3em" />
        <input
          onChange={handleSearchNotes}
          className="search-input"
          type="text"
          placeholder="Type to search..."
        />
      </div>
    </div>
  );
}

export default Search;
