import Footer from "../components/Footer";
import Table from "../components/Table";

const EditorArticlesHistory = () => {
  return (
    <>
      <section className="bg-white min-h-[64.8vh] pt-20">
        <div className="flex flex-col place-items-center justify-center pb-10">
          <h1 className="grid place-items-center mb-4 font-extrabold text-6xl text-[#0069a3]">
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

          <div className="grid grid-cols-5 gap-2"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EditorArticlesHistory;
