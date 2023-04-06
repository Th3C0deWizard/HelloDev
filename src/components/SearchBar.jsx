const SearchBar = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-48 bg-gray-800">
      <h1 className="text-3xl text-white font-bold mb-5">Articulos</h1>
      <div className="flex items-center justify-center">
        <select className="focus:outline-none font-bold rounded-l-full bg-[#0069a3] w-auto h-10 text-white pl-4 py-0 ">
            <option value="0">All Categorys</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>   
        </select>
        <input
          type="text"
          placeholder="Type"
          className="px-4 py-2 pr-8 w-80 h-10 text-gray-700 bg-white border border-gray-400 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent m-0"
        />
        <button
          type="submit"
          className="ml-1 px-4 py-2 rounded-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-bold"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
