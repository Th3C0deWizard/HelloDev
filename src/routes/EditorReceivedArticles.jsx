import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Button from "../components/Button";

const EditorReceivedArticles = () => {
  return (
    <div>
      <Header />
      <section className=" bg-slate-900 p-8">
        <h1 className="grid place-items-center mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
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

        <div className="grid grid-cols-8 gap-2">
          <Button
            text="Descargar"
            style=" col-start-3 bg-blue-400 hover:bg-blue-500 text-blue-800 focus:ring-blue-900 shadow-blue-800/80"
          />
          <Button
            text="Marcar leido"
            style=" bg-amber-200 text-amber-600 hover:bg-amber-300 focus:ring-amber-800 shadow-amber-800/80"
          />
          <Button
            text="Aceptar"
            style=" bg-emerald-400 text-emerald-800 hover:bg-emerald-500 focus:ring-emerald-900 shadow-emerald-800/80"
          />
          <Button
            text="Rechazar"
            style=" bg-red-400 text-red-800 hover:bg-red-500 focus:ring-red-800 shadow-red-800/80"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EditorReceivedArticles;
