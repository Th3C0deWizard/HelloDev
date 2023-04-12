import Icon from "./Icon";
import Notification from "./Notification";

function NotificationBlock() {
  return (
    <>
      <button
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="inline-flex items-center ml-auto text-sm font-medium text-center focus:outline-none hover:text-white"
        type="button"
      >
        <Icon
          path="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
          w={8}
          h={8}
          color="white"
        />
        <div className="relative flex">
          <div className="relative inline-flex w-3 h-3 bg-red-500 border-2 rounded-full -top-2 right-5 border-gray-900" />
        </div>
      </button>

      <div
        id="dropdownNotification"
        className="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-600 rounded-lg shado"
        aria-labelledby="dropdownNotificationButton"
      >
        <div className="block px-4 py-2 font-medium text-center rounded-t-lg bg-gray-700 text-white">
          Notifications
        </div>
        <div className="divide-y divide-gray-600">
          <Notification />
          <Notification />
        </div>
        <a
          href="/AuthorArticles"
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
        </a>
      </div>
    </>
  );
}

export default NotificationBlock;
