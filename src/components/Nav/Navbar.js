import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        className="bg-black text-start text-white
      "
      >
        <ul className="flex flex-row p-5 ">
          <li className="mx-2 text-xl">
            <a href="/home">Home</a>
          </li>
          <li className="mx-2 text-xl">
            <a href="/about">About</a>
          </li>
          <li className="mx-2 text-xl">
            <a href="/contact">Contact</a>
          </li>
          <li className="mx-2 text-xl">
            <a href="/sign">SignUp</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
