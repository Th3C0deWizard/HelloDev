import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PdfViewer from "../components/PdfViewer";

const ArticleView = () => {
	const { titulo, autor, fecha_publicación, resumen, cover, archivo } =
		useLocation().state.article;

	const [pdfFile, setPdfFile] = useState(archivo);

	const handleFile = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile && selectedFile.type === "application/pdf") {
			const reader = new FileReader();
			reader.readAsDataURL(selectedFile);
			reader.onloadend = (e) => {
				setPdfFile(e.target.result);
				console.log(e.target.result);
			};
		}
	};

	return (
		<>
			<Header />
			<main className="flex flex-col bg-slate-900 text-white w-full">
				<section className="grid grid-cols-3 items-start">
					<section className="items-center col-span-2 row-span-2">
						<input type="file" className="form-control" onChange={handleFile} />
						<h5>View PDF</h5>
						{pdfFile && <PdfViewer pdf={pdfFile} />}
					</section>

					<section className="my-5 ml-3 mr-2 p-3 rounded-xl border bg-slate-800">
						<section className="my-3 p-3 rounded-xl border flex flex-col items-start">
							<h1 className="text-2xl">{titulo}</h1>
							<h2 className=" text-xl">Autor : {autor}</h2>
							<h2 className="text-xl">Fecha : {fecha_publicación}</h2>
						</section>
						<section className="flex flex-col rounded-xl border items-center my-3 p-3 space-y-4">
							<h1 className="text-2xl"> Resumen</h1>
							<p className="self-start">{resumen}</p>
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
			</main>
			<Footer />
		</>
	);
};

export default ArticleView;
