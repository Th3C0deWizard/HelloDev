import Icon from "./Icon";

function Notification() {
	return (
		<>
			<a
				href="/AuthorArticles"
				className="flex px-4 py-3 bg-gray-700 hover:bg-gray-700"
			>
				<div className="flex-shrink-0">
					<Icon
						path="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
						w={6}
						h={6}
						color="white"
					/>
				</div>
				<div className="w-full pl-3">
					<div className="text-gray-400 text-sm mb-1.5 ">
						New message from{" "}
						<span className="font-semibold text-white">Jese Leos:</span>
						<br />
						"Hey, what's up? All set for the presentation?"
					</div>
					<div className="text-xs text-blue-500">A few moments ago</div>
				</div>
			</a>
		</>
	);
}

export default Notification;
