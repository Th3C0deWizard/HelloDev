import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Avatar from "./Avatar";
import NotificationBlock from "./NotificationBlock";

const Header = () => {
	return (
		<div className="z-10 fixed w-full bg-slate-900">
			<header className="h-14 text-white flex bg-[#0069a3]">
				<Link className="text-2xl font-bold hover:text-[#ffc107] flex" to="/">
					<img
						className="ml-5 h-[62px] w-[110px]"
						src="./src/components/assets/header_logo.png"
						alt="Logo"
					/>
				</Link>
				{window.location.pathname === "/" ? (
					<div className="w-full pt-1.5">
						<SearchBar />
					</div>
				) : null}
				<NotificationBlock />
				<Avatar />
			</header>
		</div>
	);
};

export default Header;
