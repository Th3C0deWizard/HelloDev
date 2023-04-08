import Header from "../components/Header";
import ArticleSet from "../components/ArticleSet";
import Footer from "../components/Footer";
import Article from "../models/Article";

const articles = Array.from(
  { length: 8 },
  (a, i) =>
    new Article(
      i,
      "Titulo",
      "Resumen",
      "Roberto Perez",
      "1982-10-12",
      `https://picsum.photos/seed/${i * Math.random()}/400/300`
    )
);

function Root() {
  return (
    <div className="bg-slate-900">
      <Header />
      <ArticleSet articles={articles} />
      <Footer />
    </div>
  );
}

export default Root;
