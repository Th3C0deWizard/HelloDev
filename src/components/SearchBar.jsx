import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <h1 className="searchBarTittle">Articulos</h1>
      <div className="container">
        <input type="text" placeholder="Type" className="searchInput" />
        <button type="submit" className="searchButton">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
