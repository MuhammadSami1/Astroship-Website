const FeatureCard = ({ title, description, svg }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0">
        {svg}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-slate-500 mt-2 leading-relaxed"> {description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
