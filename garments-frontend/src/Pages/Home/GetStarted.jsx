import { IoIosArrowRoundForward } from "react-icons/io";

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-background py-20 space-y-4">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground w-full md:w-1/2">
        Ready to Modernize Your Factory?
      </h1>
      <p className="text-muted text-sm w-10/12 md:w-1/2 lg:w-1/3">
        Join hundreds of garment factories already using ThreadTrack to improve
        delivery times and buyer satisfaction.
      </p>
      <div className="flex gap-4 mt-4">
        <button className="btn btn-sm md:btn-md btn-primary border-none shadow-none outline-none text-white">
          Get Started Free <IoIosArrowRoundForward className="text-2xl mt-1" />
        </button>
        <button className="btn btn-sm md:btn-md border-neutral-content bg-transparent">Contact Sales</button>
      </div>
    </div>
  );
};

export default GetStarted;
