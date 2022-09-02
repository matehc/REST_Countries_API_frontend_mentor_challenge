import React from "react";

function SearchInput({onChangeHandler}) {
  return (
    <div className="container">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        type="text"
        className="container__input"
        placeholder="Search for a country"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchInput;
