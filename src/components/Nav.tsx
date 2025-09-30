import { NavOptions } from "../constants";

const Nav = () => {
  return (
    <header className="sm:p-8 p-4 absolute z-10 w-full">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/">
            <img src="akfafe.jpeg" alt="akfafe-logo" width={80} height={80} />
          </a>
          <span className="text-lg text-red-600">AKFafe</span>
        </div>

        <ul className="flex gap-10">
          {NavOptions.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="leading-normal text-lg text-slate-600 hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
