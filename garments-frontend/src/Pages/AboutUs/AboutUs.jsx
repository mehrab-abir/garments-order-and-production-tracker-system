import { MdFactory } from "react-icons/md";
import { GrGlobe } from "react-icons/gr";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import missionImg from "../../assets/our_mission_img.jpg";
import emp1 from "../../assets/team_members/brayan.PNG";
import emp2 from "../../assets/team_members/mallory.PNG";
import emp3 from "../../assets/team_members/brook.PNG";
import emp4 from "../../assets/team_members/raisa.PNG";
import { GoArrowRight } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className="w-11/12 md:w-8/12 py-36 mx-auto">
      <div className="flex flex-col space-y-3 items-center text-center">
        <span className="text-amber font-semibold">ABOUT THREADTRACK</span>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground">
          Built by people who know garment factories.
        </h1>
        <p className="text-muted w-11/12 md:w-10/12 lg:8/12 mt-4">
          ThreadTrack was founded in 2022 by a team with combined experience in
          garment manufacturing, supply chain logistics, and enterprise
          software. We saw how factories were managing complex production
          workflows on spreadsheets and WhatsApp — and knew there had to be a
          better way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <div className="bg-surface p-6 rounded-md border border-gray-300 flex flex-col space-y-3 items-center lg:items-start text-center lg:text-left">
          <MdFactory className="text-2xl text-accent" />
          <h3 className="text-2xl font-extrabold">340+</h3>
          <p className="text-muted">Active Factories</p>
        </div>
        <div className="bg-surface p-6 rounded-md border border-gray-300 flex flex-col space-y-3 items-center lg:items-start text-center lg:text-left">
          <GrGlobe className="text-2xl text-accent" />
          <h3 className="text-2xl font-extrabold">28</h3>
          <p className="text-muted">Active Factories</p>
        </div>
        <div className="bg-surface p-6 rounded-md border border-gray-300 flex flex-col space-y-3 items-center lg:items-start text-center lg:text-left">
          <MdOutlinePlaylistAddCheckCircle className="text-2xl text-accent" />
          <h3 className="text-2xl font-extrabold">120k+</h3>
          <p className="text-muted">Orders Tracked</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground">
            Our Mission
          </h1>
          <p className="text-muted mt-3">
            We believe every garment factory deserves enterprise-grade
            operations software — not just the giant players. ThreadTrack
            democratizes production visibility for small and medium
            manufacturers, giving them the tools to compete on quality,
            reliability, and transparency.
            <br />
            Our platform is designed around real factory workflows: multiple
            production stages, multi-buyer portals, inventory management, and
            last-mile delivery tracking. No bloated ERP modules, no six-month
            implementation — just a clean, focused tool that works.
          </p>
        </div>
        <div>
          <img src={missionImg} className="w-full" alt="" />
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground text-center">
          Our Team
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="bg-surface p-6 border border-gray-300 rounded-md flex flex-col items-center text-center">
            <img src={emp1} className="w-20 rounded-full" alt="" />
            <h4 className="text-lg font-bold">Brayan Stark</h4>
            <span className="text-muted">Founder & CEO</span>
          </div>
          <div className="bg-surface p-6 border border-gray-300 rounded-md flex flex-col items-center text-center">
            <img src={emp2} className="w-20 rounded-full" alt="" />
            <h4 className="text-lg font-bold">Raisa Olivia</h4>
            <span className="text-muted">Head of Operations</span>
          </div>
          <div className="bg-surface p-6 border border-gray-300 rounded-md flex flex-col items-center text-center">
            <img src={emp4} className="w-20 rounded-full" alt="" />
            <h4 className="text-lg font-bold">Mallory Monroe</h4>
            <span className="text-muted">Product Manager</span>
          </div>
          <div className="bg-surface p-6 border border-gray-300 rounded-md flex flex-col items-center text-center">
            <img src={emp3} className="w-20 rounded-full" alt="" />
            <h4 className="text-lg font-bold">Brook Renly</h4>
            <span className="text-muted">Lead Developer</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-sm md:btn-md btn-primary text-white">Get In Touch <GoArrowRight className="mt-1 text-xl" /></button>
      </div>
    </div>
  );
};

export default AboutUs;
