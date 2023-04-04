import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Footer_2 from "../components/Footer_2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Header />
      <section class="grid grid-cols-3 gap-2 bg-slate-900 p-2 pt-10 pb-20">
        <h1 class="col-start-2 ml-20 text-4xl font-extrabold dark:text-white">
          Menú{" "}
          <span class="bg-amber-200 text-amber-600 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">
            Editor
          </span>
        </h1>
        <p class="col-start-2 my-4 text-xl text-gray-500 mb-15">
          Tienes todas estas posibilidades a tú mano:
        </p>

        <div class="col-start-1 grid place-items-center mx-5 mt-8">
          <svg
            class="w-20 h-20 text-amber-400"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
            ></path>
          </svg>
          <h2 class="text-2xl font-extrabold dark:text-white">Recibidos</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Articulos recibidos
          </p>
          <a href="#" class="font-medium text-amber-400 hover:underline mt-4">
            Go ahead
          </a>
        </div>

        <div class="grid place-items-center mx-5 mt-8 mr-10s">
          <svg
            class="w-20 h-20 text-amber-400"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
            ></path>
          </svg>
          <h2 class="text-2xl font-extrabold dark:text-white">Historial</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Historial de todos los articulos de la revista
          </p>
          <a href="#" class="font-medium text-amber-400 hover:underline mt-4">
            Go ahead
          </a>
        </div>

        <div class="grid place-items-center mx-5 mt-8">
          <svg
            class="w-20 h-20 text-amber-400"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
            ></path>
          </svg>
          <h2 class="text-2xl font-extrabold dark:text-white">Gestionar</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Gestión articulos recibidos y evaluados
          </p>
          <a href="#" class="font-medium text-amber-400 hover:underline mt-4">
            Go ahead
          </a>
        </div>
      </section>
      <Footer_2 />
    </div>
  </React.StrictMode>
);
