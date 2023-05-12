import { useState } from "react";
import Icon from "./Icon";

function InputFile(props) {
	const [placeholder, setPlaceholder] = useState(props.placeholder);

	const handleChange = (e) => {
		props.onChange(e);
		setPlaceholder(e.target.files[0].name);
	};

	return (
		<label
			htmlFor={props.id}
			className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-600 bg-white border-gray-400 hover:border-amber-600 hover:scale-105 transition"
		>
			<div className="flex flex-col items-center justify-center px-1">
				<Icon
					path="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
					w={24}
					h={24}
					color="[#F4D73B]"
				/>
				<p className="px-3 pt-2 text-sm text-amber-500 font-semibold">
					<span className="font-bold ">Haga clic para cargar</span> <br />
					o arrastra y suelta
				</p>
				<p
					id={`placeholder_${props.id}`}
					className="text-xs text-amber-500 font-semibold"
				>
					{placeholder}
				</p>
			</div>
			<input
				id={props.id}
				type="file"
				className="hidden"
				onChange={handleChange}
			/>
		</label>
	);
}

export default InputFile;
