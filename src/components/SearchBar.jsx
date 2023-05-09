import { useState } from "react";
import Dropdown from "./Dropdown";
import Icon from "./Icon";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <button
        id="dropdown-button"
        className="relative inline-flex items-center px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-l-lg hover:bg-blue-700 hover:scale-105 transition"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        All categories
        <div className="ml-3 mt-1">
          <Icon
            path={
              isOpen
                ? "M4.5 15.75l7.5-7.5 7.5 7.5"
                : "M19.5 8.25l-7.5 7.5-7.5-7.5"
            }
            w={4}
            h={4}
            color="white"
          />
        </div>
      </button>

      {isOpen && <Dropdown list={["hola", "mundo"]} />}

      <input
        type="search"
        id="search-dropdown"
        className="p-2.5 w-2/5 z-20 text-sm text-black bg-white border-2 border-[#0069a3] focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
        placeholder="Search Mockups, Logos, Design Templates..."
        required
      />
      <button
        type="submit"
        className="-translate-x-1 p-2 text-sm bg-blue-600 rounded-r-lg border border-blue-700 hover:bg-blue-700 hover:scale-105 transition rounded-lg"
      >
        <Icon
          path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          w={6}
          h={6}
          color="white"
        />
      </button>
    </div>
  );
};

export default SearchBar;
