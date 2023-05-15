function Message(props) {
	return (
		<div className="fixed inset-0 z-30 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
			<section className="flex items-center justify-center rounded-xl shadow max-w-5xl bg-white p-5">
				<img
					src={`./src/components/assets/${props.icon}.png`}
					alt="check"
					className="h-12 hover:scale-110 transition"
				/>
				<section className="ml-5">
					<h1 className="font-bold text-left text-xl text-blue-700">
						{`${props.titulo} ${props.emisor} `}
					</h1>
					<p className="text-justify text-gray-700">{props.message}</p>
				</section>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					src="./src/components/assets/close.png"
					alt="check"
					className="h-8 ml-5 hover:scale-110 transition cursor-pointer"
					onClick={() => {
						props.close(false);
					}}
				/>
			</section>
		</div>
	);
}

export default Message;
