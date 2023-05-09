import { useState } from "react";

function Edit(props) {
	const [phPdf, setPhPdf] = useState(`${props.article.titulo}.pdf`);
	const [phC, setPhC] = useState("portada");

	const [pdf, setPdf] = useState(props.article.archivo);
	const [portada, setPortada] = useState(props.article.portada);
	const [titulo, setTitulo] = useState(props.article.titulo);
	const [resumen, setResumen] = useState(props.article.resumen);

	const handleChangePdf = (e) => {
		setPdf(e.target.files[0]);
		setPhPdf(e.target.files[0].name);
	};

	const handleChangePortada = (e) => {
		setPortada(e.target.files[0]);
		setPhC(e.target.files[0].name);
	};

	const save = () => {
		const formData = new FormData();
		formData.append("id_articulo", props.article.id);
		formData.append("titulo", titulo);
		formData.append("resumen", resumen);
		formData.append("estado", props.article.id_estado);
		formData.append("id_autor", props.id_autor);
		formData.append("portada", portada);
		formData.append("archivo", pdf);

		fetch("http://localhost:3000/articulos", {
			method: "PATCH",
			contentType: "multipart/form-data",
			body: formData,
		})
			.then(async (response) => {
				const message = await response.text();
				if (response.ok) return message;
				else throw new Error(message);
			})
			.then((response) => {
				props.load(true);
				props.showSFAlert(
					"Edición exitosa",
					titulo,
					"fue editado exitosamente",
				);
			})
			.catch((error) => {
				props.showFAlert(
					"Edición fallida",
					`No se pudo editar el articulo / ${error.message.substring(
						12,
						error.message.length - 2,
					)}`,
				);
				console.log(error);
			});
	};

	return (
		<main className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
			<div className="bg-[#e6f2ff] p-2 rounded-xl w-1/3 min-h-1/3 grid place-items-center">
				<h1 className="font-semibold text-center text-xl text-gray-700">
					Welcome back
				</h1>
				<section className="flex m-5 items-center">
					<label className="flex items-center justify-center h-10 rounded-xl cursor-pointer shadow hover:scale-105 transition">
						<p className="text-sm text-black bg-gray-300 rounded-l-xl p-2 h-full">
							Seleccionar Archivo
						</p>
						<p className="text-sm text-black p-2">{phPdf}</p>
						<input type="file" className="hidden" onChange={handleChangePdf} />
					</label>
					<img
						src="./src/components/assets/pdf.png"
						alt="pdf"
						className="h-12 ml-5 hover:scale-110 transition"
					/>
				</section>
				<section className="flex m-5 items-center">
					<label className="flex items-center justify-center h-10 rounded-xl cursor-pointer shadow hover:scale-105 transition">
						<p className="text-sm text-black bg-gray-300 rounded-l-xl p-2 h-full">
							Seleccionar Archivo
						</p>
						<p className="text-sm text-black p-2">{phC}</p>
						<input
							type="file"
							className="hidden"
							onChange={handleChangePortada}
						/>
					</label>
					<img
						src="./src/components/assets/portada.png"
						alt="portada"
						className="h-12 ml-5 hover:scale-110 transition"
					/>
				</section>
				<section className="flex m-5 items-center w-[90%]">
					<label className="flex items-center justify-center h-10 rounded-xl cursor-pointer shadow w-full">
						<p className="text-sm text-black bg-gray-300 rounded-l-xl p-2 h-full">
							Titulo
						</p>
						<input
							type="text"
							className="text-black p-2 rounded-r-xl w-full"
							defaultValue={titulo}
							onChange={(e) => {
								setTitulo(e.target.value);
							}}
						/>
					</label>
				</section>
				<section className="m-5 items-center shadow rounded-xl w-[90%]">
					<p className="text-sm text-black bg-gray-300 rounded-t-xl p-2">
						Resumen
					</p>
					<textarea
						type="text"
						className="text-black rounded-b-xl p-2 w-full h-full"
						defaultValue={resumen}
						onChange={(e) => {
							setResumen(e.target.value);
						}}
					/>
				</section>
				<section className="text-center">
					<button
						className="bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg p-2  text-center rounded-xl shadow-lg hover:scale-110 transition"
						onClick={save}
					>
						Save
					</button>
					<button
						className="ml-10 bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg p-2 text-center rounded-xl shadow-lg hover:scale-110 transition"
						onClick={props.onClose}
					>
						Close
					</button>
				</section>
			</div>
		</main>
	);
}

export default Edit;
