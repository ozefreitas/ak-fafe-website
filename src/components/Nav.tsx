import { NavOptions } from "../constants";
import { useEffect } from "react";
import akfafeLogo from "../assets/images/cropped_circle_image.png";

const Nav = () => {
  useEffect(() => {
    const blur = document.getElementById("blur-effetch");
    const header = document.getElementById("site-header");
    const headerLinks = document.getElementById("header-links");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        blur?.classList.remove("hidden");
        header?.classList.remove("sm:py-4", "shadow-lg");
        header?.classList.add("bg-white", "text-white", "mt-5", "shadow-2xl");
        headerLinks?.classList.add("text-white");
      } else {
        blur?.classList.add("hidden");
        header?.classList.add("sm:py-4", "shadow-2xl");
        header?.classList.remove("bg-white", "text-white", "mt-5", "shadow-lg");
        headerLinks?.classList.remove("text-white");
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
        className="fixed top-0 left-0 backdrop-blur-md w-full h-25 hidden z-10"
        id="blur-effetch"
      ></div>
      <header
        className="sm:px-8 sm:py-4 xl:px-18 p-2 fixed top-4 z-100 rounded-full duration-350 left-1/2 -translate-x-1/2 w-[95%]"
        id="site-header"
      >
        <nav className="flex items-center justify-between max-sm:px-4">
          <div className="flex items-center gap-6 hover:scale-112 transition-transform duration-1000">
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
            {NavOptions.map((item, index) => (
              <li key={index} id="header-links">
                <a
                  href={item.link}
                  className="leading-normal text-lg text-akfafe-blue hover:underline font-semibold"
                >
                  {item.label}
                </a>
              </li>
            ))}
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
    </>
  );
};

export default Nav;
