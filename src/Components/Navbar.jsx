import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((pre) => !pre);
  };

  return (
    <>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <Link
            to="/"
            className="flex items-center  rtl:space-x-reverse text-lg"
          >
            <Link
              to="/"
              className="self-center  font-bold whitespace-nowrap text-gray-800"
            >
              Astro
            </Link>
            <span className="text-gray-500">ship</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/" className="hidden lg:flex px-4 py-2">
              Log in
            </Link>
            <button
              type="button"
              className="text-white hidden lg:flex bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center  dark:hover:bg-blue-700 "
            >
              Sign up
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  ">
              <li className="relative">
                <menu aria-expanded="false">
                  <button
                    className="flex items-center text-gray-500 hover:text-gray-900 gap-x-1 w-full lg:w-auto p-y-2 lg:p-x-3"
                    onClick={handleOpen}
                  >
                    <span>Features</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-3 h-3 mt-0.5 group-open:rotate-180"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>{" "}
                    </svg>
                  </button>
                  {open && (
                    <div aria-expanded="false">
                      <div className="lg:absolute w-full lg:w-40 z-10 lg:left-0 origin-top-left">
                        <div className="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
                          <a
                            href="#"
                            className="py-1 text-gray-500 hover:text-gray-900"
                          >
                            Action
                          </a>
                          <a
                            href="#"
                            className="py-1 text-gray-500 hover:text-gray-900"
                          >
                            Another action
                          </a>
                          <a
                            href="#"
                            className="py-1 text-gray-500 hover:text-gray-900"
                          >
                            Submenu
                          </a>
                          <a
                            href="#"
                            className="py-1 text-gray-500 hover:text-gray-900"
                          >
                            404 Page
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </menu>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-2 px-3 text-gray-500   rounded md:bg-transparent  md:p-0 hover:text-gray-900 "
                  aria-current="page"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 px-3 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pro Version
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
