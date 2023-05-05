import Footer from "../components/Footer";
import Table from "../components/Table";
import AuthorArticlesRow from "../components/AuthorArticlesRow";
import useFetch from "../hooks/useFetch";

const AuthorArticles = (props) => {
  const [articles, isLoading, setIsLoading] = useFetch(
    "articulos/autor/" + props.user.id,
    console.log(props.user.id),
    (error) => {
      console.error("Fallo al cargar los articulos");
    }
  );

  const [editors, isLoadingEditor, setIsLoadingEditor] = useFetch(
    "editores",
    console.log(props.autor),
    (error) => {
      console.error("Fallo al cargar los editores");
    }
  );

  return (
    <>
      <section className=" bg-white p-8 min-h-[40vh] pt-20">
        <h1 className="grid place-items-center font-extrabold text-6xl text-[#0069a3]">
          Mis Articulos
        </h1>
        {isLoading ? (
          <h1>Esta cargando</h1>
        ) : (
          <Table
            id="table_autor_articles"
            headers={[
              "Id",
              "Titulo",
              "Fecha",
              "Portada",
              "Archivo",
              "Estado",
              "Acciones",
            ]}
            data={articles?.map((article) => (
              <AuthorArticlesRow
                key={article.id}
                article={article}
                autor={props.user.id}
                editor={editors[0]["id_editor"]}
                load={setIsLoading}
              />
            ))}
          />
        )}
      </section>
      <Footer />
    </>
  );
};

export default AuthorArticles;
