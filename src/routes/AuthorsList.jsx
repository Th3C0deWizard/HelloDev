import AuthorsListRow from "../components/AuthorsListRow";
import AuthorsSearchBar from "../components/AuthorsSearchBar";
import Footer from "../components/Footer";
import Table from "../components/Table";
import useFetch from "../hooks/useFetch";

const AuthorsList = () => {
	const [authors, setAuthors, isLoading, setIsLoading] = useFetch(
		"autores",
		(error) => {
			console.error("Fallo al cargar los autores");
		},
	);

	return (
		<>
			<section className=" bg-white p-8 min-h-[40vh] pt-20">
				<h1 className="grid place-items-center font-extrabold text-6xl text-[#0069a3] mb-10">
					Autores
				</h1>
				<AuthorsSearchBar setAuthors={setAuthors} />
				{isLoading ? (
					<h1>Esta cargando</h1>
				) : (
					<Table
						headers={[
							"Id",
							"Nombre(s)",
							"Apellidos",
							"Usuario",
							"Email",
							"Telefono",
							"Nacionalidad",
							"Fecha registro",
						]}
						data={authors?.map((autor) => (
							<AuthorsListRow id={autor.id_usuario} autor={autor} />
						))}
					/>
				)}
			</section>
			<Footer />
		</>
	);
};

export default AuthorsList;
