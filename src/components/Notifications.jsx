function Notification({ key, item }) {
	return (
		<div
			id={key}
			className={`bg-white border border-b-4 ${
				item.estado === "Aceptado"
					? "border-b-green-600"
					: item.estado === "Rechazado"
					? "border-b-red-500"
					: "border-b-orange-500"
			} py-2 px-10 w-full  hover:shadow-gray-600 hover:shadow hover:border-x-gray-600 hover:border-t-gray-600 hover:scale-105 transition`}
		>
			<section className="grid grid-cols-3 items-center mb-2">
				<h1 className="text-lg font-semibold  text-black ">
					{`${item.e_nombres} ${item.e_apellidos}.`}
				</h1>
				<div className="col-span-2 flex">
					<h1 className="inline-block text-lg font-semibold text-black ml-auto max-w-md">
						{`"${item.titulo}"`}
					</h1>
					<time className="inline-block text-lg font-semibold text-blue-600 ml-auto">
						{item.fecha.substring(0, 10).replaceAll("-", "/")}
					</time>
				</div>
			</section>
			<section className="grid grid-cols-5 items-center">
				<div className="col-span-4">
					<h1
						className={`text-sm font-medium ${
							item.estado === "Aceptado"
								? "text-green-600"
								: item.estado === "Rechazado"
								? "text-red-500"
								: "text-orange-500"
						}`}
					>
						{item.estado}
					</h1>
					<h1 className="text-sm font-medium text-gray-800 text-justify">
						{item.mensaje}
					</h1>
				</div>
				<a
					href={`http://localhost:3000/articulos/${item.id_articulo}.pdf`}
					target="_blank"
					className="rounded-full flex items-center justify-center w-32 h-10 ml-auto text-gray-500 font-semibold bg-transparent border-2 border-gray-400 hover:bg-red-400 hover:text-white hover:border-red-600 hover:scale-105 transition"
					rel="noreferrer"
				>
					<img
						src="./src/components/assets/pdf.png"
						alt="pdf"
						className="h-6 mr-2"
					/>
					PDF
				</a>
			</section>
		</div>
	);
}

export default Notification;
