import React from "react";

function SearchInput() {
  return (
    <div className="container">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        type="text"
        className="container__input"
        placeholder="Search for a country"
      />
    </div>
  );
}

export default SearchInput;
