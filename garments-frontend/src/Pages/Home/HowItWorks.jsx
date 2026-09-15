import Container from "../../Components/Container";
import { LuPackage } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FiScissors } from "react-icons/fi";
import { GiLoincloth } from "react-icons/gi";

const HowItWorks = () => {
  return (
    <div className="bg-background py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-amber">OUR PROCESS</p>
        <h4 className="text-4xl font-bold text-foreground">How It Works</h4>
        <p className="text-sm text-muted w-10/12 md:w-8/12 lg:w-1/2 mt-2">
          Four clear steps take your order from placement to your warehouse
          door, with real-time visibility throughout.
        </p>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="p-6 bg-surface rounded-md">
            <span className="bg-surface-soft">
              <LuPackage className="text-2xl text-accent rounded-md" />
            </span>
            <h4 className="text-lg font-bold text-foreground my-3">
              Place Your Order
            </h4>
            <p className="text-sm text-muted">
              Buyers browse the catalog, select products, specify quantity, and
              submit their order through the portal.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-md">
            <span className="bg-surface-soft">
              <IoCheckmarkCircleOutline className="text-2xl text-accent rounded-md" />
            </span>
            <h4 className="text-lg font-bold text-foreground my-3">
              Manager Reviews
            </h4>
            <p className="text-sm text-muted">
              Our factory manager reviews and approves orders, checking stock
              levels and production capacity.cts, specify quantity, and submit
              their order through the portal.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-md">
            <span className="bg-surface-soft">
              <FiScissors className="text-2xl text-accent rounded-md" />
            </span>
            <h4 className="text-lg font-bold text-foreground my-3">
              Production Begins
            </h4>
            <p className="text-sm text-muted">
              Approved orders enter the production pipeline — cutting, sewing,
              and finishing stages are tracked live.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-md">
            <span className="bg-surface-soft">
              <GiLoincloth className="text-2xl text-accent rounded-md" />
            </span>
            <h4 className="text-lg font-bold text-foreground my-3">
              QC & Dispatch
            </h4>
            <p className="text-sm text-muted">
              Every batch passes quality inspection before being packed and
              shipped to your delivery address.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;