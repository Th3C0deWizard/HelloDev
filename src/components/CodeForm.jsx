import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const CodeForm = (props) => {
	const navigate = useNavigate();
	const [fieldValues, setFieldValues] = useState({
		email: props.email,
		code: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFieldValues({ ...fieldValues, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await fetch(
				"http://localhost:3000/usuarios/restoreCode",
				{
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify(fieldValues),
				},
			);
			const data = await response.json();
			if (response.ok) {
				navigate("/restorePassword", { state: { id: data.id_usuario } });
			} else {
				alert(`${data.message}`);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return loading ? (
		<Loading className="justify-self-center self-center" />
	) : (
		<main className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
			<form
				className="bg-[#e6f2ff] p-2 rounded-xl w-1/3 min-h-1/3 grid place-items-center"
				onSubmit={handleSubmit}
			>
				<h1 className="font-semibold text-center text-xl text-gray-700">
					Ingresa el codigo de recuperación
				</h1>

				<section className="flex m-5 items-center w-[90%]">
					<label className="flex items-center justify-center h-10 rounded-xl cursor-pointer shadow w-full">
						<p className="text-sm text-black bg-gray-300 rounded-l-xl p-2 h-full">
							Codigo
						</p>
						<input
							label="Codigo"
							id="code"
							type="text"
							className="text-black p-2 rounded-r-xl w-full"
							placeholder="XXXXXX"
							defaultValue={fieldValues.code}
							onChange={handleChange}
							required
						/>
					</label>
				</section>
				<div className="text-center">
					<button
						className="bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg p-2  text-center rounded-xl shadow-lg hover:scale-110 transition"
						type="submit"
					>
						Save
					</button>
					<button
						className="ml-10 bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg p-2 text-center rounded-xl shadow-lg hover:scale-110 transition"
						onClick={(e) => {
							e.preventDefault();
							props.close();
						}}
					>
						Close
					</button>
				</div>
			</form>
		</main>
	);
};

export default CodeForm;
