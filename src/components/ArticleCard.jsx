import { Link } from "react-router-dom";
import Icon from "./Icon";

const ArticleCard = ({ article }) => {
	let fecha = new String(article.fecha_publicación);
	fecha = fecha.substring(0, 10).replaceAll("-", "/");
	return (
		<div className="bg-white  rounded-tl-3x rounded-b-3xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 duration-300">
			<div className="font-sans italic font-medium ml-48 pl-4 py-2 rounded-tl-3xl bg-[#0069a3]">
				Conoce la UAM
			</div>
			<div className="group block bg-black rounded-tl-3xl shadow-none">
				<p className="absolute p-10 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-sm text-white ">
					{article.resumen.lenght <= 400 ? (
						`"${article.resumen}"`
					) : (
						`"${article.resumen.substring(0, 400)}..."`)}
				</p>

				<img
					alt={article.titulo}
					src={article.portada}
					className="z-[-1] rounded-tl-3xl opacity-75 transition-opacity group-hover:opacity-25"
				/>
			</div>

			<div className="p-2 pb-3 bg-[#f8f9fa]">
				<h2 className="text-[#0069a3] text-2xl font-semibold">
					{article.titulo}
				</h2>
				<p className="mt-4  text-[#343a40]">
					{`${article.nombres} ${article.apellidos}`}
				</p>
				<div className="mt-1 flex items-end justify-between">
					<time
						dateTime="00z"
						className="flex items-center space-x-12.5 text-lg font-bold text-[#7a7e83]"
					>
						<Icon
							path="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
							w={4}
							h={4}
						/>
						{fecha}
					</time>
					<Link
						to="/ArticleView"
						state={{ article: article }}
						className="flex items-center space-x-1.5 bg-[#F4D73B] px-4 py-1.5 text-white duration-100 hover:bg-[#ffdc16] rounded shadow-lg hover:scale-110 transition"
					>
						<Icon
							path="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
							w={6}
							h={6}
							color="[#0069a3]"
						/>
						<button className="text-sm font-bold text-[#0069a3]">Leer</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
