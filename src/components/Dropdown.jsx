function Dropdown(props) {
	return (
		<div
			id="dropdown"
			className="absolute top-14 z-20 -translate-x-[19rem] divide-y divide-gray-300 rounded-lg shadow w-36 bg-white"
		>
			{props.list.map((item, i) => (
				// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<section className="py-2" key={i}>
					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						key={i}
						className="w-full px-4 py-2 text-sm text-black cursor-pointer hover:bg-[#0069a3] hover:bg-opacity-80 hover:text-white hover:font-semibold hover:scale-95 transition rounded-lg"
						name={props.name}
						value={i}
						onClick={(e) => {
							props.handleChange(e);
							props.close();
						}}
					>
						{item}
					</div>
				</section>
			))}
		</div>
	);
}

export default Dropdown;
