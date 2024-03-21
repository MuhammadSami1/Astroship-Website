import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="px-5 max-w-screen-xl mx-auto">
        <div className="text-center mt-16">
          <h1 className="text-4xl lg:text-5xl lg:tracking-tight font-bold">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We write about building startups and thoughts going on our mind.
          </p>
        </div>
        <main className="mt-16">
          <ul className="grid gap-16 max-w-4xl mx-auto">
            <li>
              <Link to="/blog">
                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240"
                    alt=""
                    className="rounded-md object-center object-cover bg-white w-full"
                    width="800"
                    height="600"
                  />
                  <div>
                    <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      Course
                    </span>
                    <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1">
                      {" "}
                      Introduction to the Essential Data Structures & Algorithms{" "}
                    </h2>
                    <div className="flex gap-2 mt-3">
                      <span className="text-gray-400"> Marcell Ziemann </span>
                      <span className="text-gray-400">• </span>
                      <time
                        className="text-gray-400"
                        dateTime="2022-11-09T16:39:00.000Z"
                      >
                        {" "}
                        Wed Nov 09 2022
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240"
                    alt=""
                    className="rounded-md object-center object-cover bg-white w-full"
                    width="800"
                    height="600"
                  />
                  <div>
                    <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      TUTORIALS
                    </span>
                    <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1">
                      {" "}
                      The Complete Guide to Full Stack Web Development{" "}
                    </h2>
                    <div className="flex gap-2 mt-3">
                      <span className="text-gray-400"> Janette Lynch </span>
                      <span className="text-gray-400">• </span>
                      <time
                        className="text-gray-400"
                        dateTime="2022-11-09T16:39:00.000Z"
                      >
                        {" "}
                        Tue Nov 08 2022
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?&fit=crop&w=430&h=240"
                    alt=""
                    className="rounded-md object-center object-cover bg-white w-full"
                    width="800"
                    height="600"
                  />
                  <div>
                    <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      TUTORIALS
                    </span>
                    <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1">
                      {" "}
                      How to become a Frontend Master{" "}
                    </h2>
                    <div className="flex gap-2 mt-3">
                      <span className="text-gray-400"> Connor Lopez </span>
                      <span className="text-gray-400">• </span>
                      <time
                        className="text-gray-400"
                        dateTime="2022-11-09T16:39:00.000Z"
                      >
                        {" "}
                        Mon Nov 07 2022
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?&fit=crop&w=430&h=240"
                    alt=""
                    className="rounded-md object-center object-cover bg-white w-full"
                    width="800"
                    height="600"
                  />
                  <div>
                    <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      TECHNOLOGY
                    </span>
                    <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1">
                      {" "}
                      Typography Example Post{" "}
                    </h2>
                    <div className="flex gap-2 mt-3">
                      <span className="text-gray-400">Charles North </span>
                      <span className="text-gray-400">• </span>
                      <time
                        className="text-gray-400"
                        dateTime="2022-11-09T16:39:00.000Z"
                      >
                        {" "}
                        Sat Nov 05 2022
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default Blog;
