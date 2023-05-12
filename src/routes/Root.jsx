import ArticleSet from "../components/ArticleSet";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";

function Root({ setUser, showLogin, setShowLogin }) {
	const [articles, setArticles, isLoading, setIsLoading] = useFetch(
		"articulos/by?filter=id_estado&filterValue=3",
	);
	return (
		<main className="flex flex-col">
			<SearchBar setArticles={setArticles} />
			<ArticleSet
				articles={articles}
				isLoading={isLoading}
				setUser={setUser}
				showLogin={showLogin}
				setShowLogin={setShowLogin}
			/>
			<Footer />
		</main>
	);
}

export default Root;
