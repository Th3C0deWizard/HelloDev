import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <div
        class="flex justify-center h-screen"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <div className="flex flex-col place-items-center justify-center pb-10">
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
            <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-slate-900 border-gray-700 bg-opacity-70">
              <div className="p-6 space-y-4 md:space-y-5 sm:p-8">
                <h1 className="grid place-items-center text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4 rounded bg-gray-700 border-gray-600 focus:amber-400 ring-offset-gray-800"
                        required
                      />
                      <label
                        for="remember"
                        className="ml-3 text-sm text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium hover:underline text-amber-400"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Link to="/AuthorMenu">
                    <button
                      type="submit"
                      className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 :hover:bg-primary-700 focus:ring-primary-800"
                    >
                      Login into your account
                    </button>
                  </Link>

                  <p className="grid place-items-center text-sm font-light text-amber-300">
                    Don’t have an account yet?{" "}
                    <a
                      href="/register"
                      className="font-medium text-amber-400 hover:underline"
                    >
                      {" "}
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
