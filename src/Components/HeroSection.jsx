import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 hidden md:block">
        <img
          src="https://astroship.web3templates.com/_astro/hero.6fdd0dc6_Z2mbqjy.webp"
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
            Download for Free
          </Link>
          <Link
            to="/"
            className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black  flex gap-1 items-center justify-center"
          >
            GitHub Repo
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
