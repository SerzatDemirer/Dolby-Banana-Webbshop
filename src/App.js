import React, { useState } from "react";
import "./App.css";
import Search from "./SearchBar";
import productsData from "./products.json";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="shop-name">Dolby Banana</h1>
        <Search onSearch={handleSearch} onClear={handleClearSearch} />
      </header>
    </div>
  );
}

export default App;
