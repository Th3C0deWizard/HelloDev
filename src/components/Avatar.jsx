import Icon from "./Icon";

function Avatar() {
  return (
    <>
      <button
        id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className="flex mx-3 text-sm bg-[#0069a3] rounded-full md:mr-0 focus:ring-4 focus:ring-blue-600"
        type="button"
      >
        <Icon
          path="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          w={10}
          h={10}
          color="white"
        />
      </button>

      <div
        id="dropdownAvatar"
        className="z-10 hidden divide-y divide-gray-600 rounded-lg shadow w-44 bg-gray-700"
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
            <a
              href="/AuthorMenu"
              className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
            >
              Menu
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="/Login"
            className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
          >
            Sign in
          </a>
        </div>
      </div>
    </>
  );
}

export default Avatar;
