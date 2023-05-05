import Notification from "./Notification";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { ROLES } from "../const.js";

function dropdownNotification({ user = { user } }) {
  return (
    <div
      id="dropdownNotification"
      className="absolute ml-auto divide-y top-16 right-4 bg-white divide-gray-600 rounded-lg "
    >
      <div className="block px-4 py-2 font-medium text-center rounded-t-lg bg-gray-700 text-white">
        Notifications
      </div>
      <div className="divide-y divide-gray-600">
        <Notification />
        <Notification />
      </div>
      <Link
        to={
          user.role === ROLES.EDITOR
            ? "/EditorReceivedArticles"
            : "/AuthorNotifications"
        }
        className="block py-2 text-sm font-medium text-center rounded-b-lg bg-gray-700 hover:bg-gray-700 text-white"
      >
        <div className="inline-flex items-center ">
          <Icon
            path="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            w={4}
            h={4}
            color="gray-400"
          />
          View all
        </div>
      </Link>
    </div>
  );
}

export default dropdownNotification;
