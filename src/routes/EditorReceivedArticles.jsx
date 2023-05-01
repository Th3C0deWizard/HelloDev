import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";

const EditorReceivedArticles = () => {
  return (
    <>
      <Header />
      <section className=" bg-white p-8 h-[64.8vh] pt-20">
        <h1 className="grid place-items-center mb-4 font-extrabold text-6xl text-[#0069a3]">
          Articulos Recibidos
        </h1>
        <Table
          headers={["Titulo del articulo", "Autor", "Fecha", "Archivo"]}
          data={[
            ["The mackbook", "Pepito", "2020-10-12", ".pdf"],
            ["The Windows", "Perez", "2022-09-11", ".excel"],
          ]}
          styleData={[
            " whitespace-nowrap",
            "",
            "",
            "text-amber-400 hover:underline cursor-pointer",
          ]}
        />

        <div className="grid grid-cols-7 gap-2"></div>
      </section>
      <Footer />
    </>
  );
};

export default EditorReceivedArticles;
