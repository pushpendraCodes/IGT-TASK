import React from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
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

          <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">

      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
          <li className="text-md font-thin flex gap-1 items-center">Adversite  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />  </li>
          <li className=" text-md font-thin flex gap-1 items-center">supports   <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /></li>
          <li className="text-md font-thin">Contact</li>
        </ul>
      </div>
      <div>
        <button className=" rounded-md bg-[#edd6bd] text-sm text-[#ff7400] p-2">Try for free</button>
      </div>
    </div>
  );
};

export default Navbar;
