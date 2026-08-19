import { useEffect, useState } from "react";
import Container from "../Container";
import NavbarLargeDevice from "./NavbarLargeDevice";
import { MdOutlineNightsStay } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = () => {
  // theme change
  const [theme, setTheme] = useState(() => {
    localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });

  return (
    <header className="bg-surface py-5 border-b border-gray-400">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-primary text-white px-1 rounded-md">
            TT
          </h1>
          <NavbarLargeDevice></NavbarLargeDevice>

          <div className="flex items-center justify-between gap-4">
            {theme === "dark" ? (
              <CiLight
                className="text-2xl cursor-pointer"
                title="Light Mode"
                onClick={() => setTheme("light")}
              />
            ) : (
              <MdOutlineNightsStay
                className="text-2xl cursor-pointer"
                title="Dark Mode"
                onClick={() => setTheme("dark")}
              />
            )}

            <div className="flex gap-2">
              <button className="btn btn-md border-none outline-none rounded-md text-forground">
                Login
              </button>
              <button className="btn btn-md bg-primary rounded-md border-primary text-white">
                Register
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
