import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuItem from "../components/Menu_Item";
import Tittle from "../components/Tittle";

const AuthorMenu = () => {
	return (
		<>
			<Header />
			<section className="grid grid-cols-3 gap-2 bg-slate-900 p-2 pt-10 pb-20">
				<div className="flex col-start-2 justify-center">
					<Tittle tittle="Menú" acronym="Autor" factor={4} />
				</div>
				<p className="flex justify-center col-start-2 my-4 text-xl text-gray-500 mb-15">
					Tienes todas estas posibilidades a tú mano:
				</p>

				<div className="col-start-1">
					<MenuItem
						path="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
						tittle="Mis Articulos"
						description="Gestión y envio de articulos"
						href="/AuthorArticles"
					/>
				</div>

				<MenuItem
					path="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
					tittle="Añadir Articulo"
					description="Adcición de nuevos articulos"
					href="/AddArticle"
				/>

				<MenuItem
					path="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
					tittle="Perfil"
					description="Gestión del perfil"
					href="/Profile"
				/>
			</section>
			<Footer />
		</>
	);
};

export default AuthorMenu;
