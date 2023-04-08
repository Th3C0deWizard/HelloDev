import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="bg-slate-900">
      <header className="p-4 h-20 text-white flex bg-[#0069a3]">
        <a
          className="text-3xl font-bold mt-1 hover:text-[#ffc107] flex"
          href="./"
        >
          <img
            className="pr-5"
            src="./src/components/assets/short_logo.png"
            alt="Logo"
          />
          HelloDev!
        </a>
        <div
          className={`ml-auto flex flex-col ${
            isDisplayed ? "bg-blue-900" : "bg-transparent"
          } text-white rounded-full p-0 w-12 h-36`}
        >
          <button
            className="relative bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-full mx-auto mt-0 w-10 h-10 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-white"
            onClick={() => {
              setIsDisplayed(!isDisplayed);
            }}
          >
            <img
              className="w-full h-full object-cover rounded-full absolute inset-0"
              src="src/components/assets/userProfile.png"
              alt="user"
            />
          </button>

          {isDisplayed ? (
            <Link
              className="flex flex-col w-12 h-16 mb-0 mt-6 justify-center items-center"
              to="/login"
            >
              <button className="h-8 mb-2 rounded-full">Autor</button>
              <button className="h-8 mb-2 rounded-full">Editor</button>
            </Link>
          ) : null}
        </div>
      </header>
    </div>
  );
};

export default Header;
