import Avatar from "./Avatar";
import NotificationBlock from "./NotificationBlock";

const Header = () => {
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
				<NotificationBlock />
				<Avatar />
			</header>
		</div>
	);
};

export default Header;
