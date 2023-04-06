import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ArticleSet from "../components/ArticleSet";
import Footer from "../components/Footer";
import Article from "../models/Article";

const articles = Array.from(
  { length: 10 },
  (a, i) =>
    new Article(
      i,
      "titulo",
      "erase una vez",
      "Roberto",
      "1982",
      `https://picsum.photos/seed/${i * Math.random()}/400/300`
    )
);

function Root() {
  return (
    <div className="bg-gray-800">
      <Header />
      <SearchBar />
      <ArticleSet articles={articles} />
      <Footer />
    </div>
  );
}

export default Root;
