import Header from "../components/Header";
import Footer_2 from "../components/Footer_2";

const AuthorsList = () => {
  return (
    <div>
      <Header />
      <section class=" bg-slate-900 p-8">
        <h1 class="grid place-items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Autores
        </h1>
        <div class="grid place-items-center sm:rounded-lg">
          <table class=" my-10 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Codigos
                </th>
                <th scope="col" class="px-6 py-3">
                  Nombres
                </th>
                <th scope="col" class="px-6 py-3">
                  Apellidos
                </th>
                <th scope="col" class="px-6 py-3">
                  Seudónimo
                </th>
                <th scope="col" class="px-6 py-3">
                  Teléfono
                </th>
                <th scope="col" class="px-6 py-3">
                  E-mail
                </th>
                <th scope="col" class="px-6 py-3">
                  Fecha registro
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  01
                </th>
                <td class="px-6 py-4">Roberto</td>
                <td class="px-6 py-4">Petulio Jimenez</td>
                <td class="px-6 py-4">Patitas</td>
                <td class="px-6 py-4">3218466905</td>
                <td class="px-6 py-4">patulioPatas@gmail.com</td>
                <td class="px-6 py-4">2021-10-10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="grid grid-cols-7 gap-2">
          <select class="col-start-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Filter</option>
            <option value="Name">Nombre</option>
            <option value="Lastname">Apellido</option>
            <option value="Code">Codigo</option>
          </select>

          <form class="col-span-3">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <button
            type="button"
            class=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Enviar Correo
          </button>
        </div>
      </section>
      <Footer_2 />
    </div>
  );
};

export default AuthorsList;
