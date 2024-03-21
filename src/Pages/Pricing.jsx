const Pricing = () => {
  return (
    <>
      <div className="max-w-full-xl px-5">
        <div className="mt-16 text-center ">
          <h1 className="text-4xl font-bold lg:text-5xl lg:tracking-tight">
            Pricing
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            Simple & Predictable pricing. No Surprises.
          </p>
        </div>
        <div className="grid md:grid-cols-3  gap-10 mx-auto max-w-screen-lg mt-12 ">
          <div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-4 text-lg font-medium text-gray-400 dark:text-gray-400 text-center">
                Personal
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white justify-center">
                <span className="ms-1 text-4xl md:text-4xl font-bold text-black  dark:text-gray-400">
                  Free
                </span>
              </div>

              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    2 team members
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    20GB Cloud storage
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Integration help
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Sketch Files
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    API Access
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Complete documentation
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    24×7 phone & email support
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className=" border-2 border-gray-950 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-200    font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Get Started
              </button>
            </div>
          </div>
          <div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-4 text-lg font-medium text-gray-400 dark:text-gray-400 text-center">
                Startup
              </h5>
              <div className="flex items-baseline text-black dark:text-white justify-center">
                <span className="text-4xl font-bold md:text-4xl tracking-tight">
                  $49
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    2 team members
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    20GB Cloud storage
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Integration help
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Sketch Files
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    API Access
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Complete documentation
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    24×7 phone & email support
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="text-white bg-black hover:bg-gray-400 focus:ring-4 focus:outline-none    font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose Get Started
              </button>
            </div>
          </div>
          <div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-4 text-lg font-medium text-gray-400 dark:text-gray-400 text-center">
                Enterprise
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white justify-center">
                <span className="ms-1 text-4xl md:text-4xl font-bold text-black  dark:text-gray-400">
                  Custom
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    2 team members
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    20GB Cloud storage
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Integration help
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Sketch Files
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    API Access
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    Complete documentation
                  </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    24×7 phone & email support
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className=" border-2 border-black hover:bg-gray-200 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
