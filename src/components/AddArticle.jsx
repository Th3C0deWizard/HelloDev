import { useState } from "react";
import Input from "./Input";
import InputFile from "./InputFile";

const AddArticle = ({
	id,
	setShowAddArticle,
	showSFAlert,
	showFAlert,
	load,
}) => {
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
		formData.append("id_autor", id);
		console.log(archivo, portada);
		fetch("http://localhost:3000/articulos", {
			method: "POST",
			contentType: "multipart/form-data",
			body: formData,
		})
			.then(async (response) => {
				const message = await response.text();
				if (response.ok) return message;
				else throw new Error(message);
			})
			.then((response) => {
				load(true);
				setShowAddArticle(false);
				showSFAlert("Articulo añadido", titulo, "fue añadido exitosamente");
				return response;
			})
			.catch((error) => {
				showFAlert(
					"Adición fallida",
					`No se pudo añadir el articulo / ${error.message.substring(
						12,
						error.message.length - 2,
					)}`,
				);
				console.log(error);
			});
	};

	return (
		<>
			<div className="fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					src="./src/components/assets/close.png"
					alt="check"
					className="h-8 hover:scale-110 transition cursor-pointer absolute top-20 ml-[680px]"
					onClick={(e) => {
						setShowAddArticle(false);
					}}
				/>
				<div className="p-2 rounded-xl min-h-1/3 grid place-items-center shadow bg-[#0069a3] border-gray-700 bg-opacity-90">
					<div className="grid grid-cols-5 grid-rows-14 m-6">
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
							id="resumen"
							className="col-span-5 text-sm resize-none rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
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
								className=" mt-5 text-white bg-amber-500 hover:bg-amber-400 hover:scale-105 transition font-medium rounded-lg text-md p-2"
								onClick={handleSubmit}
							>
								Agregar
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddArticle;
