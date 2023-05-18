function ImageView(props) {
	return (
		<div className="fixed inset-0 z-30 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
			<section className="flex items-center justify-center rounded-xl shadow w-90 bg-white p-5">
				<img
					src={`./src/components/assets/${props.icon}.png`}
					alt="check"
					className="h-12 hover:scale-110 transition "
				/>
				<section className="flex flex-col justify-center">
					<h1 className="font-bold text-center text-xl text-blue-700">
						{`${props.titulo}`}
					</h1>
					<img
						className="max-w-md max-h-md p-5"
						src={props.portada}
						alt={props.titulo}
					/>
				</section>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					src="./src/components/assets/close.png"
					alt="check"
					className="h-8 hover:scale-110 transition cursor-pointer"
					onClick={() => props.close()}
				/>
			</section>
		</div>
	);
}

export default ImageView;
