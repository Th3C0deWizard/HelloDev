import ArticleCard from "./ArticleCard";
import "./ArticleSet.css";

const ArticleSet = ({ articles }) => {
  return (
    <div className="articlesContainer">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleSet;
