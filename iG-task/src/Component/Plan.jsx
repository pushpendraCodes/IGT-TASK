import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";
import { CiCircleRemove } from "react-icons/ci";
const Plan = () => {
  return (
    <div className="mt-20 mx-auto w-5/6 ">
      <div className="text-center ">
        <h2 className="text-yellow-600">Quality Features</h2>
        <p className="text-xl my-1 font-semibold text-blue-950">
          Tutorials That People Love most
        </p>
      </div>

      <div className="mx-auto mt-4 flex justify-center gap-4">
        <div className="shadow-xl px-4 py-1 text-xs cursor-pointer">Monthly Plan</div>
        <div className="shadow-xl  px-4  border-solid border-1 border-black-400 py-1 text-xs cursor-pointer ">Annualy Plan</div>
      </div>
      <div className="boxes flex justify-center gap-10 mt-10 ">
        <div className="box1 w-96 py-12">
          <h2 className="text-md font-bold">Free plan</h2>
          <p className="text-sm text-gray-400">For Small Teams or Office</p>

          <div className="flex gap-2 items-center mt-8">
            <CheckIcon className="w-4 h-4 bg-green-400 text-white rounded-full p-1" />
            <p className="text-sm max-w-2xl text-gray-400 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing adipisicing
              adipisicing
            </p>
          </div>
          <div className="flex gap-2 items-center my-4">
            <CheckIcon className="w-4 h-4 bg-green-400 text-white rounded-full p-1" />
            <p className="text-sm text-gray-400 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              fugiat!
            </p>
          </div>
          <div className="flex gap-2 items-center my-4">
            <CheckIcon className="w-4 h-4 bg-green-400 text-white rounded-full p-1" />
            <p className="text-sm text-gray-400 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              fugiat!
            </p>
          </div>
          <div className="flex gap-2 items-center my-4">
            <svg
              className=" w-4 h-4 bg-gray-300 text-white rounded-full p-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <p className="text-sm text-gray-300 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              fugiat!
            </p>
          </div>

          <div className="flex gap-2 items-center my-4">
            <svg
              className=" w-4 h-4 bg-gray-300 text-white rounded-full p-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <p className="text-sm text-gray-300 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              fugiat!
            </p>
          </div>

          <div className="flex mt-10 justify-center">
            <button className=" rounded-md text-xs bg-[#edd6bd] text-[#ff7400] px-14 py-2">
              Free Trial
            </button>
          </div>
        </div>
        <div className="box2 border-solid border-2 border-green-400 p-4 ">
          <button className="rounded-md text-xs bg-[#ff7400] text-white px-5 py-2">
            Recomended
          </button>
          <div className="flex w-4/5 justify-between mt-3 gap-10">
            <div className="1 ">
              <h2 className="text-blue-950 font-semibold ">Premium</h2>
              <p className="text-sm">Foe Startup EnterPrizes</p>
            </div>
            <div className="1">

              <p className="text-sm">Starting From</p>
              <h2 className="text-green-400 text-lg font-semibold ">49.99/mo</h2>
            </div>
          </div>

          <div className="flex gap-2 items-center my-4">
            <CheckIcon className="w-4 h-4 bg-green-400 text-white rounded-full p-1" />
            <p className="text-sm w-4/5 text-gray-400 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing adipisicing
              adipisicing
            </p>
          </div>
          <div className="flex gap-2 items-center  my-4">
            <CheckIcon className="w-4 h-4 bg-green-400 text-white rounded-full p-1" />
            <p className="text-sm w-4/5 text-gray-400 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing adipisicing
              adipisicing
            </p>
          </div>
          <div className="flex gap-2 items-center  my-4">
            <CheckIcon className="w-4 h-4 bg-green-400 text-white rounded-full p-1" />
            <p className="text-sm w-4/5 text-gray-400 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing adipisicing
              adipisicing
            </p>
          </div>
          <div className="flex gap-2 items-center  my-4">
            <CheckIcon className="w-4 h-4 bg-green-400 text-white rounded-full p-1" />
            <p className="text-sm w-4/5 text-gray-400 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing adipisicing
              adipisicing
            </p>
          </div>
          <div className="flex gap-2 items-center  my-4">
            <CheckIcon className="w-4 h-4 bg-green-400 text-white rounded-full p-1" />
            <p className="text-sm w-4/5 text-gray-400 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing adipisicing
              adipisicing
            </p>
          </div>

          <div className="flex mt-10 justify-center">
            <button className=" rounded-md text-xs bg-[#edd6bd] text-[#ff7400] px-14 py-2">
             Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
