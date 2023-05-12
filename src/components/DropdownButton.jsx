import { useState } from "react";
import Dropdown from "./Dropdown";
import Icon from "./Icon";

const DropdownButton = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [text, setText] = useState(props.text);
	return (
		<>
			<button
				id="dropdown-button"
				className="relative z-10 inline-flex items-center px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-l-lg hover:bg-blue-700 hover:scale-105 transition"
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				{text}
				<div className="ml-3 mt-1">
					<Icon
						path={
							isOpen
								? "M4.5 15.75l7.5-7.5 7.5 7.5"
								: "M19.5 8.25l-7.5 7.5-7.5-7.5"
						}
						w={4}
						h={4}
						color="white"
					/>
				</div>
			</button>

			{isOpen && (
				<Dropdown
					handleChange={props.handleChange}
					list={props.options}
					name={props.name}
					close={() => setIsOpen(false)}
					setText={setText}
					state={props.state}
					position={props.position}
				/>
			)}
		</>
	);
};
export default DropdownButton;
