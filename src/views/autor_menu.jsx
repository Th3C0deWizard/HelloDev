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
            Menú <span class="bg-amber-200 text-amber-600 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">Autor</span>
        </h1>
        <p class="col-start-2 my-4 text-xl text-gray-500 mb-15">Tienes todas estas posibilidades a tú mano:</p>

        <div class="col-start-1 grid place-items-center mx-5 mt-8">
            <svg class="w-20 h-20 text-amber-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"></path>
            </svg>
            <h2 class="text-2xl font-extrabold dark:text-white">Mis Articulos</h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">Articulos redactados</p>
            <a href="#" class="font-medium text-amber-400 hover:underline mt-4">Go ahead</a>
        </div>

        <div class="grid place-items-center mx-5 mt-8 mr-10s">
            <svg class="w-20 h-20 text-amber-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
            </svg>
            <h2 class="text-2xl font-extrabold dark:text-white">Enviar Articulo</h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">Envio de articulos para revisión</p>
            <a href="#" class="font-medium text-amber-400 hover:underline mt-4">Go ahead</a>
        </div>

        <div class="grid place-items-center mx-5 mt-8">
            <svg class="w-20 h-20 text-amber-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"></path>
            </svg>
            <h2 class="text-2xl font-extrabold dark:text-white">Perfil</h2>
            <p class="sm:text-xl text-gray-400">Gestión del perfil</p>
            <a href="#" class="font-medium text-amber-400 hover:underline mt-4">Go ahead</a>
        </div>

      </section>
      <Footer_2 />
    </div>
  </React.StrictMode>
);