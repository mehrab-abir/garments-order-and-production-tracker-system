import sampleImg from "../assets/product_img/product_img_1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="rounded-xl border border-gray-400 overflow-auto cursor-pointer bg-surface">
      <div className="overflow-hidden relative">
        <img
          src={sampleImg}
          alt=""
          className="object-cover w-full hover:scale-105 transition-all duration-300 h-52"
        />
        <span className="absolute top-4 left-2 bg-surface rounded-xl px-2 shadow-md">
          Category
        </span>
      </div>

      <div className="p-4 mt-4">
        <h3 className="text-lg font-bold text-forground">
          Classic Oxford Dress Shirt
        </h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl text-accent font-bold">$48.99</span>
          <span className="text-sm text-gray-500">2,400 pcs available</span>
        </div>
        <button className="btn btn-md btn-primary w-full text-white shadow-none outline-none rounded-xl">
          <span>View Details</span>
          <span>
            <FaArrowRightLong className="text-lg mt-1 ml-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
