import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTHOR_FILTERS } from "../const.js";
import DropdownButton from "./DropdownButton";
import Icon from "./Icon";

const AuthorSearchBar = (props) => {
	const navigate = useNavigate();
	const [fieldValues, setFieldValues] = useState({
		filter: "0",
		filterValue: "",
	});

	const [state, setState] = useState(true);

	const handleDropDownChange = (e) => {
		const filterString = e.target.attributes.value.value;
		console.log(filterString);
		if (filterString === "0")
			setFieldValues({ ...fieldValues, filter: AUTHOR_FILTERS.ALL });
		else if (filterString === "1")
			setFieldValues({ ...fieldValues, filter: AUTHOR_FILTERS.NAME });
		else if (filterString === "2")
			setFieldValues({ ...fieldValues, filter: AUTHOR_FILTERS.LASTNAME });
		else if (filterString === "3")
			setFieldValues({ ...fieldValues, filter: AUTHOR_FILTERS.SEUDONIMO });
		else if (filterString === "4")
			setFieldValues({ ...fieldValues, filter: AUTHOR_FILTERS.EMAIL });
		else if (filterString === "5")
			setFieldValues({ ...fieldValues, filter: AUTHOR_FILTERS.TEL });
		else if (filterString === "6")
			setFieldValues({ ...fieldValues, filter: AUTHOR_FILTERS.NATION });
		else console.log("Error al seleccionar filtro");
	};

	const handleChange = (e) => {
		setFieldValues({ ...fieldValues, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(fieldValues);
			const response = await fetch("http://localhost:3000/autores/buscar", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(fieldValues),
			});
			const data = await response.json();
			if (response.ok) {
				props.setAuthors(data);
			} else {
				alert(`Error al buscar Autores ${data.message}`);
			}
		} catch (error) {
			console.error(error);
		} finally {
		}
	};

	return (
		<form className="flex justify-center" onSubmit={handleSubmit}>
			<DropdownButton
				text="Filtrar por"
				options={[
					"All",
					"Nombres",
					"Apellidos",
					"Seudonimo",
					"Email",
					"Telefono",
					"Nacionalidad",
				]}
				state={setState}
				position="top-[30%] -translate-x-[19rem]"
				handleChange={handleDropDownChange}
				name="filter"
			/>
			<input
				type="search"
				name="filterValue"
				id="filterValue"
				className="p-2.5 w-2/5  text-sm text-black bg-white border-2 border-[#0069a3] focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
				placeholder="Search Mockups, Logos, Design Templates..."
				onChange={handleChange}
				required={state}
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
		</form>
	);
};

export default AuthorSearchBar;
