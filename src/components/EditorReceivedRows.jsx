function EditorReceivedRows(props) {
	return (
		<tr key={props.id} className="bg-white  hover:bg-[#e6f2ff] text-black ">
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.notification.e_nombres}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.notification.e_apellidos}
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
			<td className="px-7 py-3 font-medium whitespace-nowrap">
				<a href={props.notification.portada} target="_blank" rel="noreferrer">
					<img
						src="./src/components/assets/portada.png"
						alt="portada"
						className="h-12 hover:scale-110 transition"
					/>
				</a>
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				<button
					id="message"
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
			<button
				id="message"
				type="button"
				className="px-4 py-6 font-medium whitespace-nowrap"
				onClick={(e) => {
					props.showMessage(
						"Mensaje de:",
						props.notification.mensaje,
						`${props.notification.e_nombres} ${props.notification.e_apellidos}`,
						"message",
					);
				}}
			>
				<img
					src="./src/components/assets/message.png"
					alt="pdf"
					className="h-12 hover:scale-110 transition"
				/>
			</button>
			<td className="px-7 py-3 font-medium whitespace-nowrap">
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
					id="accept"
					type="button"
					className="bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg py-1.5 px-1  text-center rounded shadow-lg hover:scale-110 transition"
					onClick={(e) => {
						props.showInputMessage(
							props.notification.id_articulo,
							3,
							props.notification.id_estado,
							props.notification.id_emisor,
							props.notification.titulo,
							props.notification.fecha,
						);
					}}
				>
					Aceptar
				</button>
				<button
					id="reject"
					type="button"
					className="ml-5 bg-[#F4D73B] hover:bg-[#fae360] text-[#0069a3] font-medium text-lg py-1.5 px-1 text-center rounded shadow-lg hover:scale-110 transition"
					onClick={(e) => {
						props.showInputMessage(
							props.notification.id_articulo,
							4,
							props.notification.id_emisor,
							props.notification.titulo,
							props.notification.fecha,
						);
					}}
				>
					Rechazar
				</button>
			</td>
		</tr>
	);
}

export default EditorReceivedRows;
