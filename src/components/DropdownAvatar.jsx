import { Link } from "react-router-dom";
import { ROLES } from "../const.js";

function DropdownAvatar({ setU, action, user }) {
  return (
    <div
      id="dropdownAvatar"
      className="absolute ml-auto top-16 right-0 divide-y divide-gray-600 rounded-lg shadow w-44 bg-gray-700"
    >
      {user ? (
        <div className="px-4 py-3 text-sm text-white">
          <div>{user.nombres}</div>
        </div>
      ) : null}
      <div className="py-2">
        <a
          href="/"
          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
          onClick={() => action(false)}
        >
          Inicio
        </a>
      </div>
      {user ? (
        user.rol === ROLES.EDITOR ? (
          <div className="py-2">
            <a
              href="/EditorMenu"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
              onClick={() => action(false)}
            >
              Menu
            </a>
          </div>
        ) : (
          <div className="py-2">
            <a
              href="/AuthorMenu"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
              onClick={() => action(false)}
            >
              Menu
            </a>
          </div>
        )
      ) : null}

      {user ? (
        <div className="py-2">
          <div
            className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
            onClick={() => {
              setU(null);
              action(false);
              localStorage.setItem("user", null);
            }}
          >
            Sign out
          </div>
        </div>
      ) : (
        <div className="py-2">
          <a
            href="/Login"
            className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
            onClick={() => action(false)}
          >
            Sign in
          </a>
        </div>
      )}
    </div>
  );
}

export default DropdownAvatar;
