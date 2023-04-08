import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

const AuthorsList = () => {
  return (
    <div>
      <Header />
      <section className=" bg-slate-900 p-8">
        <h1 className="grid place-items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Autores
        </h1>
        <Table
          headers={[
            "Codigos",
            "Nombres",
            "Apellidos",
            "Seudónimo",
            "Teléfono",
            "E-mail",
            "Fecha registro",
          ]}
          data={[
            [
              "01",
              "Pepito",
              "Perez Lopez",
              "PepeLop",
              "123456789",
              "pepito@gmail.com",
              "2020-10-12",
            ],
            [
              "02",
              "Pedro",
              "Garcia Loaiza",
              "PedroG",
              "987654321",
              "pedrogl@hotmail.com",
              "2022-09-11",
            ],
          ]}
          styleData={[
            " whitespace-nowrap",
            "",
            "",
            "",
            "",
            "text-amber-400 hover:underline cursor-pointer",
            "",
          ]}
        />

        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-9">
            <SearchBar />
          </div>
          <div className="col-span-2">
            <Button
              text="Descargar"
              style=" bg-teal-400 hover:bg-teal-500 text-teal-800 focus:ring-teal-900 shadow-teal-800/80"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AuthorsList;
