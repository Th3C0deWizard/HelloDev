import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import PdfViewer from "../components/PdfViewer";

const ArticleView = () => {
	const {
		titulo,
		nombres,
		apellidos,
		fecha_publicación,
		resumen,
		portada,
		archivo,
	} = useLocation().state.article;
	const [pdfFile, setPdfFile] = useState(archivo);
	console.log(useLocation().state.article);
	return (
		<>
			<main className="flex flex-col bg-white text-black w-full pt-20">
				<InfoCard
					title={titulo}
					author={`${nombres} ${apellidos}`}
					date={fecha_publicación.substring(0, 10)}
					synopsis={resumen}
					cover={portada}
				/>
				<section className="py-4">
					<section className="items-center col-span-2 row-span-2">
						{pdfFile && <PdfViewer pdf={pdfFile} />}
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default ArticleView;
