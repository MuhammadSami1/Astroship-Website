const FeatureCard = () => {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0"></div>
      <div>
        <h3 className="font-semibold text-lg">Bring Your Own Framework</h3>
        <p className="text-slate-500 mt-2 leading-relaxed">
          {" "}
          Build your site using React, Svelte, Vue, Preact, web components, or
          just plain HTML + JavaScript.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
