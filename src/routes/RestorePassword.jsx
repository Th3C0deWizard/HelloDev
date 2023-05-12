import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Loading from "../components/Loading";

const RestorePassword = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [fieldValues, setFieldValues] = useState({
		id: useLocation().state.id,
		newPassword: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		setFieldValues({ ...fieldValues, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			console.log(fieldValues);
			const response = await fetch(
				"http://localhost:3000/usuarios/restorePassword",
				{
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify(fieldValues),
				},
			);
			if (response.ok) {
				alert("Password changed successfully!");
				navigate("/login");
			} else {
				const data = await response.json();
				alert(`Error al cambiar la contraseña ${data.message}`);
			}
		} catch (error) {
			console.log(error);
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
						<a
							href="/"
							className="flex items-center text-3xl font-semibold text-white mt-10 mb-5"
						>
							<img
								className="w-10 h-10 mr-2"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
								alt="logo"
							/>
							{"HelloDev!"}
						</a>
						<div className="w-full rounded-lg shadow sm:max-w-md bg-[#0069a3] border-gray-700 bg-opacity-70">
							<div className="p-8 space-y-4">
								<h1 className="grid place-items-center text-3xl font-bold text-white">
									Set New Password
								</h1>
								{loading ? (
									<Loading />
								) : (
									<form onSubmit={handleSubmit}>
										<Input
											label="New Password"
											type="password"
											id="newPassword"
											placeholder="••••••••"
											style=""
											onChange={handleChange}
										/>
										<br />
										<Input
											label="Confirm Password"
											type="password"
											id="confirmPassword"
											placeholder="••••••••"
											style=""
											onChange={handleChange}
										/>
										<button
											type="submit"
											className="my-5 w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
										>
											Save New Password
										</button>
										<p className="grid place-items-center text-sm font-light text-amber-300">
											Please remember the password{" "}
										</p>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default RestorePassword;
