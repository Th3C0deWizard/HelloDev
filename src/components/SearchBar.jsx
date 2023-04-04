import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {

  return (
    <div className="searchBarContainer">
      <h1 className="searchBarTittle">Articulos</h1>
      <div className="container">
        <select className="rounded-l-full bg-blue-700 w-auto text-white pl-4">
          <option value="0">All Categorys</option>
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </select>
        <input type="text" placeholder="Type" className="searchInput" />
        <button type="submit" className="searchButton">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
