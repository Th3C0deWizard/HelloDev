import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <header className="header">
        <a className="text" href="./">
          HelloDev!
          <img src="./src/components/assets/logo.png" alt="Logo" />
        </a>
        <button className="userProfileButton" data-dropdown-toggle="dropdown">
          <img
            className="userProfileImage"
            src="src/components/assets/userProfile.png"
            alt="user"
          />
        </button>
      </header>
    </div>
  );
};

export default Header;
