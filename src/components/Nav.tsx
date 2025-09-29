import React from "react";

const Nav = () => {
  return (
    <header className="sm:p-8 p-4 absolute z-10 w-full">
      <nav className="flex items-center gap-6">
        <a href="/">
          <img src="akfafe.jpeg" alt="akfafe-logo" width={80} height={80} />
        </a>
        <div className="text-lg ">AKFafe</div>
        <ul></ul>
      </nav>
    </header>
  );
};

export default Nav;
