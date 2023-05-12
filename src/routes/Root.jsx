import ArticleSet from "../components/ArticleSet";
import Footer from "../components/Footer";

function Root({ setUser, showLogin, setShowLogin }) {
	return (
		<>
			<ArticleSet
				setUser={setUser}
				showLogin={showLogin}
				setShowLogin={setShowLogin}
			/>
			<Footer />
		</>
	);
}

export default Root;
