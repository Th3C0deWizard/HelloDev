import Icon from "./Icon";

function MenuItem(props) {
	return (
		<div className="grid place-items-center mx-5 mt-8">
			<Icon path={props.path} w={20} h={20} color="amber-400" />
			<h2 className="text-2xl font-extrabold text-white">{props.tittle}</h2>
			<p className="text-gray-400 sm:text-xl">{props.description}</p>
			<a
				href={props.href}
				className="font-medium text-amber-400 hover:underline mt-4"
			>
				Go ahead
			</a>
		</div>
	);
}

export default MenuItem;
