import { Link } from "react-router-dom";

const PromotionalSection = () => {
  return (
    <div className="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-4xl md:text-6xl tracking-tight">
        Build faster website{" "}
      </h2>
      <p className="text-gray-400 text-lg mt-4 md:text-lg">
        Pull content from anywhere and serve it fast with Astro next-gen island
        architecture.
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
  );
};

export default PromotionalSection;
