import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <img src={article.cover} alt={article.title} className="articleCover" />
      <div className="p-2">
        <h2 className="articleTittle">{article.title}</h2>
        <div className="flex ">
          <h3 className="articleText">{article.author}</h3>
          <h3 className="articleText">{article.date}</h3>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
