import { NavLink } from "react-router";

const NavbarLargeDevice = () => {
  return (
    <nav className="flex flex-row items-center justify-between gap-8">
      <NavLink to="/" className="text-lg text-foreground hover:text-blue-500 cursor-pointer">Home</NavLink>
      <NavLink to="/all-products" className="text-lg text-foreground hover:text-blue-500 cursor-pointer">All Products</NavLink>
      <NavLink to="/about-us" className="text-lg text-foreground hover:text-blue-500 cursor-pointer">About Us</NavLink>
      <NavLink to="/" className="text-lg text-foreground hover:text-blue-500 cursor-pointer">Contact</NavLink>
    </nav>
  );
};

export default NavbarLargeDevice;
