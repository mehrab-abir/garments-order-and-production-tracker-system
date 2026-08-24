import { BsLightningCharge } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="bg-[url('/hero-bg.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center relative pt-36">
      <div className="absolute inset-0 bg-linear-to-r from-[#25226e]/80 to-[#25226e]/50 z-0"></div>

      {/* banner content */}
      <div className="flex flex-col items-left w-1/2 mx-auto z-10 relative mt-10">
        <span className="bg-transparent border border-amber-500 text-amber-500 w-fit rounded-full px-4 flex items-center gap-2 font-semibold">
          <BsLightningCharge /> <span>PRODUCTION TRACKER</span>
        </span>
        <h1 className="text-white text-6xl font-bold my-4">
          From Cut to <span className="text-amber-600">Delivery.</span><br />
          Tracked.
        </h1>
        <p className="text-gray-300 text-lg my-5">
          ThreadTrack gives garment factories complete visibility over every
          order — from buyer placement through production stages to final
          dispatch.
        </p>
        <div className="flex flex-row gap-6 items-center">
          <button className="bg-primary text-white btn btn-md border-none shadow-none">
            Browse Products
          </button>
          <button className="btn btn-md bg-transparent shadow-none text-white border border-white">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
