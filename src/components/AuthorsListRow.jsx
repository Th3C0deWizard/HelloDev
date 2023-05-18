function AuthorsListRow(props) {
	return (
		<tr key={props.id} className="bg-white  hover:bg-[#e6f2ff] text-black ">
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.autor.id_usuario}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.autor.nombres}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.autor.apellidos}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.autor.nombre_usuario}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.autor.email}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.autor.telefono ? props.autor.telefono : "No registrado"}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.autor.nacionalidad ? props.autor.nacionalidad : "No registrado"}
			</td>
			<td className="px-6 py-3 font-medium whitespace-nowrap">
				{props.autor.fecha_registro.substring(0, 10).replaceAll("-", "/")}
			</td>
		</tr>
	);
}

export default AuthorsListRow;
