import { useState } from "react";
import EditorHistoryRows from "../components/EditorHistoryRows";
import FailedAlert from "../components/FailedAlerts";
import Footer from "../components/Footer";
import Message from "../components/Message";
import SuccessfullAlert from "../components/SuccessfullAlert";
import Table from "../components/Table";
import useFetch from "../hooks/useFetch";

const EditorArticlesHistory = (props) => {
	const [notifications, setNotifications, isLoading, setIsLoading] = useFetch(
		`notificaciones/editor/historial/${props.user.id}`,
		console.log(props.user.id),
		(error) => {
			console.error("Fallo al cargar los articulos");
		},
	);

	const [showMessageN, setShowMessageN] = useState(false);
	const [titulo, setTitulo] = useState("");
	const [message, setMessage] = useState("");
	const [emisor, setEmisor] = useState("");
	const [icon, setIcon] = useState("");
	const showMessage = (titulo, message, emisor, icon) => {
		setTitulo(titulo);
		setMessage(message);
		setEmisor(emisor);
		setIcon(icon);
		setShowMessageN(true);
	};

	const [showSuccessfullAlert, setShowSuccessfullAlert] = useState(false);
	const [sFTitle, setSFTitle] = useState("");
	const [nameArticle, setnameArticle] = useState("");
	const [sFMessage, setSFMessage] = useState("");
	const showSFAlert = (title, article, message) => {
		setSFTitle(title);
		setnameArticle(article);
		setSFMessage(message);
		setShowSuccessfullAlert(true);
	};

	const [showFailedAlert, setShowFailedAlert] = useState(false);
	const [fFTitle, setFFTitle] = useState("");
	const [fFMessage, setFFMessage] = useState("");
	const showFAlert = (title, message) => {
		setFFTitle(title);
		setFFMessage(message);
		setShowFailedAlert(true);
	};

	return (
		<>
			{showMessageN ? (
				<Message
					titulo={titulo}
					message={message}
					emisor={emisor}
					icon={icon}
					close={setShowMessageN}
				/>
			) : null}
			{showSuccessfullAlert ? (
				<SuccessfullAlert
					title={sFTitle}
					article={nameArticle}
					message={sFMessage}
					close={setShowSuccessfullAlert}
				/>
			) : null}
			{showFailedAlert ? (
				<FailedAlert
					title={fFTitle}
					message={fFMessage}
					close={setShowFailedAlert}
				/>
			) : null}
			<section className="bg-white min-h-[40vh] pt-20">
				<div className="flex flex-col place-items-center justify-center pb-10">
					<h1 className="grid place-items-center mb-4 font-extrabold text-6xl text-[#0069a3]">
						Historial de Articulos
					</h1>
					{isLoading ? (
						<h1>Esta cargando</h1>
					) : (
						<Table
							headers={[
								"Nombre(s)",
								"Apellidos",
								"Id",
								"Titulo",
								"Fecha",
								"Estado",
								"Portada",
								"Resumen",
								"Archivo",
								"Acciones",
							]}
							data={notifications?.map((notification) => (
								<EditorHistoryRows
									id={notification.id}
									notification={notification}
									load={setIsLoading}
									showMessage={showMessage}
									showSFAlert={showSFAlert}
									showFAlert={showFAlert}
								/>
							))}
						/>
					)}

					<div className="grid grid-cols-5 gap-2" />
				</div>
			</section>
			<Footer />
		</>
	);
};

export default EditorArticlesHistory;
