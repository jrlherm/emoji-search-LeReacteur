import { useState } from "react";

const Search = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <header>
      <h1>😎 Emoji Search 😎</h1>
      <div className="search-label">
        <input
          type="text"
          name="search"
          placeholder="What emoji are u looking for ?"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};
export default Search;
