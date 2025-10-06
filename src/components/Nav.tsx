import { NavOptions } from "../constants";
import { useEffect, useState } from "react";
import akfafeLogo from "../assets/images/cropped_circle_image.png";
import TecnicoSubHeaders from "./TecnicoSubHeaders";
import TrainingSubHeaders from "./TrainingSubHeaders";

const Nav = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  useEffect(() => {
    const blur = document.getElementById("blur-effetch");
    const header = document.getElementById("site-header");
    const headerLinks = document.getElementById("header-links");

    const handleScroll = () => {
      if (window.scrollY > 25) {
        blur?.classList.remove("hidden");
        header?.classList.remove("sm:py-4", "shadow-lg");
        header?.classList.add("bg-white", "text-white", "mt-5", "shadow-2xl");
        // headerLinks?.classList.add("text-white");
      } else {
        blur?.classList.add("hidden");
        header?.classList.add("sm:py-4", "shadow-2xl");
        header?.classList.remove("bg-white", "text-white", "mt-5", "shadow-lg");
        // headerLinks?.classList.remove("text-white");
      }

      if (window.scrollY === 0) {
        header?.classList.remove("shadow-lg");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 backdrop-blur-md w-full h-25 hidden z-100"
        id="blur-effetch"
      ></div>
      <header
        className="sm:px-8 sm:py-4 xl:px-18 p-2 fixed top-4 z-100 rounded-full duration-350 left-1/2 -translate-x-1/2 w-[95%]"
        id="site-header"
      >
        <nav className="flex items-center justify-between max-sm:px-4 z-100">
          <div className="flex items-center gap-6 hover:scale-112 transition-transform duration-500">
            <a href="/">
              <img
                src={akfafeLogo}
                alt="akfafe-logo"
                width={100}
                height={100}
              />
            </a>
            <span className="sm:text-2xl text-xl text-akfafe-red font-semibold">
              AKFafe
            </span>
          </div>

          <ul className="flex gap-10 max-lg:hidden">
            {NavOptions.map((item, index) =>
              item.children ? (
                <li
                  key={index}
                  className={`${
                    activeComponent === item.label
                      ? "text-akfafe-red before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-akfafe-red before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-akfafe-red after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                      : null
                  } flex items-center gap-2 relative text-akfafe-blue hover:text-akfafe-red cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-akfafe-red before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-akfafe-red after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]`}
                >
                  <button
                    onClick={() => {
                      setActiveComponent(
                        activeComponent === item.label ? null : item.label
                      );
                    }}
                    className="leading-normal text-lg font-semibold cursor-pointer"
                  >
                    {item.label}
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </li>
              ) : (
                <li
                  key={index}
                  className="relative text-akfafe-blue hover:text-akfafe-red cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-akfafe-red before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-akfafe-red after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                  id="header-links"
                >
                  <a
                    href={item.link}
                    className="leading-normal text-lg font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="size-8 lg:hidden text-blue-900 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </nav>
      </header>
      <TecnicoSubHeaders
        active={activeComponent === "Dep. Técnico"}
        setActive={setActiveComponent}
      ></TecnicoSubHeaders>
      <TrainingSubHeaders
        active={activeComponent === "Plano de Treino"}
        setActive={setActiveComponent}
      ></TrainingSubHeaders>
    </>
  );
};

export default Nav;
