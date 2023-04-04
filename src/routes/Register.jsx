import Header from "../components/Header";
import Footer_2 from "../components/Footer_2";

const Register = () => {
  return (
    <div>
      <Header />
      <section class="bg-gray-800">
        <div class="flex flex-col place-items-center justify-center pb-10">
          <a
            href="#"
            class="flex items-center text-3xl font-semibold text-white mt-10 mb-5"
          >
            <img
              class="w-10 h-10 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            {"HelloDev!"}
          </a>
          <div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-slate-900 border-gray-700">
            <div class="p-6 space-y-4 md:space-y-5 sm:p-8">
              <h1 class="grid place-items-center text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Sign Up to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      class="sm:text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Firstname Secondname"
                      required=""
                    />
                  </div>

                  <div className="">
                    <label
                      for="lastname"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Lastname
                    </label>
                    <input
                      type="lastname"
                      name="lastname"
                      id="lastname"
                      class="sm:text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="lastname"
                      required=""
                    />
                  </div>
                  <div className="">
                    <label
                      for="phoneNumber"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      class="sm:text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+(00) 000 000 0000"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="sm:text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="•••••••••••••••"
                    class="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirmPassword"
                    class="block mb-2 text-sm font-medium text-white"
                  >
                    Confirm Your Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="•••••••••••••••"
                    class="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 :hover:bg-primary-700 focus:ring-primary-800"
                >
                  Create your account
                </button>
                <p class="grid place-items-center text-sm font-light text-amber-300">
                  Do you have an account already?{" "}
                  <a
                    href="/login"
                    class="font-medium text-amber-400 hover:underline"
                  >
                    {" "}
                    Log in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer_2 />
    </div>
  );
};

export default Register;
