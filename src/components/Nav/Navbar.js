import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black text-start text-white flex flex-auto items-center">
        <div className="flex-1 text-2xl ml-[3.25rem]">
          <div className="flex">
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>

            <h1> LOGO</h1>
          </div>
        </div>
        <ul className="flex flex-row p-5 ">
          <li className="mx-2 text-2xl hover:text-[gold] hover:animate-bounce hover:bg-[aqua]	">
            <a href="/home">Home</a>
          </li>
          <li className="mx-2 text-2xl hover:text-[gold] hover:animate-bounce">
            <a href="/about">About</a>
          </li>
          <li className="mx-2 text-2xl hover:text-[gold] hover:animate-bounce">
            <a href="/contact">Contact</a>
          </li>
          <li className="mx-2 text-2xl hover:text-[gold] hover:animate-bounce">
            <a href="/sign">SignUp</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
