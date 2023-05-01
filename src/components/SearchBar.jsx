import { Dropdown } from "flowbite-react";
import Icon from "./Icon";

const SearchBar = ({ setIsLoading }) => {
	return (
		<form className="grid grid-cols-10 gap-0">
			<div className="flex col-start-3 col-span-6">
				<Dropdown label="filter">
					<Dropdown.Item>Autor</Dropdown.Item>
					<Dropdown.Item>Fecha</Dropdown.Item>
				</Dropdown>
				<div className="relative w-full">
					<input
						type="search"
						id="search-dropdown"
						className="block p-2.5 w-full z-20 text-sm text-black bg-white rounded-r-lg border-l-gray-700 border-l-2 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 mb-0"
						placeholder="Search Mockups, Logos, Design Templates..."
						required
					/>
					<button
						type="submit"
						className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-blue-600 rounded-r-lg border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800"
						onClick={() => setIsLoading(true)}
					>
						<Icon
							path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							w={6}
							h={6}
							color="white"
						/>
						<span className="sr-only">Search</span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
