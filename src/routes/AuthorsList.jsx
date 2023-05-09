import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import AuthorsListRow from "../components/AuthorsListRow";
import useFetch from "../hooks/useFetch";

const AuthorsList = () => {
  const [autors, isLoading, setIsLoading] = useFetch("autores", (error) => {
    console.error("Fallo al cargar los autores");
  });

  return (
    <>
      <section className=" bg-white p-8 min-h-[40vh] pt-20">
        <h1 className="grid place-items-center font-extrabold text-6xl text-[#0069a3] ">
          Autores
        </h1>
        {isLoading ? (
          <h1>Esta cargando</h1>
        ) : (
          <Table
            headers={[
              "Id",
              "Nombre(s)",
              "Apellidos",
              "Usuario",
              "Email",
              "Telefono",
              "Nacionalidad",
              "Fecha registro",
            ]}
            data={autors?.map((autor) => (
              <AuthorsListRow id={autor.id_usuario} autor={autor} />
            ))}
          />
        )}
        <SearchBar />
      </section>
      <Footer />
    </>
  );
};

export default AuthorsList;
