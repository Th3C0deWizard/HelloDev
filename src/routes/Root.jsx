import ArticleSet from "../components/ArticleSet";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";

function Root() {
	const [articles, setArticles, isLoading, setIsLoading] = useFetch(
		"articulos/by?filter=id_estado&filterValue=3",
	);
	return (
		<>
			<SearchBar setArticles={setArticles} />
			<ArticleSet articles={articles} isLoading={isLoading} />
			<Footer />
		</>
	);
}

export default Root;
