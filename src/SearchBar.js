import React, { useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    //props.onClear("");
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Sök efter produkter"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Sök</button>
        <button type="submit" onClick={handleClear}>
          Rensa sökning
        </button>
      </form>
    </div>
  );
}

export default Search;
