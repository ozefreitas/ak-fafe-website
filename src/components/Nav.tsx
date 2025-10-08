import { NavOptions } from "../constants";
import { useEffect, useState } from "react";
import akfafeLogo from "../assets/images/cropped_circle_image.png";
import TecnicoSubHeaders from "./TecnicoSubHeaders";
import TrainingSubHeaders from "./TrainingSubHeaders";

const Nav = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [isHeaderOpen, setIsHeaderOpen] = useState<boolean>(false);

  useEffect(() => {
    const blur = document.getElementById("blur-effetch");
    const header = document.getElementById("site-header");
    const headerLinks = document.getElementById("header-links");

    const handleScroll = () => {
      if (window.scrollY > 25) {
        blur?.classList.remove("hidden");
        header?.classList.remove("md:py-4", "shadow-lg");
        header?.classList.add("bg-white", "text-white", "mt-5", "shadow-2xl");
      } else {
        blur?.classList.add("hidden");
        header?.classList.add("md:py-4", "shadow-2xl");
        header?.classList.remove("text-white", "mt-5", "shadow-lg");
        if (!isHeaderOpen) {
          header?.classList.remove("bg-white");
        } else {
          header?.classList.add("bg-white");
        }
      }

      if (window.scrollY === 0) {
        header?.classList.remove("shadow-lg");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeaderOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 backdrop-blur-md w-full min-h-25 z-100 transition-all duration-500 ease-in-out overflow-hidden ${
          isHeaderOpen ? "min-h-60" : ""
        }`}
        id="blur-effetch"
      ></div>
      <header
        className={`sm:px-8 xl:px-30 p-2 fixed top-4 z-200 rounded-full left-1/2 -translate-x-1/2 w-[95%] shadow-md transition-all duration-500 ease-in-out overflow-hidden ${
          isHeaderOpen ? "max-h-[550px] py-5" : "max-h-[125px] max-sm:px-4"
        }`}
        id="site-header"
      >
        <nav
          className={`flex items-center h-full justify-between z-100 transition-all duration-500 ${
            isHeaderOpen ? "px-20" : "max-sm:px-4"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-6 hover:scale-112 transition-transform duration-500">
            <a href="/">
              <img
                src={akfafeLogo}
                alt="akfafe-logo"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </a>
            <span className="sm:text-2xl text-xl text-akfafe-red font-semibold">
              AKFafe
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="flex gap-10 max-lg:hidden">
            {NavOptions.map((item, index) => (
              <li
                key={index}
                className="relative text-akfafe-blue hover:text-akfafe-red cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-akfafe-red before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-akfafe-red after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                id="header-links"
              >
                <a
                  href={item.link}
                  className="leading-normal xl:text-xl text-lg font-semibold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsHeaderOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="black"
              className="size-10 text-blue-900 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu (visible when expanded) */}
        <ul
          className={`flex flex-col items-center gap-6 mt-6 transition-all duration-500 ease-in-out lg:hidden ${
            isHeaderOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {NavOptions.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-lg font-semibold text-akfafe-blue hover:text-akfafe-red transition-all"
                onClick={() => setIsHeaderOpen(false)} // close on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </header>
      {/* <TecnicoSubHeaders
        active={activeComponent === "Dep. Técnico"}
        setActive={setActiveComponent}
      ></TecnicoSubHeaders>
      <TrainingSubHeaders
        active={activeComponent === "Plano de Treino"}
        setActive={setActiveComponent}
      ></TrainingSubHeaders> */}
    </>
  );
};

export default Nav;
