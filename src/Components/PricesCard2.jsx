const PricesCard2 = () => {
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
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
              className="flex-shrink-0 w-6 h-6 text-black dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              All Free Features
            </span>
          </li>
          <li className="flex">
            <svg
              className="flex-shrink-0 w-6 h-6 text-black dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Up to 20 users
            </span>
          </li>
          <li className="flex">
            <svg
              className="flex-shrink-0 w-6 h-6 text-black dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              20 Custom domains
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Unlimited Collaborators
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Advanced Integrations
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Priority Support
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="hover:bg-gray-800 focus:ring-4 focus:outline-none text-white bg-black focus:ring-blue-200 font-medium rounded-md text-md px-5 py-3 inline-flex justify-center w-full text-center"
        >
          Choose Get Started
        </button>
      </div>
    </>
  );
};

export default PricesCard2;
