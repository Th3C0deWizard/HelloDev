import SearchBar from "../components/SearchBar";
import ArticleCard from "./ArticleCard";
import Tittle from "./Tittle";

const ArticleSet = ({ articles }) => {
	return (
		<section className="bg-slate-900">
			<div className="flex flex-col justify-center items-center">
				<Tittle tittle="ARTICULOS" acronym="UAM" factor={4} />
				<SearchBar />
			</div>
			<div className="m-0 py-10 px-10 mx-3 grid grid-cols-4 gap-x-8 gap-y-10">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</section>
	);
};

export default ArticleSet;
