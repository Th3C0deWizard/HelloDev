import { useState } from "react";
import FailedAlert from "../components/FailedAlert";
import Footer from "../components/Footer";
import Input from "../components/Input";
import SuccessfullAlert from "../components/SuccessfullAlert";

const Profile = ({ autor, setAutor }) => {
	const [showSuccessfullAlert, setShowSuccessfullAlert] = useState(false);
	const [sFTitle, setSFTitle] = useState("");
	const [nameArticle, setnameArticle] = useState("");
	const [sFMessage, setSFMessage] = useState("");
	const showSFAlert = (title, article, message) => {
		setSFTitle(title);
		setnameArticle(article);
		setSFMessage(message);
		setShowSuccessfullAlert(true);
	};

	const [showFailedAlert, setShowFailedAlert] = useState(false);
	const [fFTitle, setFFTitle] = useState("");
	const [fFMessage, setFFMessage] = useState("");
	const showFAlert = (title, message) => {
		setFFTitle(title);
		setFFMessage(message);
		setShowFailedAlert(true);
	};

	const [nombres, setNombres] = useState(autor.nombres);
	const [apellidos, setApellidos] = useState(autor.apellidos);
	const [nombreUsuario, setNombreUsuario] = useState(autor.nombreUsuario);
	const [nacionalidad, setNacionalidad] = useState(autor.nacionalidad);
	const [telefono, setTelefono] = useState(autor.telefono);
	const [email, setEmail] = useState(autor.email);
	const [autobiografia, setAutobiografia] = useState(autor.autobiografia);

	const save = () => {
		fetch(`http://localhost:3000/autores/${autor.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nombres: nombres,
				apellidos: apellidos,
				nombreUsuario: nombreUsuario,
				nacionalidad: nacionalidad,
				telefono: telefono,
				email: email,
				autobiografia: autobiografia,
			}),
		})
			.then(async (response) => {
				const message = await response.text();
				if (response.ok) return message;
				else throw new Error(message);
			})
			.then((response) => {
				const userData = {
					id: autor.id,
					nombres: nombres,
					apellidos: apellidos,
					nombreUsuario: nombreUsuario,
					nacionalidad: nacionalidad,
					telefono: telefono,
					email: email,
					autobiografia: autobiografia,
					rol: autor.rol,
				};
				localStorage.setItem("user", JSON.stringify(userData));

				showSFAlert(
					"Perfil actualizado",
					`${autor.nombres} ${autor.apellidos}`,
					"se han actualizado sus datos correctamente",
				);
			})
			.catch((error) => {
				showFAlert(
					"Actualización fallida",
					`No se pudo actualizar el perfil / ${error.message.substring(
						12,
						error.message.length - 2,
					)}`,
				);
				console.log(error);
			});
	};

	return (
		<>
			{showSuccessfullAlert ? (
				<SuccessfullAlert
					title={sFTitle}
					article={nameArticle}
					message={sFMessage}
					close={setShowSuccessfullAlert}
				/>
			) : null}
			{showFailedAlert ? (
				<FailedAlert
					title={fFTitle}
					message={fFMessage}
					close={setShowFailedAlert}
				/>
			) : null}
			<div className="flex justify-center pt-20">
				<div className="flex flex-col place-items-center justify-center pb-6">
					<div className="w-full rounded-lg shadow md:max-w-4xl bg-[#0069a3] border-gray-700 bg-opacity-90">
						<div className="col-span-2 grid grid-cols-3 gap-5 grid-rows-14 m-6">
							<h1 className="col-start-2 grid place-items-center mb-4 font-extrabold text-5xl text-white">
								Perfil
							</h1>
							<Input
								label="Nombres"
								type="text"
								id="name"
								placeholder="Nombre..."
								style=" col-start-1"
								value={nombres}
								onChange={(e) => setNombres(e.target.value)}
							/>
							<Input
								label="Apellidos"
								type="text"
								id="lastname"
								placeholder="Apellidos..."
								value={apellidos}
								onChange={(e) => setApellidos(e.target.value)}
							/>
							<Input
								label="Nombre Usuario"
								type="text"
								id="username"
								placeholder="User"
								value={nombreUsuario}
								onChange={(e) => setNombreUsuario(e.target.value)}
							/>
							<Input
								label="Telefono"
								type="text"
								id="phoneNumber"
								placeholder="+57 000 0000000"
								value={telefono}
								onChange={(e) => setTelefono(e.target.value)}
							/>
							<div>
								<label
									htmlFor=""
									className="block mb-2 text-sm font-medium text-white"
								>
									Nacionalidad
								</label>
								<select
									className="col-start-1 h-10 sm:text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-black text-black focus:ring-blue-500 focus:border-blue-500"
									required
									onChange={(e) => setNacionalidad(e.target.value)}
								>
									<option defaultValue>
										{nacionalidad ? nacionalidad : "Seleccione una opción"}
									</option>
									<option value="Colombia">Colombia</option>
									<option value="Argentina">Argentina</option>
									<option value="Mexico">Mexico</option>
									<option value="Chile">Chile</option>
									<option value="Brasil">Brasil</option>
									<option value="Venezuela">Venezuela</option>
									<option value="Paraguay">Paraguay</option>
									<option value="Uruguay">Uruguay</option>
									<option value="Salvador">Salvador</option>
									<option value="Estados Unidos">Estados Unidos</option>
									<option value="España">España</option>
									<option value="Andorra">Andorra</option>
								</select>
							</div>
							<Input
								label="E-mail"
								type="email"
								id="email"
								placeholder="name@hellodev.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div className="col-span-3">
								<label
									htmlFor=""
									className="block text-sm font-medium text-white pb-2"
								>
									Autobiografia
								</label>
								<textarea
									className="text-sm resize-none h-24 rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
									placeholder=" Autobiografia"
									required
									defaultValue={autobiografia}
									onChange={(e) => setAutobiografia(e.target.value)}
								/>
							</div>
							<div className="col-start-2 grid items-center justify-center hover:scale-105 transition">
								<button
									type="submit"
									className="col-start-3 bg-[#f7d722] hover:bg-[#f0d437] text-[#0069a3] font-medium text-lg px-5 py-2.5 text-center rounded shadow-lg focus:ring-[#eecd12] focus:ring-4"
									onClick={save}
								>
									Guardar
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

export default Profile;
