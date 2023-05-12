import { useState } from "react";

function InputMessage(props) {
	const [message, setMessage] = useState("");
	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	const sendArticle = () => {
		props.close(false);
		fetch("http://localhost:3000/notificaciones", {
			method: "POST",
			contentType: "multipart/form-data",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id_emisor: props.object.emisor,
				id_receptor: props.object.receptor,
				mensaje: message,
				id_articulo_notificacion: props.object.article,
				id_estado: props.object.id_estado,
				new_estado: props.object.new_estado,
				fecha: props.object.fecha,
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
					`${props.titulo} exitoso`,
					props.object.article_titulo,
					`fue ${props.success} exitosamente`,
				);
			})
			.catch((error) => {
				props.showFAlert(
					`${props.titulo} fallido`,
					`${props.fail} / ${error.message.substring(
						12,
						error.message.length - 2,
					)}`,
				);
				console.log(error);
			});
	};

	return (
		<div className="fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
			<section className="flex items-center justify-center rounded-xl shadow w-90 h-36 bg-white p-5">
				<img
					src={`./src/components/assets/${props.icon}.png`}
					alt="check"
					className="h-12 hover:scale-110 transition"
				/>
				<section className="ml-5">
					<div>
						<label className="grid place-items-center mb-2 text-lg font-semibold text-blue-700">
							Ingrese el mensaje
						</label>
						<input
							type="text"
							id="message"
							className="text-sm rounded-lg block w-full p-2.5 bg-white border shadow text-black"
							onChange={handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-amber-500 hover:bg-amber-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 hover:scale-105 transition"
						onClick={(e) => {
							sendArticle();
						}}
					>
						Aceptar
					</button>
				</section>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					src="./src/components/assets/close.png"
					alt="check"
					className="h-8 ml-5 hover:scale-110 transition cursor-pointer"
					onClick={() => {
						props.close(false);
					}}
				/>
			</section>
		</div>
	);
}

export default InputMessage;
