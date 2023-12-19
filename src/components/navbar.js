import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center px-10 pt-20">
      <nav className="w-full flex items-center justify-evenly p-5 border rounded-full shadow-lg uppercase font-sans max-lg:flex-col max-lg:gap-y-5">
        <span>JoyCanvas</span>
        <span>bekzotovich.uz</span>
        <button>GitHub Code</button>
      </nav>
    </div>
  );
};


export default Navbar;