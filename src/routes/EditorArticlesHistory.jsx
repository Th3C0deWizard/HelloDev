import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Button from "../components/Button";

const EditorArticlesHistory = () => {
  return (
    <div>
      <Header />
      <section className="bg-slate-900">
        <div className="flex flex-col place-items-center justify-center pb-10">
          <h1 className="grid place-items-center mb-4 font-extrabold text-5xl text-white mt-5">
            Historial de Articulos
          </h1>
          <Table
            headers={[
              "Titulo del articulo",
              "Autor",
              "Fecha",
              "Archivo",
              "Estado",
            ]}
            data={[
              ["The mackbook", "Pepito", "2020-10-12", ".pdf", "Aceptado"],
              ["The Windows", "Perez", "2022-09-11", ".excel", "Rechazado"],
            ]}
            styleData={[
              " whitespace-nowrap",
              "",
              "",
              "text-amber-400 hover:underline cursor-pointer",
            ]}
          />

          <div className="grid grid-cols-5 gap-2">
            <Button
              text="Revertir Estado"
              style=" col-start-3 bg-amber-200 text-amber-600 hover:bg-amber-300 focus:ring-amber-800 shadow-amber-800/80"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EditorArticlesHistory;
