import Container from "../../Components/Container";
import { Link } from "react-router";
import ProductCard from "../../Components/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturedProducts = () => {
  return (
    <div className="pb-10">
      <Container>
        <h4 className="text-sm lg:text-lg text-accent">Factory Catalog</h4>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-foreground">
            Featured Products
          </h1>
          <Link to="/" className="flex items-center gap-4 hover:text-accent">
            <span className="text-sm lg:text-base">View All</span> <FaArrowRightLong />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 1, 1, 1, 1, 1].map((product, index) => {
            return <ProductCard key={index} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
