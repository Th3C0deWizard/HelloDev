const SearchBar = () => {
  return (
    <div className="flex items-center justify-center grid grid-cols-10 gap-0">
      <select className=" col-start-3 font-bold rounded-l-full text-sm bg-[#0069a3] w-auto h-14 text-white pl-4 py-0 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500">
        <option selected>Filter</option>
        <option value="1">Categoria 1</option>
        <option value="2">Categoria 2</option>
        <option value="3">Categoria 3</option>
      </select>

      <form className="col-span-5 rounded-r-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="mb-0 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-400 rounded-r-full bg-white focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2 bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-full text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
