import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Input from "../components/Input";

const Register = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [fieldValues, setFieldValues] = useState({
		nombres: "",
		apellidos: "",
		nombreUsuario: "",
		nacionalidad: "",
		telefono: "",
		email: "",
		contraseña: "",
		confirmarContraseña: "",
	});
	console.log(fieldValues);
	const handleChange = (e) => {
		setFieldValues({ ...fieldValues, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await fetch("http://localhost:3000/autores", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(fieldValues),
			});
			if (response.ok) {
				alert("Usuario creado correctamente");
				navigate("/login");
			} else {
				const data = await response.json();
				alert(data.message);
			}
		} catch (error) {
			alert(`Error al registrarse: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<div
				className="flex pt-20"
				style={{
					background:
						"url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
				}}
			>
				<div className="grid grid-cols-5">
					<div className="col-span-3 flex flex-col justify-center bg-[#0069a3] bg-opacity-80 mx-10 my-10 mt-20 px-10 rounded-lg ">
						<Link
							to="/"
							className="flex items-center text-3xl font-semibold text-white mt-10 mb-5"
						>
							<img
								className="w-10 h-10 mr-2"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
								alt="logo"
							/>
							{"HelloDev!"}
						</Link>
						<h2 className="text-5xl font-bold text-left text-white">
							Explore the world’s writing technology articles.
						</h2>
						<p className="mt-5 text-lg font-normal text-white">
							Millions of authors around the world showcase their articles work
							on Hello Dev. The home to the UAM’s Systems Engineerings best
							authors and creative writers.
						</p>
						<div className="flex -space-x-4 mt-5">
							<img
								className="w-10 h-10 border-2 border-white rounded-full"
								src="src/components/assets/profile-picture-5.jpg"
								alt=""
							/>
							<img
								className="w-10 h-10 border-2 border-white rounded-full"
								src="src/components/assets/profile-picture-2.jpg"
								alt=""
							/>
							<img
								className="w-10 h-10 border-2 border-white rounded-full"
								src="src/components/assets/profile-picture-3.jpg"
								alt=""
							/>
							<Link
								className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-amber-500 border-2 border-white rounded-full hover:bg-gray-600"
								to="/"
							>
								+99
							</Link>
						</div>
					</div>
					<div className="mt-12 mb-5 mr-10 col-start-4 col-span-2 rounded-lg shadow bg-slate-900 bg-opacity-80">
						<div className="p-6 justify-end md:space-y-5">
							<h1 className="grid place-items-center font-bold md:text-3xl text-white">
								Sign Up to your account
							</h1>
							<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
								<div className="grid grid-cols-2 gap-4">
									<Input
										label="Nombre Completo"
										type="text"
										id="nombres"
										placeholder="Complete Name"
										style=""
										onChange={handleChange}
									/>
									<Input
										label="Apellidos"
										type="text"
										id="apellidos"
										placeholder="Lastnames"
										style=""
										onChange={handleChange}
									/>
									<Input
										label="Nombre de Uusario"
										type="username"
										id="nombreUsuario"
										placeholder="bowser"
										style=""
										onChange={handleChange}
									/>
									<div>
										<label
											htmlFor=""
											className="block mb-2 text-sm font-medium text-white"
										>
											Nacionalidad
										</label>
										<select
											className="col-start-1 h-10 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
											defaultValue={"df"}
											onChange={handleChange}
										>
											<option value="df">Choose a country</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
											<option value="FR">France</option>
											<option value="DE">Germany</option>
										</select>
									</div>
									<Input
										label="Telefono"
										type="number"
										id="telefono"
										placeholder="+57 000 0000000"
										style=""
										onChange={handleChange}
									/>
									<Input
										label="Your email"
										type="email"
										id="email"
										placeholder="name@company.com"
										style=""
										onChange={handleChange}
									/>
								</div>

								<Input
									label="Contraseña"
									type="password"
									id="contraseña"
									placeholder="••••••••"
									style=""
									onChange={handleChange}
								/>
								<Input
									label="Confirmar Contraseña"
									type="password"
									id="confirmarContraseña"
									placeholder="••••••••"
									style=""
									onChange={handleChange}
								/>
								<button
									type="submit"
									className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-md p-2"
								>
									Create your account
								</button>
								<p className="grid place-items-center text-sm font-light text-amber-300">
									Do you have an account already?{" "}
									<Link
										to="/login"
										className="font-medium text-amber-400 hover:underline"
									>
										{" "}
										Log in
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Register;
