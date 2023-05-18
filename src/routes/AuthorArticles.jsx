import { useState } from "react";
import AddArticle from "../components/AddArticle";
import AuthorArticlesRow from "../components/AuthorArticlesRow";
import Edit from "../components/Edit";
import FailedAlert from "../components/FailedAlert";
import Footer from "../components/Footer";
import InputMessage from "../components/InputMessage";
import Loading from "../components/Loading";
import Message from "../components/Message";
import SuccessfullAlert from "../components/SuccessfullAlert";
import Table from "../components/Table";
import ImageView from "../components/ImageView";
import useFetch from "../hooks/useFetch";

const AuthorArticles = (props) => {
	const [articles, setArticles, isLoading, setIsLoading] = useFetch(
		`articulos/autor/${props.user.id}`,
		console.log(props.user.id),
		(error) => {
			console.error("Fallo al cargar los articulos");
		},
	);

	const [editors, setEditors, isLoadingEditor, setIsLoadingEditor] = useFetch(
		"editores",
		(error) => {
			console.error("Fallo al cargar los editores");
		},
	);

	const [showEdit, setShowEdit] = useState(false);
	const [editArticle, setEditArticle] = useState({});
	const handleOnClose = () => setShowEdit(false);
	const handleSetEditArticle = (article) => {
		setEditArticle(article);
		setShowEdit(true);
	};

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

	const [imageView, setImageView] = useState({
		visible: false,
		titulo: "",
		imagen: "",
	});

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

	const [showAddArticle, setShowAddArticle] = useState(false);
	const [showInputMessage, setShowInputMessage] = useState(false);
	const [article, setArticle] = useState({});
	const handleShowInputMessage = (article, estado) => {
		setArticle({
			emisor: props.user.id,
			receptor: editors ? editors[0]["id_editor"] : 10,
			article: article.id,
			id_estado: article.id_estado,
			new_estado: estado,
			article_titulo: article.titulo,
			fecha: article.fecha_creacion,
		});
		setShowInputMessage(true);
	};

	return (
		<>
			{!showEdit ? null : (
				<Edit
					onClose={handleOnClose}
					show={showEdit}
					article={editArticle}
					id_autor={props.user.id}
					load={setIsLoading}
					showSFAlert={showSFAlert}
					showFAlert={showFAlert}
				/>
			)}
			{showMessageN ? (
				<Message
					titulo={titulo}
					message={message}
					emisor={emisor}
					icon={icon}
					close={setShowMessageN}
				/>
			) : null}
			{imageView.visible ? (
				<ImageView
					icon="portada"
					titulo={imageView.titulo}
					portada={imageView.imagen}
					close={() => setImageView({ visible: false, titulo: "", imagen: "" })}
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
			{showAddArticle ? (
				<AddArticle
					id={props.user.id}
					setShowAddArticle={setShowAddArticle}
					showSFAlert={showSFAlert}
					showFAlert={showFAlert}
					load={setIsLoading}
				/>
			) : null}
			{showInputMessage ? (
				<InputMessage
					object={article}
					load={setIsLoading}
					showSFAlert={showSFAlert}
					showFAlert={showFAlert}
					titulo="Envio"
					success="enviado"
					fail="No se pudo enviar el articulo"
					close={setShowInputMessage}
					icon="message"
				/>
			) : null}
			<section className=" bg-white p-8 min-h-[40vh] pt-20 flex flex-col">
				<h1 className="grid place-items-center font-extrabold text-6xl text-[#0069a3]">
					Mis Articulos
				</h1>
				{isLoading ? (
					<Loading className="m-10 self-center" />
				) : (
					<Table
						id="table_autor_articles"
						headers={[
							"Id",
							"Titulo",
							"Fecha",
							"Portada",
							"Resumen",
							"Archivo",
							"Estado",
							"Acciones",
						]}
						data={articles?.map((article) => (
							<AuthorArticlesRow
								key={article.id}
								article={article}
								autor={props.user.id}
								editor={editors ? editors[0]["id_editor"] : 10}
								load={setIsLoading}
								showEdit={handleSetEditArticle}
								showMessage={showMessage}
								showSFAlert={showSFAlert}
								showFAlert={showFAlert}
								showInputMessage={handleShowInputMessage}
								e
								setImageView={setImageView}
							/>
						))}
					/>
				)}
				<div className="grid place-items-center">
					<button
						id="edit"
						type="button"
						className="bg-[#F4D73B] hover:bg-[#fae360] text-[#0069a3] font-medium text-lg py-1.5 px-1 text-center rounded shadow-lg hover:scale-110 transition"
						onClick={(e) => {
							setShowAddArticle(true);
						}}
					>
						Agregar Articulo
					</button>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default AuthorArticles;
