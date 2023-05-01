import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";
import ArticleCard from "./ArticleCard";
import Tittle from "./Tittle";

const ArticleSet = () => {
	const [articles, isLoading, setIsLoading] = useFetch(
		"articulos/by?filter=id_estado&filterValue=3",
		(error) => {
			console.error("Fallo al cargar los articulos");
		},
	);

	return (
		<section className="min-h-[93vh] bg-slate-900 rounded-t-xl m-0 p-10">
			<section className="flex flex-col justify-center items-center mb-10">
				<Tittle tittle="ARTICULOS" acronym="UAM" factor={5} />
				<div className="w-full">
					<SearchBar setIsLoading={setIsLoading} />
				</div>
			</section>
			<section className="grid grid-cols-4 gap-x-8 gap-y-10">
				{isLoading ? (
					<h1>Esta cargando</h1>
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
