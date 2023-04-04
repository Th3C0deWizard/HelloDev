import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Footer_2 from "../components/Footer_2";
import "../components/author_profile.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Header />
      {/*Este es el componente que se va a renderizar*/}
      <section class="grid grid-cols-3 gap-1 bg-slate-900" >

        {/*Formulario - Dividido en tablas*/}
        <div class="col-span-2 grid grid-cols-4 grid-rows-8 m-6 ">
            <img class="ml-3 mb-2 col-start-3 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/seed/1/400/300" alt="author"/> {/*Icono del perfil"*/}
            <h3 class="col-start-3">ARTICULO</h3>
            <h3 class="col-start-1 col-span-2">Titulo Articulo</h3>
            <h3 class="col-start-4 col-span-2">Resumen</h3>
            <input type="text" class="col-start-1 col-span-2 mb-4" placeholder=" Titulo" required/> {/*Input titulo*/}
            <textarea class="ml-12 col-start-3 col-span-2 row-span-2 " placeholder=" Resumen..." required/> {/*Input resumen*/}
            <img class="col-start-1 col-span-2 mb-4 h-auto max-w-lg mx-auto border-4 border-amber-500 border-b-amber-300 border-r-amber-300" src="https://picsum.photos/seed/8/300/300" alt="Portada"/>
            
            <label class="col-start-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
            <input class="col-start-1 col-span-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
            <button className="save">Enviar</button> {/*Boton guardar cambios*/}
        </div>

        {/*Imagen*/}
        <img class="ml-12 w-80" src="src/components/assets/right.jpg" alt="author" />
      </section>
      <Footer_2 />
    </div>
  </React.StrictMode>
);