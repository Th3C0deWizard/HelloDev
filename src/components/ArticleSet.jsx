import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Login from "./Login";
import Tittle from "./Tittle";

const ArticleSet = (props) => {
	return (
		<section className="min-h-[93vh] bg-white pb-20 pt-20">
			{props.showLogin ? (
				<Login setUser={props.setUser} setShowLogin={props.setShowLogin} />
			) : null}
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
