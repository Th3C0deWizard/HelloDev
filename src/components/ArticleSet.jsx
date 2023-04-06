import ArticleCard from "./ArticleCard";

const ArticleSet = ({ articles }) => {
  return (
    <section className="bg-slate-900 rounded-t-xl m-0 py-10 px-24 grid grid-cols-4 gap-x-24 gap-y-10">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
};

export default ArticleSet;
