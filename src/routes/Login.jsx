import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";

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
            <div className="w-full rounded-lg shadow sm:max-w-md bg-slate-900 border-gray-700 bg-opacity-70">
              <div className="p-8 space-y-4">
                <h1 className="grid place-items-center text-3xl font-bold text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <Input
                    label="Your email"
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    style=""
                  />
                  <Input
                    label="Your password"
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    style=""
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4 rounded bg-gray-700 border-gray-600 focus:bg-amber-400 focus:border-amber-400 focus:ring-amber-300"
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
                      className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
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
