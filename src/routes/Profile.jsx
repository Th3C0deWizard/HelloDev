import { useState } from "react";
import FailedAlert from "../components/FailedAlert";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import SuccessfullAlert from "../components/SuccessfullAlert";
import useFetch from "../hooks/useFetch";

const Profile = ({ autor, setAutor }) => {
	const [articles, setArticles, isLoading, setIsLoading] = useFetch(
		`articulos/autor/publicados/${autor.id}`,
		(error) => {
			console.error("Fallo al cargar los articulos");
		},
	);

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
				setAutor(userData);
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
			<section className="grid grid-cols-5 gap-8 pt-20 bg-[#eee]">
				<div className=" rounded-lg shadow-xl bg-white my-5 ml-8 flex flex-col justify-center items-center">
					<img
						src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
						alt="author"
						className="w-40 h-40 rounded-full mt-4"
					/>
					<h5 className="text-black my-3 font-bold text-2xl">{`${autor.nombres} ${autor.apellidos}`}</h5>
					<p className="text-black mb-1">Autor de HelloDev</p>
					<p className="text-black mb-4">{nacionalidad}</p>
					<button
						type="submit"
						className="bg-[#f7d722] hover:bg-[#f0d437] text-[#0069a3] font-medium text-lg px-5 py-2.5 text-center rounded hover:scale-105 transition mb-4"
						onClick={save}
					>
						Guardar
					</button>
				</div>
				<div className="col-span-2 rounded-lg shadow-xl bg-white my-5 flex flex-col justify-center text-black px-8">
					<div className="flex py-4">
						<p class="mr-12 w-20">Nombre(s)</p>
						<input
							class="focus:border-b-2 outline-none w-28 text-gray-500"
							defaultValue={nombres}
							onChange={(e) => setNombres(e.target.value)}
						/>
						<div className="border-l-2 ml-4" />
						<p class="ml-5 mr-12 w-20">Apellidos</p>
						<input
							class="focus:border-b-2 outline-none w-32 text-gray-500"
							defaultValue={apellidos}
							onChange={(e) => setApellidos(e.target.value)}
						/>
					</div>
					<div className="flex py-4">
						<p class="mr-12 w-20">Usuario</p>
						<input
							class="focus:border-b-2 outline-none w-28 text-gray-500"
							defaultValue={nombreUsuario}
							onChange={(e) => setNombreUsuario(e.target.value)}
						/>
						<div className="border-l-2 ml-4" />
						<p class="ml-5 mr-12 w-20">Telefono</p>
						<input
							class="focus:border-b-2 outline-none w-32 text-gray-500"
							defaultValue={telefono}
							onChange={(e) => setTelefono(e.target.value)}
						/>
					</div>
					<hr />
					<hr />
					<div className="flex py-4">
						<p class="mr-24 w-20">Email</p>
						<input
							class="focus:border-b-2 outline-none w-full text-gray-500"
							defaultValue={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex py-4">
						<p class="mr-16 w-20">Nacionalidad</p>
						<select
							className="focus:border-2 rounded-xl  outline-none w-52 text-gray-500 "
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
					<hr />
					<div className="flex py-4">
						<p class="mr-16 w-20">Autobiografia</p>
						<textarea
							className="focus:border-2 rounded-xl outline-none resize-none w-full h-28 text-gray-500 text-justify"
							placeholder=" Autobiografia"
							required
							defaultValue={autobiografia}
							onChange={(e) => setAutobiografia(e.target.value)}
						/>
					</div>
				</div>
				<div className="col-span-2 rounded-lg shadow-xl bg-white my-5 mr-8 flex flex-col items-center justify-center p-6">
					<p class="mb-4 text-black text-2xl">
						Algunos{" "}
						<span class="text-blue-600 font-bold text-2xl">
							{" Articulos Publicados"}
						</span>
					</p>
					<section className="flex">
						{isLoading ? (
							<Loading />
						) : articles.length > 0 ? (
							articles.map((article, i) => {
								if (i < 3) {
									return (
										<div className="flex flex-col items-center m-2">
											<img
												className="w-64 h-40 rounded-lg object-cover"
												src={article.portada}
												alt=""
											/>
											<div className="text-blue-600 font-bold text-2xl">
												{article.titulo}
											</div>
										</div>
									);
								}
							})
						) : (
							<div className="flex flex-col items-center">
								<img
									className="h-40 rounded-lg object-cover"
									src={"../src/components/assets/notArticles.png"}
									alt=""
								/>
								<h1 className="text-blue-600 font-bold text-4xl text-center mt-5">
									Aún no hay articulos publicados
								</h1>
							</div>
						)}
					</section>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Profile;
