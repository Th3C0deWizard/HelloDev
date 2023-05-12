function Input(props) {
	return (
		<div className={props.style}>
			<label className="block mb-2 text-sm font-medium text-white">
				{props.label}
			</label>
			<input
				type={props.type}
				id={props.id}
				className="text-sm rounded-lg block w-full p-2.5 bg-white placeholder-gray-500 text-black focus:ring-blue-500 focus:border-blue-500 autofill:bg-[#e6f2ff]"
				placeholder={props.placeholder}
				defaultValue={props.value}
				onChange={props.onChange}
				required
			/>
		</div>
	);
}

export default Input;
