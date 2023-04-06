import Header from "../components/Header";
import Footer from "../components/Footer";

const AuthorArticles = () => {
  return (
    <div>
      <Header />
      <section className=" bg-slate-900 p-8">
        <h1 className="grid place-items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Mis Articulos
        </h1>
        <div className="grid place-items-center sm:rounded-lg">
          <table className=" my-10 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Titulo del articulo
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Archivo
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">22-10-2021</td>
                <td className="px-6 py-4">.pdf</td>
                <td className="px-6 py-4">Rechazado</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <button
            type="button"
            className="col-start-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Decargar
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-amber-300 via-[#F4D73B] to-amber-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#F4D73B] dark:focus:ring-[#F4D73B] shadow-lg shadow-[#F4D73B]/50 dark:shadow-lg dark:shadow-[#F4D73B]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Reenviar
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AuthorArticles;
