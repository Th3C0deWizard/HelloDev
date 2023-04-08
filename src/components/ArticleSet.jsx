import ArticleCard from "./ArticleCard";
import SearchBar from "../components/SearchBar";
import Tittle from "./Tittle";

const ArticleSet = ({ articles }) => {
  return (
    <section className="bg-slate-900 rounded-t-xl m-0 py-10 px-10 mx-3 grid grid-cols-4 gap-x-8 gap-y-10">
      <Tittle tittle="ARTICULOS" acronym="UAM" factor={4} />
      <div className="col-start-1 col-span-4">
        <SearchBar />
      </div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
};

export default ArticleSet;
