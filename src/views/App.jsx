import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ArticleSet from "../components/ArticleSet";
import Footer from "../components/Footer";
import Article from "../models/Article";
import "./App.css";

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

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <ArticleSet articles={articles} />
      <Footer />
    </div>
  );
}

export default App;
