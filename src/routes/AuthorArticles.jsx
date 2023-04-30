import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";

const AuthorArticles = () => {
  return (
    <>
      <Header />
      <section className=" bg-white p-8 h-[64.8vh] pt-20">
        <h1 className="grid place-items-center font-extrabold text-6xl text-[#0069a3]">
          Mis Articulos
        </h1>

        <Table
          headers={["Titulo Articulo", "Fecha", "Archivo", "Estado"]}
          data={[
            ["Inteligenia Artificial", "22-10-2021", ".pdf", "Rechazado"],
            ["Inteligencia Artificial", "22-10-2021", ".pdf", "Rechazado"],
          ]}
          styleData={[
            " whitespace-nowrap",
            "",
            " text-amber-400 hover:underline cursor-pointer",
            "",
          ]}
        />

        <div className="grid grid-cols-7 gap-2">
          <button
            type="button"
            className="col-start-3 bg-[#0069a3] hover:bg-blue-500 text-white font-medium text-lg py-2.5 text-center rounded shadow-lg focus:ring-blue-900 focus:ring-4"
          >
            Enviar
          </button>
          <button
            type="button"
            className="bg-[#F4D73B] hover:bg-[#fae360] text-[#0069a3] font-medium text-lg py-2.5 text-center rounded shadow-lg focus:ring-[#eecd12] focus:ring-4"
          >
            Editar
          </button>
          <button
            type="button"
            className=" bg-[#E36727] hover:bg-[#EC992D] text-white font-medium text-lg py-2.5 text-center rounded shadow-lg focus:ring-[#d34f0e] focus:ring-4"
          >
            Eliminar
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AuthorArticles;
