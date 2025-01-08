const Details = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-x-1 text-slate-600 mt-2">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="text-gray-400 w-4 h-4"
          data-icon="uil:map-marker"
        >
          {" "}
          <symbol id="ai:uil:map-marker">
            <path
              fill="currentColor"
              d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8m0 17.65c-2.13-2-6-6.31-6-9.65a6 6 0 0 1 12 0c0 3.34-3.87 7.66-6 9.65M12 6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
            ></path>
          </symbol>
          <use xlinkHref="#ai:uil:map-marker"></use>{" "}
        </svg>{" "}
        <span>1734 Sanfransico, CA 93063</span>
      </div>
      <div className="flex items-center gap-x-1 text-slate-600 mt-2">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="text-gray-400 w-4 h-4"
          data-icon="uil:envelope"
        >
          {" "}
          <symbol id="ai:uil:envelope">
            <path
              fill="currentColor"
              d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z"
            ></path>
          </symbol>
          <use xlinkHref="#ai:uil:envelope"></use>{" "}
        </svg>
        <span>hello@astroshipstarter.com</span>
      </div>
      <div className="flex items-center gap-x-1 text-slate-600 mt-2">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="text-gray-400 w-4 h-4"
          data-icon="uil:phone"
        >
          {" "}
          <symbol id="ai:uil:phone">
            <path
              fill="currentColor"
              d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"
            ></path>
          </symbol>
          <use xlinkHref="#ai:uil:phone"></use>{" "}
        </svg>
        <span>+1 (987) 4587 899</span>
      </div>
    </div>
  );
};

export default Details;
