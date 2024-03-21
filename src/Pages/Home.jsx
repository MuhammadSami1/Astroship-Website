import { Link } from "react-router-dom";
import Svg from "../Components/Svg";
import FeatureCard from "../Components/FeatureCard";

const Home = () => {
  return (
    <div className="px-5 max-w-screen-xl mx-auto">
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
            <wbr /> Built with Astro.build and TailwindCSS. You can quickly
            create any website with this starter.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/"
              className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800  border-2 border-transparent flex gap-1 items-center justify-center"
            >
              Download for Free
            </a>
            <a
              href="/"
              className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black  flex gap-1 items-center justify-center"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </main>

      <div className="mt-16 md:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Everything you need to start a website
        </h2>
        <p className="text-lg mt-4 text-slate-600">
          Astro comes batteries included. It takes the best parts of
          state-of-the-art tools and adds its own innovations.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>

      <div className="mt-24">
        <h2 className="text-center text-gray-500">
          Works with your technologies
        </h2>
        <div className="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
          <Svg />
          <Svg />
          <Svg />
          <Svg />
          <Svg />
          <Svg />
        </div>
      </div>

      <div className="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
        <h2 className="text-white text-4xl md:text-6xl tracking-tight">
          Build faster website{" "}
        </h2>
        <p className="text-gray-400 text-lg mt-4 md:text-lg">
          Pull content from anywhere and serve it fast with Astro next-gen
          island architecture.
        </p>
        <div className="flex mt-5">
          <Link
            to="/"
            className="rounded text-center border-2 border-transparent text-black bg-white py-2.5 px-5"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
