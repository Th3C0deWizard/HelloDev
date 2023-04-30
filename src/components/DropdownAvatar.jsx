import { Link } from "react-router-dom";

function DropdownAvatar() {
  return (
    <div
      id="dropdownAvatar"
      className="absolute ml-auto top-16 right-0 divide-y divide-gray-600 rounded-lg shadow w-44 bg-gray-700"
    >
      <div className="px-4 py-3 text-sm text-white">
        <div>Name Username</div>
        <div className="font-medium truncate">name@hellodev.com</div>
      </div>
      <ul
        className="py-2 text-sm text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            to="/AuthorMenu"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
          >
            Menu
          </Link>
        </li>
      </ul>
      <div className="py-2">
        <Link
          to="/Login"
          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default DropdownAvatar;
