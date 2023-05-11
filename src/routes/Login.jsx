import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Loading from "../components/Loading";
import { ROLES } from "../const";

const Login = (props) => {
	const rememberMeData = JSON.parse(localStorage.getItem("rememberMe"));
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const [fieldValues, setFieldValues] = useState({
		email: rememberMeData ? rememberMeData.emailOrUsername : "",
		contraseña: rememberMeData ? rememberMeData.password : "",
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
				if (rememberMe)
					localStorage.setItem(
						"rememberMe",
						JSON.stringify({
							emailOrUsername: fieldValues.email,
							password: fieldValues.contraseña,
						}),
					);
				alert(`Bienvenido ${data.nombreUsuario}`);
				if (data.rol === ROLES.AUTOR) navigate("/authorMenu");
				else if (data.rol === ROLES.EDITOR) navigate("/editorMenu");
			} else {
				alert(`Error al iniciar sesión: ${data.message}`);
			}
		} catch (error) {
			alert(`Error al iniciar sesión: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<div
				className="flex justify-center pt-20"
				style={{
					background:
						"url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
				}}
			>
				<div className="hidden bg-cover lg:block lg:w-2/3">
					<div className="flex flex-col place-items-center justify-center pb-10">
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
						{loading ? (
							<Loading />
						) : (
							<div className="w-full rounded-lg shadow sm:max-w-md bg-slate-900 border-gray-700 bg-opacity-70">
								<div className="p-8 space-y-4">
									<h1 className="grid place-items-center text-3xl font-bold text-white">
										Sign in to your account
									</h1>
									<form
										className="space-y-4 md:space-y-6"
										onSubmit={handleSubmit}
									>
										<Input
											label="Your email/username"
											type="text"
											id="email"
											placeholder="name@company.com"
											style=""
											value={fieldValues.email}
											onChange={handleChange}
										/>
										<Input
											label="Your password"
											type="password"
											id="contraseña"
											placeholder="••••••••"
											style=""
											value={fieldValues.contraseña}
											onChange={handleChange}
										/>

										<div className="flex items-center justify-between">
											<div className="flex items-start">
												<input
													type="checkbox"
													value=""
													className="w-4 h-4 rounded bg-gray-700 border-gray-600 focus:bg-amber-400 focus:border-amber-400 focus:ring-amber-300"
													onChange={(e) => setRememberMe(e.target.checked)}
												/>
												<label
													htmlFor="remember"
													className="ml-3 text-sm text-gray-500 dark:text-gray-300"
												>
													Remember me
												</label>
											</div>
											<Link
												to="/ForgotPassword"
												className="text-sm font-medium hover:underline text-amber-400"
											>
												Forgot password?
											</Link>
										</div>
										<button
											type="submit"
											className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-[#F4D73B] font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
										>
											Login into your account
										</button>

										<p className="grid place-items-center text-sm font-light text-[#F4D73B]">
											Don’t have an account yet?{" "}
											<Link
												to="/register"
												className="font-medium text-[#F4D73B] hover:underline"
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
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Login;
