import { useState } from "react";
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="articleCard">
      <div
        className="w-full h-48"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        {isMouseOver ? (
          <p className="mx-3">{article.synopsis}</p>
        ) : (
          <img
            src={article.cover}
            alt={article.title}
            className="articleCover"
          />
        )}
      </div>

      <div className="p-2">
        <h2 className="articleTittle">{article.title}</h2>
        <div className="flex">
          <h3 className="articleText">{article.author}</h3>
          <h3 className="articleText">{article.date}</h3>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
