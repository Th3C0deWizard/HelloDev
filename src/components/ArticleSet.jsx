import useFetch from "../hooks/useFetch";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Login from "./Login";
import Tittle from "./Tittle";

const ArticleSet = ({ setUser, showLogin, setShowLogin }) => {
	const [articles, isLoading, setIsLoading] = useFetch(
		"articulos/by?filter=id_estado&filterValue=3",
		(error) => {
			console.error("Fallo al cargar los articulos");
		},
	);

	return (
		<section className="min-h-[93vh] bg-white pb-20 pt-20">
			{showLogin ? (
				<Login setUser={setUser} setShowLogin={setShowLogin} />
			) : null}
			<section className="bg-white flex flex-col justify-center items-center mb-10">
				<Tittle tittle="ARTICULOS" acronym="UAM" factor={5} />
			</section>
			<section className="px-36 grid grid-cols-3 gap-x-8 gap-y-10">
				{isLoading ? (
					<Loading />
				) : (
					articles?.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))
				)}
			</section>
		</section>
	);
};

export default ArticleSet;
