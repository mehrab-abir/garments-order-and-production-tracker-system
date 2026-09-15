import Container from "../Container";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { NavLink } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-footer py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="flex">
              <h1 className="text-xl font-bold bg-amber text-white px-1 rounded-md">
                TT
              </h1>
              <h1 className="text-xl font-bold text-white ml-2">ThreadTrack</h1>
            </div>
            <p className="text-muted text-sm mt-2">
              Streamlining garment production from order to delivery. Built for
              factories that move fast and deliver on time.
            </p>
            <div className="flex gap-4">
              <a href="#">
                <FaFacebookF className="text-2xl text-muted" />
              </a>
              <a href="#">
                <IoLogoInstagram className="text-2xl text-muted" />
              </a>
              <a href="#">
                <FaXTwitter className="text-2xl text-muted" />
              </a>
              <a href="#">
                <SlSocialYoutube className="text-2xl text-muted" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-3 mt-4">
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Home
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                All Products
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                About Us
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Login
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Register
              </NavLink>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Services</h4>
            <div className="flex flex-col space-y-3 mt-4">
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Order Management
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Production Tracking
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Inventory Control
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Quality Assurance
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Delivery Scheduling
              </NavLink>
              <NavLink to="/" className="text-sm text-muted hover:underline">
                Buyer Portal
              </NavLink>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <div className="flex flex-col space-y-4 mt-4">
              <span className="flex items-center gap-2">
                <IoLocationOutline className="text-lg text-amber" />
                <p className="text-sm text-muted">111 King St W, Toronto, ON</p>
              </span>
              <span className="flex items-center gap-2">
                <IoCallOutline className="text-lg text-amber" />
                <p className="text-sm text-muted">+16585200000</p>
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineEmail className="text-lg text-amber" />
                <p className="text-sm text-muted">info@threadtrack.com</p>
              </span>
            </div>
          </div>
        </div>
      </Container>
      <hr className="text-gray-700 mt-6" />
      <div className="mt-4">
        <p className="text-sm text-center text-muted">&copy; {new Date().getFullYear()} Mehrab Jalil Abir. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
