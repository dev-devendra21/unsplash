import React from "react";
import "./index.css";
import { IoSearch } from "react-icons/io5";

function SearchInput({ onSearchValue, value, onSearch }) {
  const handleSearch = () => {
    if (!value.trim()) return;

    onSearch({
      type: "SEARCH",
      payload: value,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <IoSearch className="search-icon" />

      <input
        className="search-input"
        type="search"
        value={value}
        placeholder="Search for photos"
        onChange={onSearchValue}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        className="search-button"
        onClick={handleSearch}
        aria-label="Search"
      >
        <IoSearch size={21} />
      </button>
    </div>
  );
}

export default SearchInput;
