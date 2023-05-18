function EditorHistoryRows(props) {
	return (
		<tr key={props.id} className="bg-white  hover:bg-[#e6f2ff] text-black ">
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.notification.r_nombres}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.notification.r_apellidos}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.notification.id_articulo}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.notification.titulo}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.notification.fecha.substring(0, 10).replaceAll("-", "/")}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.notification.estado}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				<img
					typeof="button"
					src="./src/components/assets/portada.png"
					alt="portada"
					className="h-12 hover:scale-110 transition cursor-pointer"
					onClick={() => {
						props.setImageView({
							visible: true,
							titulo: props.notification.titulo,
							imagen: props.notification.portada,
						});
					}}
				/>
			</td>
			<td>
				<button
					id="resume"
					type="button"
					className="px-6 py-3 font-medium whitespace-nowrap"
					onClick={(e) => {
						props.showMessage(
							"Resumen de",
							props.notification.resumen,
							props.notification.titulo,
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
				<a href={props.notification.archivo} target="_blank" rel="noreferrer">
					<img
						src="./src/components/assets/pdf.png"
						alt="pdf"
						className="h-12 hover:scale-110 transition"
					/>
				</a>
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				<button
					id="send"
					type="button"
					className="bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg py-1.5 px-1  text-center rounded shadow-lg hover:scale-110 transition"
					onClick={(e) => {
						props.showInputMessage(
							props.notification.id_articulo,
							6,
							props.notification.id_estado,
							props.notification.id_emisor,
							props.notification.titulo,
							props.notification.fecha,
						);
					}}
				>
					Revertir Estado
				</button>
			</td>
		</tr>
	);
}

export default EditorHistoryRows;
