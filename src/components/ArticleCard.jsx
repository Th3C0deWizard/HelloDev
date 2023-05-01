import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const ArticleCard = ({ article }) => {
	const [isMouseOver, setIsMouseOver] = useState(false);

	return (
		<div className="p-3 bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 cursor-pointer">
			<div
				className="relative flex items-end overflow-hidden rounded-xl"
				onMouseEnter={() => setIsMouseOver(true)}
				onMouseLeave={() => setIsMouseOver(false)}
			>
				{isMouseOver ? (
					<div className="mx-3 h-40 mb-9 hover:overflow-visible">
						<p className="text-sm text-gray-700">{article.resumen}</p>
					</div>
				) : (
					<img src={article.portada} alt={article.titulo} />
				)}
			</div>

			<div className="p-2">
				<h2 className="text-[#0069a3] text-lg font-bold">{article.titulo}</h2>
				<p className=" text-sm text-slate-400">{article.autor}</p>
				<div className="mt-1 flex items-end justify-between">
					<p className="text-lg font-bold text-amber-500">
						{article.fecha_pub}
					</p>
					<Link
						to="/ArticleView"
						state={{ article: article }}
						className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 shadow-lg shadow-blue-600"
					>
						<Icon
							path="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
							w={6}
							h={6}
							color="white"
						/>
						<button className="text-sm font-bold ">Leer</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
