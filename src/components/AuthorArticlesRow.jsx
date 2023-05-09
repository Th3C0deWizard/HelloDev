function AuthorArticlesRows(props) {
	const sendArticle = () => {
		const message = prompt("Escriba un mensaje para el editor");

		fetch("http://localhost:3000/notificaciones", {
			method: "POST",
			contentType: "multipart/form-data",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id_emisor: props.autor,
				id_receptor: props.editor,
				mensaje: message,
				id_articulo_notificacion: props.article.id,
				id_estado: props.article.id_estado,
				new_estado: 2,
			}),
		})
			.then(async (response) => {
				const message = await response.text();
				if (response.ok) return message;
				else throw new Error(message);
			})
			.then((response) => {
				props.load(true);
				props.showSFAlert(
					"Envio exitoso",
					props.article.titulo,
					"fue enviado al editor exitosamente",
				);
			})
			.catch((error) => {
				props.showFAlert(
					"Envio fallido",
					`No se pudo enviar el articulo / ${error.message.substring(
						12,
						error.message.length - 2,
					)}`,
				);
				console.log(error);
			});
	};

	const deleteArticle = async () => {
		await fetch(`http://localhost:3000/articulos/${props.article.id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(async (response) => {
				const message = await response.text();
				if (response.ok) return message;
				else throw new Error(message);
			})
			.then((response) => {
				props.load(true);
				props.showSFAlert(
					"Eliminación exitosa",
					props.article.titulo,
					"fue eliminado exitosamente",
				);
			})
			.catch((error) => {
				props.showFAlert(
					"Eliminación fallida",
					`No se pudo eliminar el articulo / ${error.message.substring(
						12,
						error.message.length - 2,
					)}`,
				);
			});
	};

	return (
		<tr key={props.id} className="bg-white  hover:bg-[#e6f2ff] text-black ">
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.article.id}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.article.titulo}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.article.fecha_creacion.substring(0, 10).replaceAll("-", "/")}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					typeof="button"
					src="./src/components/assets/portada.png"
					alt="portada"
					className="h-12 hover:scale-110 transition cursor-pointer"
					onClick={() => {
						props.setImageView({
							visible: true,
							titulo: props.article.titulo,
							imagen: props.article.portada,
						});
					}}
				/>
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				<button
					id="message"
					type="button"
					onClick={(e) => {
						props.showMessage(
							"Resumen de",
							props.article.resumen,
							props.article.titulo,
							"resume",
						);
					}}
				>
					<img
						src="./src/components/assets/resume.png"
						alt="pdf"
						className="h-12 hover:scale-110 transition"
					/>
				</button>
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				<a href={props.article.archivo} target="_blank" rel="noreferrer">
					<img
						src="./src/components/assets/pdf.png"
						alt="pdf"
						className="h-12 hover:scale-110 transition"
					/>
				</a>
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.article.estado}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				<button
					id="send"
					type="button"
					className="bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg py-1.5 px-1  text-center rounded shadow-lg hover:scale-110 transition"
					onClick={(e) => {
						sendArticle();
					}}
				>
					Enviar
				</button>
				<button
					id="edit"
					type="button"
					className="ml-5 bg-[#F4D73B] hover:bg-[#fae360] text-[#0069a3] font-medium text-lg py-1.5 px-1 text-center rounded shadow-lg hover:scale-110 transition"
					onClick={(e) => {
						props.showEdit(props.article);
					}}
				>
					Editar
				</button>
				<button
					id="delete"
					type="button"
					className="ml-5 bg-[#E36727] hover:bg-[#e87212] text-white font-medium text-lg py-1.5 px-1 text-center rounded shadow-lg hover:scale-110 transition"
					onClick={(e) => {
						deleteArticle();
					}}
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
}

export default AuthorArticlesRows;
