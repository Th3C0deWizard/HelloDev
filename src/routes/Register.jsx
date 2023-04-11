import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";

const Register = () => {
  return (
    <div>
      <Header />
      <div
        class="h-screen"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="grid grid-cols-5">
          <div className="col-span-3 flex flex-col justify-center bg-[#0069a3] bg-opacity-80 mx-10 my-10 mt-20 px-10 rounded-lg ">
            <a
              href="#"
              className="flex items-center text-3xl font-semibold text-white mt-10 mb-5"
            >
              <img
                className="w-10 h-10 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              {"HelloDev!"}
            </a>
            <h2 class="text-5xl font-bold text-left text-white">
              Explore the world’s writing technology articles.
            </h2>
            <p class="mt-5 text-lg font-normal text-white">
              Millions of authors around the world showcase their articles work
              on Hello Dev. The home to the UAM’s Systems Engineerings best
              authors and creative writers.
            </p>
            <div class="flex -space-x-4 mt-5">
              <img
                class="w-10 h-10 border-2 border-white rounded-full"
                src="src/components/assets/profile-picture-5.jpg"
                alt=""
              />
              <img
                class="w-10 h-10 border-2 border-white rounded-full"
                src="src/components/assets/profile-picture-2.jpg"
                alt=""
              />
              <img
                class="w-10 h-10 border-2 border-white rounded-full"
                src="src/components/assets/profile-picture-3.jpg"
                alt=""
              />
              <a
                class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-amber-500 border-2 border-white rounded-full hover:bg-gray-600"
                href="#"
              >
                +99
              </a>
            </div>
          </div>
          <div className="mt-12 mb-5 mr-10 col-start-4 col-span-2 rounded-lg shadow bg-slate-900 bg-opacity-80">
            <div className="p-6 justify-end md:space-y-5">
              <h1 className="grid place-items-center font-bold md:text-3xl text-white">
                Sign Up to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Nombre Completo"
                    type="text"
                    id="name"
                    placeholder="Complete Name"
                    style=""
                  />
                  <Input
                    label="Apellidos"
                    type="text"
                    id="lastname"
                    placeholder="Lastnames"
                    style=""
                  />
                  <Input
                    label="Telefono"
                    type="number"
                    id="phoneNumber"
                    placeholder="+57 000 0000000"
                    style=""
                  />
                  <Input
                    label="Your email"
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    style=""
                  />
                </div>

                <Input
                  label="Contraseña"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  style=""
                />
                <Input
                  label="Confirmar Contraseña"
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  style=""
                />
                <button
                  type="submit"
                  className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-md p-2"
                >
                  Create your account
                </button>
                <p className="grid place-items-center text-sm font-light text-amber-300">
                  Do you have an account already?{" "}
                  <a
                    href="/login"
                    className="font-medium text-amber-400 hover:underline"
                  >
                    {" "}
                    Log in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
