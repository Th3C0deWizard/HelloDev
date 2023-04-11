import SearchBar from "../components/SearchBar";
import ArticleCard from "./ArticleCard";
import Tittle from "./Tittle";

const ArticleSet = ({ articles }) => {
	return (
		<section className="bg-slate-900 rounded-t-xl m-0 py-10 px-10 mx-3 ">
			<section className="flex flex-col justify-center items-center mb-10">
				<Tittle tittle="ARTICULOS" acronym="UAM" factor={5} />
				<div className="w-full">
					<SearchBar />
				</div>
			</section>
			<section className="grid grid-cols-4 gap-x-8 gap-y-10">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</section>
		</section>
	);
};

export default ArticleSet;
