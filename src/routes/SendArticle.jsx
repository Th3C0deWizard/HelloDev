import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/author_profile.css";
import Tittle from "../components/Tittle";
import Button from "../components/Button";

const SendArticle = () => {
  return (
    <div>
      <Header />
      <div
        className="flex justify-center h-screen"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="flex flex-col place-items-center justify-center pb-10 pt-5">
          <div className="w-full rounded-lg shadow md:mt-0 md:max-w-4xl xl:p-0 bg-slate-900 border-gray-700 bg-opacity-70">
            <div className="col-span-2 grid grid-cols-5 grid-rows-14 m-6">
              <h1 className="col-start-1 col-span-5 text-4xl font-semibold text-white mb-2 ml-40 pl-6">
                Enviar Articulo
              </h1>
              <h3 className="col-start-1">Titulo Articulo</h3>
              <input
                type="text"
                className="col-start-1 col-span-5"
                placeholder=" Titulo"
                required
              />
              <h3 className="col-span-5">Resumen</h3>
              <textarea
                className="col-span-5"
                placeholder=" Resumen..."
                required
              />{" "}
              <h3 className="col-start-1 col-span-2 mt-5">
                Archivo del Articulo
              </h3>
              <h3 className="col-start-4 col-span-2 mt-5">Portada</h3>
              {/*Input resumen*/}
              <div class="col-start-1 col-span-2 items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-600 bg-gray-700 border-gray-600 hover:border-amber-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-amber-500">
                      <span class="font-semibold ">Click to upload</span> or
                      drag and drop
                    </p>
                    <p class="text-xs text-amber-500">
                      PDF, WORD, or TXT (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <div class="col-start-4 col-span-2 items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="px-5 flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-600 bg-gray-700 border-gray-600 hover:border-amber-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-amber-500">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-amber-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <div className="col-start-3">
                <Link to="/AuthorArticles">
                  <button
                    type="submit"
                    className=" ml-6 text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 :hover:bg-primary-700 focus:ring-primary-800"
                  >
                    Enviar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SendArticle;
