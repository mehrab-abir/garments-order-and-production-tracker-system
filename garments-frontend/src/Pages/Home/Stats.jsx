const Stats = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col space-y-3 md:flex-row justify-between items-center my-10">
      <div className="flex flex-col text-center">
        <h1 className="text-accent text-2xl md:text-3xl lg:text-4xl font-bold">340+</h1>
        <span>Active Buyers</span>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-accent text-2xl md:text-3xl lg:text-4xl font-bold">1.2M</h1>
        <span>Pieces Delivered</span>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-accent text-2xl md:text-3xl lg:text-4xl font-bold">98%</h1>
        <span>On-time Delivery</span>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-accent text-2xl md:text-3xl lg:text-4xl font-bold">24H</h1>
        <span>Average Response Time</span>
      </div>
    </div>
  );
};

export default Stats;
