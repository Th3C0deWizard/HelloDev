import SearchBar from "../components/SearchBar";
import Avatar from "./Avatar";
import NotificationIcon from "./NotificationIcon";
import { Outlet } from "react-router-dom";

const Header = ({ setU, user, children }) => {
  return (
    <>
      <div className="z-10 fixed w-full bg-slate-900">
        <header className="h-14 text-white flex bg-[#0069a3]">
          <a className="text-2xl font-bold hover:text-[#ffc107] flex " href="/">
            <img
              className="ml-5 h-[62px] w-[110px]"
              src="./src/components/assets/header_logo.png"
              alt="Logo"
            />
          </a>
          {window.location.pathname === "/" ? (
            <div className="w-full pt-1.5">
              <SearchBar />
            </div>
          ) : null}
          {user ? <NotificationIcon user={user} /> : null}
          <Avatar setU={setU} user={user} />
        </header>
      </div>
      {children ? children : <Outlet />}
    </>
  );
};

export default Header;
