import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

const AuthorsList = () => {
	return (
		<>
			<Header />
			<section className=" bg-slate-900 p-8">
				<h1 className="grid place-items-center mb-4 font-extrabold text-5xl text-white">
					Autores
				</h1>
				<Table
					headers={[
						"Codigos",
						"Nombres",
						"Apellidos",
						"Seudónimo",
						"Teléfono",
						"E-mail",
						"Fecha registro",
					]}
					data={[
						[
							"01",
							"Pepito",
							"Perez Lopez",
							"PepeLop",
							"123456789",
							"pepito@gmail.com",
							"2020-10-12",
						],
						[
							"02",
							"Pedro",
							"Garcia Loaiza",
							"PedroG",
							"987654321",
							"pedrogl@hotmail.com",
							"2022-09-11",
						],
					]}
					styleData={[
						" whitespace-nowrap",
						"",
						"",
						"",
						"",
						"text-amber-400 hover:underline cursor-pointer",
						"",
					]}
				/>
				<SearchBar />
			</section>
			<Footer />
		</>
	);
};

export default AuthorsList;
