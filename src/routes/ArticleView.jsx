import { useLocation } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PdfViewer from "../components/PdfViewer";
import InfoCard from "../components/InfoCard";

const ArticleView = () => {
  const { title, author, date, synopsis, content, cover } =
    useLocation().state.article;

  const [pdfFile, setPdfFile] = useState(null);

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      let reader = new FileReader();
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
            <input
              type="file"
              className="form-control"
              onChange={handleFile}
            ></input>
            <h5>View PDF</h5>
            {pdfFile && <PdfViewer pdf={pdfFile} />}
          </section>

          <section className="my-5 ml-3 mr-2 p-3 rounded-xl border bg-slate-800">
            <InfoCard
              title={title}
              author={author}
              date={date}
              synopsis={synopsis}
              cover={cover}
            />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticleView;
