import { ROLES } from "../const.js";
import Icon from "./Icon";
import NotificationItem from "./NotificationItem";

function dropdownNotification({ notifications, user }) {
	return (
		<div
			id="dropdownNotification"
			className="absolute ml-auto divide-y top-16 right-4 bg-white divide-gray-300 rounded-lg shadow"
		>
			<div className="block px-4 py-2 font-medium text-center rounded-t-lg text-black">
				Notifications
			</div>
			{notifications !== undefined && notifications != null ? (
				<div className="divide-y divide-gray-300">
					{notifications?.map((item, i) =>
						i > 4 ? null : <NotificationItem key={i} notification={item} />,
					)}
				</div>
			) : null}
			<div className="py-2 hover:bg-[#e6f2ff] hover:rounded-b-lg transition">
				{user ? (
					<a
						href={
							user.rol === ROLES.EDITOR
								? "/EditorReceivedArticles"
								: "/AuthorNotifications"
						}
						className="flex items-center justify-center px-4 py-2 font-medium text-center rounded-b-lg text-black cursor-pointer"
					>
						<div className="inline-flex items-center mr-5">
							<Icon
								path="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
								w={6}
								h={6}
								color="blue-500"
							/>
						</div>
						View all
					</a>
				) : (
					mull
				)}
			</div>
		</div>
	);
}

export default dropdownNotification;
