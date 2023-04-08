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
          <div className="col-span-3 place-items-center bg-slate-900 bg-opacity-80 mx-10 mt-20 rounded-lg ">
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
          </div>
          <div className="mt-20 mr-10 pr-1 pl-1 col-start-4 col-span-2 rounded-lg shadow bg-slate-900 bg-opacity-80">
            <div className="p-6 justify-end space-y-4 md:space-y-5 sm:p-8">
              <h1 className="grid place-items-center font-bold leading-tight tracking-tight md:text-3xl text-white">
                Sign Up to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="grid grid-cols-2 gap-4">
                  <Input id="name" type="text" label=" Name" />
                  <Input id="lastname" type="text" label=" Lastname" />
                  <Input id="telephone" type="tel" label=" Phone Number" />
                  <Input id="email" type="email" label=" Email" />
                </div>

                <div>
                  <Input id="password" type="password" label=" Password" />
                </div>
                <div>
                  <Input
                    id="confirmPassword"
                    type="password"
                    label=" Confirm Your Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 :hover:bg-primary-700 focus:ring-primary-800"
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
