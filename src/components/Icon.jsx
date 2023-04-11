function Icon(props) {
	return (
		<svg
			className={`w-${props.w} h-${props.h} text-${props.color}`}
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d={props.path}
			/>
		</svg>
	);
}

export default Icon;
