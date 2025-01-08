import Details from "../Components/Details";

const Contact = () => {
  return (
    <>
      <div className="px-5 max-w-screen-xl mx-auto">
        <div className="text-center mt-16">
          <h1 className="text-4xl lg:text-5xl lg:tracking-tight font-bold">
            Contact
          </h1>
          <p className="mt-4 text-lg text-slate-600">We are here to help</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 mx-auto mt-16 max-w-4xl">
          <div>
            <h2 className="font-medium text-2xl text-gray-800">
              Contact Astroship
            </h2>
            <p className="text-lg mt-3 text-slate-400 font-medium leading-relaxed">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>

            <Details />
          </div>
          <div>
            {/* Form  */}
            <form className="max-w-sm mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  id="text"
                  className="bg-gray-50 border-2 border-gray-300 text-black text-md rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border-2 border-gray-300 text-black text-md rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center ">
                  <textarea
                    id="message"
                    rows="3"
                    className="block px-4 py-3 w-96 text-md text-black bg-gray-50 rounded-lg border-2 border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  h-36 "
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="text-white  font-medium rounded-md text-md w-full  px-6 py-4 bg-black text-center "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
