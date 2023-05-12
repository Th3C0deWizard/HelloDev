import Footer from "../components/Footer";
import Loading from "../components/Loading";
import NotificationsBlock from "../components/NotificationsBlock";
import useFetch from "../hooks/useFetch";

const AuthorNotifications = (props) => {
	const [notifications, setNotifications, isLoading, setIsLoading] = useFetch(
		`notificaciones/autor/${props.user.id}`,
		console.log(props.user.id),
		(error) => {
			console.error("Fallo al cargar los articulos");
		},
	);

	return (
		<>
			<section className=" bg-white p-8 min-h-[40vh] pt-20 grid place-items-center">
				<h1 className="font-extrabold text-6xl text-[#0069a3]">
					Notificaciones
				</h1>
				{isLoading ? (
					<Loading className="mt-10" />
				) : (
					<NotificationsBlock notifications={notifications} />
				)}
			</section>
			<Footer />
		</>
	);
};

export default AuthorNotifications;
