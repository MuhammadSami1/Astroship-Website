import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 hidden md:block">
        <img
          src="https://astroship.web3templates.com/_astro/hero.DlKDY3ml_Z1VhsC8.webp"
          width="520"
          height="424"
        />
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Marketing website done with Astro
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Astroship is a starter template for startups, marketing websites &
          landing pages.
          <wbr /> Built with Astro.build and TailwindCSS. You can quickly create
          any website with this starter.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800  border-2 border-transparent flex gap-1 items-center justify-center"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-white w-5 h-5"
              data-icon="bx:bxs-cloud-download"
            >
              {" "}
              <symbol id="ai:bx:bxs-cloud-download">
                <path
                  d="M18.944 11.112C18.507 7.67 15.56 5 12 5C9.244 5 6.85 6.61 5.757 9.149C3.609 9.792 2 11.82 2 14c0 2.657 2.089 4.815 4.708 4.971V19H17.99v-.003L18 19c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888zM8 12h3V9h2v3h3l-4 5l-4-5z"
                  fill="currentColor"
                ></path>
              </symbol>
              <use xlinkHref="#ai:bx:bxs-cloud-download"></use>{" "}
            </svg>
            Download for Free
          </Link>
          <Link
            to="/"
            className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black  flex gap-1 items-center justify-center"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-black w-4 h-4"
              data-icon="bx:bxl-github"
            >
              {" "}
              <symbol id="ai:bx:bxl-github">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                  fill="currentColor"
                ></path>
              </symbol>
              <use xlinkHref="#ai:bx:bxl-github"></use>{" "}
            </svg>
            GitHub Repo
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
