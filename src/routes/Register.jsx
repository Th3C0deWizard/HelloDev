import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Input from "../components/Input";

const Register = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const handleSubmit = () => {
    const data = {
      nombres: nombres,
      apellidos: apellidos,
      nombreUsuario: nombreUsuario,
      nacionalidad: nacionalidad,
      telefono: telefono,
      email: email,
      contraseña: contraseña,
      confirmarContraseña: confirmarContraseña,
    };
    console.log(JSON.stringify(data));
    fetch("http://localhost:3000/autores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) console.error("error al Añadir el articulo");
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div
        className="flex pt-20"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="grid grid-cols-5">
          <div className="col-span-3 flex flex-col justify-center bg-[#0069a3] bg-opacity-80 mx-10 my-10 mt-20 px-10 rounded-lg ">
            <Link
              to="/"
              className="flex items-center text-3xl font-semibold text-white mt-10 mb-5"
            >
              <img
                className="w-10 h-10 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              {"HelloDev!"}
            </Link>
            <h2 className="text-5xl font-bold text-left text-white">
              Explore the world’s writing technology articles.
            </h2>
            <p className="mt-5 text-lg font-normal text-white">
              Millions of authors around the world showcase their articles work
              on Hello Dev. The home to the UAM’s Systems Engineerings best
              authors and creative writers.
            </p>
            <div className="flex -space-x-4 mt-5">
              <img
                className="w-10 h-10 border-2 border-white rounded-full"
                src="src/components/assets/profile-picture-5.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full"
                src="src/components/assets/profile-picture-2.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full"
                src="src/components/assets/profile-picture-3.jpg"
                alt=""
              />
              <Link
                className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-amber-500 border-2 border-white rounded-full hover:bg-gray-600"
                to="/"
              >
                +99
              </Link>
            </div>
          </div>
          <div className="mt-12 mb-5 mr-10 col-start-4 col-span-2 rounded-lg shadow bg-slate-900 bg-opacity-80">
            <div className="p-6 justify-end md:space-y-5">
              <h1 className="grid place-items-center font-bold md:text-3xl text-white">
                Sign Up to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Nombre Completo"
                    type="text"
                    id="name"
                    placeholder="Complete Name"
                    style=""
                    onChange={(e) => setNombres(e.target.value)}
                  />
                  <Input
                    label="Apellidos"
                    type="text"
                    id="lastname"
                    placeholder="Lastnames"
                    style=""
                    onChange={(e) => setApellidos(e.target.value)}
                  />
                  <Input
                    label="Nombre de Uusario"
                    type="username"
                    id="username"
                    placeholder="bowser"
                    style=""
                    onChange={(e) => setNombreUsuario(e.target.value)}
                  />
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Nacionalidad
                    </label>
                    <select
                      className="col-start-1 h-10 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      required
                      onChange={(e) => setNacionalidad(e.target.value)}
                      defaultValue={"df"}
                    >
                      <option value="df">Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <Input
                    label="Telefono"
                    type="number"
                    id="phoneNumber"
                    placeholder="+57 000 0000000"
                    style=""
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                  <Input
                    label="Your email"
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    style=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Input
                  label="Contraseña"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  style=""
                  onChange={(e) => setContraseña(e.target.value)}
                />
                <Input
                  label="Confirmar Contraseña"
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  style=""
                  onChange={(e) => setConfirmarContraseña(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full text-white bg-amber-500 hover:bg-amber-600 hover:scale-95 transition font-medium rounded-lg text-md p-2"
                  onClick={handleSubmit}
                >
                  Create your account
                </button>
                <p className="grid place-items-center text-sm font-light text-amber-300">
                  Do you have an account already?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-amber-400 hover:underline"
                  >
                    {" "}
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
