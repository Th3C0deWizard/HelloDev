import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/author_profile.css";

const AuthorProfile = () => {
  return (
    <div>
      <Header />
      {/*Este es el componente que se va a renderizar*/}
      <section className="grid grid-cols-3 gap-1 bg-slate-900">
        {/*Formulario - Dividido en tablas*/}
        <div className="col-span-2 grid grid-cols-4 grid-rows-11 gap-1 m-6 ">
          <img
            className="col-start-3 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://picsum.photos/seed/1/400/300"
            alt="author"
          />{" "}
          {/*Icono del perfil"*/}
          <h3 className="col-start-3">AUTOR</h3>
          <h3 className="col-start-1 col-span-2">Nombres</h3>
          <h3 className="col-start-4 col-span-2">Autobiografia</h3>
          <input
            type="text"
            className="col-start-1 col-span-2"
            placeholder=" John"
            required
          />{" "}
          {/*Input nombre*/}
          <textarea
            className="ml-12 col-start-3 col-span-2 row-span-5"
            placeholder=" Autobiografia"
            required
          />{" "}
          {/*Input autobiografia*/}
          <h3 className="col-start-1 col-span-2">Apellidos</h3>
          <input
            type="text"
            className="col-start-1 col-span-2"
            placeholder=" Doe"
            required
          />{" "}
          {/*Input apellidos*/}
          <h3 className="col-start-1 col-span-2">Telefono</h3>
          <input
            type="tel"
            className="col-start-1 col-span-2"
            placeholder=" 123-45-678"
            required
          />{" "}
          {/*Input Telefono*/}
          <h3 className="col-start-1 ">Nacionalidad</h3>
          <h3 className="col-span-2 ml-2">E-mail</h3>
          <select className="col-start-1 h-10" required>
            {" "}
            {/*Input nacionalidad*/}
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <div className="relative mb-6 col-span-2 ml-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              className="email"
              placeholder=" name@flowbite.com"
              required
            />{" "}
            {/*Input e-mail*/}
          </div>
          <button className="save">Guardar cambios</button>{" "}
          {/*Boton guardar cambios*/}
        </div>

        {/*Imagen*/}
        <img
          className="ml-12 w-80"
          src="src/components/assets/right.jpg"
          alt="author"
        />
      </section>
      <Footer />
    </div>
  );
};

export default AuthorProfile;
