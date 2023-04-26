import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex bg-[#0069a3]  shadow dark:bg-[#0069a3] ">
      <div className="w-full max-w-screen-xl h-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="./" className="flex items-center mb-4 sm:mb-0">
            <img
              src="./src/components/assets/short_logo.png"
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              UAM HelloDev!
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-white sm:mb-0">
            <li>
              <a
                href="/"
                className="mr-4 hover:underline hover:text-amber-400 md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="mr-4 hover:underline hover:text-amber-400 md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="mr-4 hover:underline hover:text-amber-400 md:mr-6 "
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-amber-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />
        <span className="block text-sm text-white sm:text-center mt-8">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
