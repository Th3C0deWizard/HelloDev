import Icon from "./Icon";

const SearchBar = () => {
	return (
		<form className="grid grid-cols-10 gap-0">
			<div className="flex col-start-3 col-span-6">
				<label
					htmlFor="search-dropdown"
					className="mb-2 text-sm font-medium sr-only text-white"
				/>
				<button
					id="dropdown-button"
					data-dropdown-toggle="dropdown"
					className="flex-shrink-0 inline-flex items-center px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-l-lg hover:bg-blue-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
					type="button"
				>
					All categories
					<div className="ml-3 mt-1">
						<Icon
							path="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							w={6}
							h={6}
							color="white"
						/>
					</div>
				</button>
				<div
					id="dropdown"
					className="z-10 hidden divide-y divide-gray-600 rounded-lg shadow w-44 bg-gray-700"
				>
					<ul
						className="py-2 text-sm text-gray-200"
						aria-labelledby="dropdown-button"
					>
						<li>
							<button
								type="button"
								className="inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white"
							>
								Mockups
							</button>
						</li>
						<li>
							<button
								type="button"
								className="inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white"
							>
								Templates
							</button>
						</li>
					</ul>
				</div>
				<div className="relative w-full">
					<input
						type="search"
						id="search-dropdown"
						className="block p-2.5 w-full z-20 text-sm text-white bg-white rounded-r-lg border-l-gray-700 border-l-2 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 mb-0"
						placeholder="Search Mockups, Logos, Design Templates..."
						required
					/>
					<button
						type="submit"
						className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-600 rounded-r-lg border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800"
					>
						<Icon
							path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							w={5}
							h={5}
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
