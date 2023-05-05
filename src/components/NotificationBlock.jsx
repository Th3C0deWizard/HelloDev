import { useState } from "react";
import DropdownNotification from "./DropdownNotification";
import Icon from "./Icon";

function NotificationBlock({user}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				id="dropdownNotificationButton"
				className="absolute right-20 top-3"
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<Icon
					path="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
					w={10}
					h={10}
					color="white"
				/>
			</button>

			{isOpen && <DropdownNotification user={user}/>}
		</>
	);
}

export default NotificationBlock;
