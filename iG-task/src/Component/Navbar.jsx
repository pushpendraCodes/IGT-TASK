import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const Navbar = () => {
  return (
    <div className="navbar flex justify-between ">
      <div>
        <img
          src=""
          alt=""
        />
        <h1 className="font-bold">LandGuru</h1>
      </div>
      <div>
        <ul className="flex item-center justify-between gap-7">
          <li className="text-md font-thin">home</li>


          <li className="text-md font-thin flex gap-1 items-center">
            Adversite{" "}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />{" "}
          </li>
          <li className=" text-md font-thin flex gap-1 items-center">
            supports{" "}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </li>
          <li className="text-md font-thin">Contact</li>
        </ul>
      </div>
      <div>
        <button className=" rounded-md bg-[#edd6bd] text-sm text-[#ff7400] p-2">
          Try for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
