import { useState } from "react";

const ArticleCard = ({ article }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="w-64 h-72 bg-gray-100 overflow-hidden rounded-xl shadow-xl cursor-pointer">
      <div
        className="w-full h-56"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        {isMouseOver ? (
          <p className="mx-3 text-sm text-gray-700 h-56 overflow-hidden hover:overflow-visible">
            {article.synopsis}
          </p>
        ) : (
          <img
            src={article.cover}
            alt={article.title}
            className="w-full h-56 object-cover"
          />
        )}
      </div>

      <div className="p-2">
        <h2 className="text-blue-800 text-lg font-bold mb-2">
          {article.title}
        </h2>
        <div className="flex">
          <h3 className="text-blue-800 text-sm mb-1 ml-auto">
            {article.author}
          </h3>
          <h3 className="text-blue-800 text-sm mb-1 ml-auto">{article.date}</h3>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
