import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ArticleView = () => {
	const { title, author, date, synopsis, content, cover } = useLocation().state;
	return (
		<>
			<Header />
			<main className="flex flex-col bg-slate-900 text-white min-h-[34.2rem] w-full">
				<section className="grid grid-cols-3 items-start">
					<section className="col-span-2 my-5 ml-3 mr-2 p-3 rounded-xl border bg-slate-800">
						<section className="my-3 p-3 rounded-xl border flex flex-col items-start">
							<h1 className="text-2xl">{title}</h1>
							<h2 className=" text-xl">Autor : {author}</h2>
							<h2 className="text-xl">Fecha : {date}</h2>
						</section>
						<section className="flex flex-col rounded-xl border items-center my-3 p-3 space-y-4">
							<h1 className="text-2xl"> Synopsis</h1>
							<p className="self-start">{synopsis}</p>
						</section>
					</section>
					<section className="flex rounded-xl bg-slate-800 border my-5 mx-2 justify-center items-center self-center">
						<img
							className="rounded-xl m-2 border w-full h-full "
							src={cover}
							alt="cover of the article"
						/>
					</section>
				</section>
				<section className="bg-slate-800 rounded-xl border m-5 p-3">
					<div className="rounded-xl border w-1/6 my-2">
						<button className="rounded-l-xl w-1/3 bg-slate-900">-</button>
						<button className="w-1/3 bg-slate-900">O</button>
						<button className="rounded-r-xl w-1/3 bg-slate-900">+</button>
					</div>
					<p>{content}</p>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default ArticleView;
