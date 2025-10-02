import { NavOptions } from "../constants";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const blur = document.getElementById("blur-effetch");
    const header = document.getElementById("site-header");
    const headerLinks = document.getElementById("header-links");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        blur?.classList.remove("hidden");
        header?.classList.add(
          "bg-white",
          "shadow-md",
          "text-white",
          "mt-5",
          "xl:px-24"
        );
        headerLinks?.classList.add("text-white");
      } else {
        blur?.classList.add("hidden");
        header?.classList.remove(
          "bg-white",
          "shadow-md",
          "text-white",
          "mt-5",
          "xl:px-24"
        );
        headerLinks?.classList.remove("text-white");
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
        className="sm:p-8 xl:px-18 p-6 fixed z-10 w-full rounded-full duration-350"
        id="site-header"
      >
        <nav className="flex items-center justify-between max-sm:px-4">
          <div className="flex items-center gap-6 hover:scale-112 transition-transform duration-300">
            <a href="/">
              <img
                src="akfafe.jpeg"
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
