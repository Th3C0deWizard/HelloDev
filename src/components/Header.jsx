import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="headerContainer">
      <header className="header">
        <a className="text" href="./">
          HelloDev!
          <img src="./src/components/assets/logo.png" alt="Logo" />
        </a>
        <div
          className={`ml-auto flex flex-col ${
            isDisplayed ? "bg-blue-900" : "bg-transparent"
          } text-white rounded-full p-0 w-12 h-36`}
        >
          <button
            className="userProfileButton"
            onClick={() => {
              setIsDisplayed(!isDisplayed);
            }}
          >
            <img
              className="userProfileImage"
              src="src/components/assets/userProfile.png"
              alt="user"
            />
          </button>

          {isDisplayed ? (
            <div className="flex flex-col w-12 h-16 mb-0 mt-6 ">
              <button className="h-8 mb-2 rounded-full">Autor</button>
              <button className="h-8 mb-2 rounded-full">Editor</button>
            </div>
          ) : null}
        </div>
      </header>
    </div>
  );
};

export default Header;
