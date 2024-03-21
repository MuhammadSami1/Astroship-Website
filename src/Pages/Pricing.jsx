import PricesCard3 from "../Components/PricesCard3";
import PricesCard2 from "../Components/PricesCard2";
import PricesCard1 from "../Components/PricesCard1";
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
          <PricesCard1 />
          <PricesCard2 />
          <PricesCard3 />
        </div>
      </div>
    </>
  );
};

export default Pricing;
