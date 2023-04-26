import Avatar from "./Avatar";
import NotificationBlock from "./NotificationBlock";

const Header = () => {
	return (
		<header className="grid grid-cols-2 items-center w-full h-20 bg-[#0069a3]">
			<a
				className="flex h-16 mx-2 items-center text-3xl font-bold hover:text-[#ffc107]"
				href="/"
			>
				<img
					className="h-full mr-5"
					src="./src/components/assets/short_logo.png"
					alt="Logo"
				/>
				HelloDev!
			</a>
			<section className="flex flex-row justify-end items-center">
				<NotificationBlock />
				<Avatar />
			</section>
		</header>
	);
};

export default Header;
