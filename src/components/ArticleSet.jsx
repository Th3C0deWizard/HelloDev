import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Tittle from "./Tittle";

const ArticleSet = (props) => {
	return (
		<section className="min-h-[93vh] bg-white pb-20 pt-20">
			<section className="bg-white flex flex-col justify-center items-center mb-10">
				<Tittle tittle="ARTICULOS" acronym="UAM" factor={5} />
			</section>
			<section className="px-36 grid grid-cols-3 gap-x-8 gap-y-10 justify-items-center items-center">
				{props.isLoading ? (
					<Loading className="col-start-2" />
				) : (
					props.articles?.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))
				)}
			</section>
		</section>
	);
};

export default ArticleSet;
