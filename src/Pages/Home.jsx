import FeatureCard from "../Components/FeatureCard";
import HeroSection from "../Components/HeroSection";
import PromotionalSection from "../Components/PromotionalSection";

const Home = () => {
  const svg1 = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="text-white"
      data-icon="bx:bxs-briefcase"
    >
      {" "}
      <symbol id="ai:bx:bxs-briefcase">
        <path
          d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"
          fill="currentColor"
        ></path>
      </symbol>
      <use xlinkHref="#ai:bx:bxs-briefcase"></use>{" "}
    </svg>
  );
  const svg2 = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="text-white"
      data-icon="bx:bxs-window-alt"
    >
      {" "}
      <symbol id="ai:bx:bxs-window-alt">
        <path
          d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-3 3h2v2h-2V6zm-3 0h2v2h-2V6zM4 19v-9h16.001l.001 9H4z"
          fill="currentColor"
        ></path>
      </symbol>
      <use xlinkHref="#ai:bx:bxs-window-alt"></use>{" "}
    </svg>
  );
  const svg3 = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="text-white"
      data-icon="bx:bxs-data"
    >
      {" "}
      <symbol id="ai:bx:bxs-data">
        <path
          d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"
          fill="currentColor"
        ></path>
        <path
          d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"
          fill="currentColor"
        ></path>
      </symbol>
      <use xlinkHref="#ai:bx:bxs-data"></use>{" "}
    </svg>
  );
  const svg4 = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="text-white"
      data-icon="bx:bxs-bot"
    >
      {" "}
      <symbol id="ai:bx:bxs-bot">
        <path
          d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2z"
          fill="currentColor"
        ></path>
      </symbol>
      <use xlinkHref="#ai:bx:bxs-bot"></use>{" "}
    </svg>
  );
  const svg5 = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="text-white"
      data-icon="bx:bxs-window-alt"
    >
      {" "}
      <symbol id="ai:bx:bxs-window-alt">
        <path
          d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-3 3h2v2h-2V6zm-3 0h2v2h-2V6zM4 19v-9h16.001l.001 9H4z"
          fill="currentColor"
        ></path>
      </symbol>
      <use xlinkHref="#ai:bx:bxs-window-alt"></use>{" "}
    </svg>
  );
  const svg6 = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="text-white"
      data-icon="bx:bxs-user"
    >
      {" "}
      <symbol id="ai:bx:bxs-user">
        <path
          d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
          fill="currentColor"
        ></path>
      </symbol>
      <use xlinkHref="#ai:bx:bxs-user"></use>{" "}
    </svg>
  );
  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <HeroSection />
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
        <FeatureCard
          title={"Bring Your Own Framework"}
          description={
            "Build your site using React, Svelte, Vue, Preact, web components, or just plain HTML + JavaScript."
          }
          svg={svg1}
        />
        <FeatureCard
          title={"100% Static HTML, No JS"}
          description={
            "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default."
          }
          svg={svg2}
        />
        <FeatureCard
          title={"On-Demand Components"}
          description={
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page."
          }
          svg={svg3}
        />
        <FeatureCard
          title={"Broad Integration"}
          description={
            "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages."
          }
          svg={svg4}
        />
        <FeatureCard
          title={"SEO Enabled"}
          description={
            "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!"
          }
          svg={svg5}
        />
        <FeatureCard
          title={"Community"}
          description={
            "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions."
          }
          svg={svg6}
        />
      </div>

      <div className="mt-24">
        <h2 className="text-center text-gray-500">
          Works with your technologies
        </h2>
        <div className="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="size-8 md:size-12"
            data-icon="simple-icons:react"
          >
            {" "}
            <symbol id="ai:simple-icons:react">
              <path
                fill="currentColor"
                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565"
              ></path>
            </symbol>
            <use xlinkHref="#ai:simple-icons:react"></use>{" "}
          </svg>

          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="size-8 md:size-12"
            data-icon="simple-icons:svelte"
          >
            {" "}
            <symbol id="ai:simple-icons:svelte">
              <path
                fill="currentColor"
                d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767a4.1 4.1 0 0 1-.703-3.107a4 4 0 0 1 .134-.522l.105-.321l.287.21a7.2 7.2 0 0 0 2.186 1.092l.208.063l-.02.208a1.25 1.25 0 0 0 .226.83a1.34 1.34 0 0 0 1.435.533a1.2 1.2 0 0 0 .343-.15l5.59-3.562a1.16 1.16 0 0 0 .524-.778a1.24 1.24 0 0 0-.211-.937a1.34 1.34 0 0 0-1.435-.533a1.2 1.2 0 0 0-.343.15l-2.133 1.36a4 4 0 0 1-1.135.499a4.44 4.44 0 0 1-4.765-1.766a4.1 4.1 0 0 1-.702-3.108a3.86 3.86 0 0 1 1.742-2.582l5.589-3.563a4 4 0 0 1 1.135-.499a4.44 4.44 0 0 1 4.765 1.767a4.1 4.1 0 0 1 .703 3.107a4 4 0 0 1-.134.522l-.105.321l-.286-.21a7.2 7.2 0 0 0-2.187-1.093l-.208-.063l.02-.207a1.25 1.25 0 0 0-.226-.831a1.34 1.34 0 0 0-1.435-.532a1.2 1.2 0 0 0-.343.15L8.62 9.368a1.16 1.16 0 0 0-.524.778a1.24 1.24 0 0 0 .211.937a1.34 1.34 0 0 0 1.435.533a1.2 1.2 0 0 0 .344-.151l2.132-1.36a4 4 0 0 1 1.135-.498a4.44 4.44 0 0 1 4.765 1.766a4.1 4.1 0 0 1 .702 3.108a3.86 3.86 0 0 1-1.742 2.583l-5.589 3.562a4 4 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.4 6.4 0 0 0-2.896 4.295a6.75 6.75 0 0 0 .666 4.336a6.4 6.4 0 0 0-.96 2.396a6.83 6.83 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.4 6.4 0 0 0 2.896-4.295a6.76 6.76 0 0 0-.665-4.336a6.4 6.4 0 0 0 .958-2.396a6.83 6.83 0 0 0-1.167-5.168"
              ></path>
            </symbol>
            <use xlinkHref="#ai:simple-icons:svelte"></use>{" "}
          </svg>

          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="size-8 md:size-12"
            data-icon="simple-icons:astro"
          >
            {" "}
            <symbol id="ai:simple-icons:astro">
              <path
                fill="currentColor"
                d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944c.856 1.026 2.043 1.352 3.272 1.535c1.897.283 3.76.177 5.522-.678c.202-.098.388-.229.608-.36c.166.473.209.95.151 1.437c-.14 1.185-.738 2.1-1.688 2.794c-.38.277-.782.525-1.175.787c-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.16 3.16 0 0 1-1.407-1.188a3.3 3.3 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958c-.106-.769-.472-1.113-1.161-1.133c-.707-.02-1.267.411-1.415 1.09c-.012.053-.028.104-.045.165zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614s.57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727z"
              ></path>
            </symbol>
            <use xlinkHref="#ai:simple-icons:astro"></use>{" "}
          </svg>

          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="size-8 md:size-16"
            data-icon="simple-icons:tailwindcss"
          >
            {" "}
            <symbol id="ai:simple-icons:tailwindcss">
              <path
                fill="currentColor"
                d="M12.001 4.8q-4.8 0-6 4.8q1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12q4.8 0 6-4.8q-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8m-6 7.2q-4.8 0-6 4.8q1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576q4.8 0 6-4.8q-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12"
              ></path>
            </symbol>
            <use xlinkHref="#ai:simple-icons:tailwindcss"></use>{" "}
          </svg>

          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="size-8 md:size-16"
            data-icon="simple-icons:alpinedotjs"
          >
            {" "}
            <symbol id="ai:simple-icons:alpinedotjs">
              <path
                fill="currentColor"
                d="m24 12l-5.72 5.746l-5.724-5.741l5.724-5.75zM5.72 6.254L0 12l5.72 5.746h11.44z"
              ></path>
            </symbol>
            <use xlinkHref="#ai:simple-icons:alpinedotjs"></use>{" "}
          </svg>

          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="size-8 md:size-12"
            data-icon="simple-icons:vercel"
          >
            {" "}
            <symbol id="ai:simple-icons:vercel">
              <path fill="currentColor" d="M24 22.525H0l12-21.05z"></path>
            </symbol>
            <use xlinkHref="#ai:simple-icons:vercel"></use>{" "}
          </svg>
        </div>
      </div>

      <PromotionalSection />
    </div>
  );
};

export default Home;
