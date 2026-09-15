import Container from "../../Components/Container";
import { IoTrendingUpSharp } from "react-icons/io5";
import { FaPeopleLine } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import factoryImg from "../../assets/factory_img.jpg";

const WhyThreadTrack = () => {
  return (
    <div className="bg-contrast py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-4">
          <div>
            <p className="text-amber">WHY THREADTRACK?</p>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
              Built for the Garment Industry,
              <br />
              Not Generic Software
            </h1>
            <p className="my-6 text-muted text-sm w-full md:w-1/2">
              Most ERP systems are built for generic manufacturing. ThreadTrack
              is designed from the ground up for garment production — with
              workflows that match how your factory actually operates.
            </p>

            <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="bg-[#fea72d43] p-2 w-fit rounded-lg">
                  <IoTrendingUpSharp className="text-xl text-amber" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold text-lg">
                    Real Time Tracking
                  </h4>
                  <p className="text-sm text-muted">
                    Live production stage updates visible to buyers and managers
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#fea72d43] p-2 w-fit rounded-lg">
                  <FaPeopleLine className="text-xl text-amber" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold text-lg">
                    Multi-Buyer Portal
                  </h4>
                  <p className="text-sm text-muted">
                    Each buyer sees only their own orders and history
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#fea72d43] p-2 w-fit rounded-lg">
                  <LuShieldCheck className="text-xl text-amber" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold text-lg">
                    Role-Based Access
                  </h4>
                  <p className="text-sm text-muted">
                    Admin, Manager, and Buyer roles with granular permissions
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#fea72d43] p-2 w-fit rounded-lg">
                  <AiOutlineThunderbolt className="text-xl text-amber" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold text-lg">
                    Instant Notification
                  </h4>
                  <p className="text-sm text-muted">
                    Automatic status alerts at every production milestone
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={factoryImg} className="w-full" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyThreadTrack;