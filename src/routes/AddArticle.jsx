import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import InputFile from "../components/InputFile";

const AddArticle = () => {
	const [titulo, setTitulo] = useState("");
	const [resumen, setResumen] = useState("");
	const [portada, setPortada] = useState("");
	const [archivo, setArchivo] = useState("");

	const handleSubmit = () => {
		const formData = new FormData();
		formData.append("titulo", titulo);
		formData.append("resumen", resumen);
		formData.append("portada", portada);
		formData.append("archivo", archivo);
		console.log(archivo, portada);
		fetch("http://localhost:3000/articulos", {
			method: "POST",
			contentType: "multipart/form-data",
			body: formData,
		})
			.then((response) => {
				if (!response.ok) console.error("error al Añadir el articulo");
				return response.json();
			})
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	};

	return (
		<>
			<Header />
			<div
				className="flex justify-center min-h-[93vh] bg-cover pt-20"
				style={{
					background:
						"url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
				}}
			>
				<div className="flex flex-col place-items-center justify-center pb-10 pt-5">
					<div className="w-full rounded-lg shadow bg-slate-900 border-gray-700 bg-opacity-70">
						<div className="col-span-2 grid grid-cols-5 grid-rows-14 m-6">
							<h1 className="col-start-1 col-span-5 grid place-items-center font-extrabold text-5xl text-white mb-4">
								Agregar Articulo
							</h1>
							<Input
								label="Titulo Articulo"
								type="text"
								id="tittle"
								placeholder="Titulo"
								style="col-start-1 col-span-5"
								onChange={(e) => setTitulo(e.target.value)}
							/>
							<h3 className="col-span-5">Resumen</h3>
							<textarea
								className="col-span-5 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
								placeholder=" Resumen..."
								required
								onChange={(e) => setResumen(e.target.value)}
							/>
							<h3 className="col-start-1 col-span-2 mt-5">
								Archivo del Articulo
							</h3>
							<h3 className="col-start-4 col-span-2 mt-5">Portada</h3>
							<div className="col-start-1 col-span-2 items-center justify-center w-full">
								<InputFile
									id="archivo"
									placeholder="PDF, WORD, or TXT (MAX. 800x400px)"
									onChange={(e) => setArchivo(e.target.files[0])}
								/>
							</div>
							<div className="col-start-4 col-span-2 items-center justify-center w-full">
								<InputFile
									id="portada"
									placeholder="SVG, PNG, JPG or GIF (MAX. 800x400px)"
									onChange={(e) => setPortada(e.target.files[0])}
								/>
							</div>
							<div className="col-start-3 grid place-items-center">
								<button
									type="submit"
									className=" mt-5 text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-md p-2"
									onClick={handleSubmit}
								>
									Agregar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AddArticle;
