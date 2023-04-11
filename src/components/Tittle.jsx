function Tittle(props) {
	return (
		<h1
			className={` my-10 pl-10 text-${props.factor}xl font-extrabold dark:text-white`}
		>
			{props.tittle}{" "}
			<span
				className={`bg-amber-200 text-amber-600 text-${
					props.factor - 2
				}xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2`}
			>
				{props.acronym}
			</span>
		</h1>
	);
}
export default Tittle;
