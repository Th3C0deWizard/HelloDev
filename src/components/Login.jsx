import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROLES } from "../const";
import Input from "./Input";
import Loading from "./Loading";

const Login = (props) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [fieldValues, setFieldValues] = useState({
		email: "",
		contraseña: "",
	});

	const handleChange = (e) => {
		setFieldValues({ ...fieldValues, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await fetch("http://localhost:3000/usuarios/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(fieldValues),
			});
			const data = await response.json();
			if (response.ok) {
				props.setUser(data);
				localStorage.setItem("user", JSON.stringify(data));
				props.setShowLogin(false);
				alert(`Bienvenido ${data.nombreUsuario}`);
			}else{
				alert(`Error al iniciar sesión: ${data.message}`);
			}
		} catch (error) {
			alert(`Error al iniciar sesión: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};
	return (
		<main className="fixed inset-0 z-20 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<img
				src="./src/components/assets/close.png"
				alt="check"
				className="h-8 hover:scale-110 transition cursor-pointer absolute top-32 ml-[420px]"
				onClick={(e) => {
					props.setShowLogin(false);
				}}
			/>
			<div className=" flex flex-col place-items-center justify-center pb-10p-2 rounded-xl min-h-1/3  shadow bg-[#0069a3] border-gray-700 bg-opacity-60">
				{loading ? (
					<Loading />
				) : (
					<div className="w-full rounded-lg shadow sm:max-w-md bg-[#0069a3] bg-opacity-90 border-gray-700">
						<div className="p-8 space-y-4">
							<h1 className="grid place-items-center text-3xl font-bold text-white">
								Sign in to your account
							</h1>
							<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
								<Input
									label="Your email / username"
									type="text"
									id="email"
									placeholder="name@company.com"
									onChange={handleChange}
								/>
								<Input
									label="Your password"
									type="password"
									id="contraseña"
									placeholder="••••••••"
									onChange={handleChange}
								/>

								<div className="flex items-center justify-between">
									<div>
										<input
											type="checkbox"
											value=""
											className="w-4 h-4 rounded border-[#f4d73b]"
										/>
										<label
											htmlFor="remember"
											className="ml-3 text-sm font-medium text-[#F4D73B]"
										>
											Recuerdame
										</label>
									</div>
									<Link
										to="/ForgotPassword"
										className="text-sm font-medium hover:underline text-[#F4D73B]"
										onClick={(e) => {
											props.setShowLogin(false);
										}}
									>
										¿Olvidaste tú contraseña?
									</Link>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-amber-500 hover:bg-amber-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 hover:scale-105 transition"
								>
									Inicie sesión en su cuenta
								</button>

								<p className="grid place-items-center text-sm font-medium text-[#F4D73B]">
									¿Aún no tienes una cuenta?
									<Link
										to="/register"
										className="font-medium text-[#F4D73B] hover:underline"
										onClick={(e) => {
											props.setShowLogin(false);
										}}
									>
										{" "}
										Sign up
									</Link>
								</p>
							</form>
						</div>
					</div>
				)}
			</div>
		</main>
	);
};

export default Login;
