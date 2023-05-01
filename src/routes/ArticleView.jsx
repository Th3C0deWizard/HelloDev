import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import PdfViewer from "../components/PdfViewer";

const ArticleView = () => {
	const { titulo, autor, fecha_publicación, resumen, portada, archivo } =
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
			<main className="flex flex-col bg-slate-900 text-white w-full pt-20">
				<section className="grid grid-cols-3 items-start">
					<section className="items-center col-span-2 row-span-2">
						{pdfFile && <PdfViewer pdf={pdfFile} />}
					</section>

					<section className="my-5 ml-3 mr-2 p-3 rounded-xl border bg-slate-800">
						<InfoCard
							title={titulo}
							author={autor}
							date={fecha_publicación}
							synopsis={resumen}
							cover={portada}
						/>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default ArticleView;
