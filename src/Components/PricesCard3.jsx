const PricesCard3 = () => {
  return (
    <>
      <div>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-lg font-medium text-gray-400 dark:text-gray-400 text-center">
            Enterprise
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white justify-center">
            <span className="ms-1 text-4xl md:text-4xl font-bold text-black  dark:text-gray-400">
              Custom
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
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
                All Pro Features
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
                Unlimited Custom domains
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
                99.99% Uptime SLA
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
                SAML & SSO Integration
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
                Dedicated Account Manager
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
                24/7 Phone Support
              </span>
            </li>
          </ul>
          <button
            type="button"
            className=" border-2 border-black hover:bg-gray-200 focus:ring-4 font-medium rounded-md text-md px-5 py-3 inline-flex justify-center w-full text-center"
          >
            Choose Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default PricesCard3;
