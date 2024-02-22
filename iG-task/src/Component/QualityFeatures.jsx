import {
  CheckIcon,
  ChevronDownIcon,
  EyeIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const QualityFeatures = () => {
  return (
    <div className="mt-20 w-5/6 mx-auto">
      <div className="text-center ">
        <h2 className="text-yellow-600">Quality Features</h2>
        <p className="text-xl my-1 font-semibold text-blue-950">
          Tutorials That People Love most
        </p>
      </div>

      <div className="flex justify-between gap-8 my-10">
        <div className="1 flex items-center">
          <img
            className="w-10"
            src="/play.png"
            alt=""
          />
        </div>
        <div className="2">
          <div className="px-3">
            <div className="my-1 flex items-center ">
              <StarIcon className=" h-5 text-yellow-600 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className=" h-5 w-5 text-gray-400 " />

              <div className="flex gap-2 text-gray-400 items-center my-2">
                <p className="mx-2 text-sm font-thin text-blue-950">
                  5.0 (325 reviews)
                </p>
                <EyeIcon className="w-5 h-5" />
                <p className="text-sm">2589 Students watched</p>
              </div>
            </div>
            <p className="text-md my-1 font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              molestiae?{" "}
            </p>
            <p className="text-xs   text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, dignissimos?
            </p>
          </div>
        </div>
        <div className="3 flex items-center">
          <div className="w-full h-10 rounded-md text-white px-2 py-3 flex items-center bg-teal-400">
            <p className="text-sm">7 video Classes | 4 hrs</p>
          </div>
          <ChevronDownIcon
            className=" h-8 mx-1 w-8 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="flex justify-between gap-8 my-10">
        <div className="1 flex items-center">
          <img
            className="w-10"
            src="/play.png"
            alt=""
          />
        </div>
        <div className="2">
          <div className="px-3">
            <div className="my-1 flex items-center ">
              <StarIcon className=" h-5 text-yellow-600 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className=" h-5 w-5 text-gray-400 " />

              <div className="flex gap-2 text-gray-400 items-center my-2">
                <p className="mx-2 text-sm font-thin text-blue-950">
                  5.0 (325 reviews)
                </p>
                <EyeIcon className="w-5 h-5" />
                <p className="text-sm">2589 Students watched</p>
              </div>
            </div>
            <p className="text-md my-1 font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              molestiae?{" "}
            </p>
            <p className="text-xs   text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, dignissimos?
            </p>
          </div>
        </div>
        <div className="3 flex items-center">
          <div className="w-full h-10 rounded-md text-white px-2 py-3 flex items-center bg-teal-400">
            <p className="text-sm">7 video Classes | 4 hrs</p>
          </div>
          <ChevronDownIcon
            className=" h-8 mx-1 w-8 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="flex gap-2">
          <div className=" text-sm flex items-center gap-2">
            <CheckIcon className="w-5 h-5 bg-gray-400 text-white rounded-full p-1" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className=" text-sm flex items-center gap-2">
            <CheckIcon className="w-5 h-5 bg-gray-400 text-white rounded-full p-1" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex gap-2 my-5">
          <div className="flex text-sm items-center gap-2">
            <CheckIcon className="w-5 h-5 bg-gray-400 text-white rounded-full p-1" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex text-sm items-center gap-2">
            <CheckIcon className="w-5 h-5 bg-gray-400 text-white rounded-full p-1" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-8 my-10">
        <div className="1 flex items-center">
          <img
            className="w-10"
            src="/play.png"
            alt=""
          />
        </div>
        <div className="2">
          <div className="px-3">
            <div className="my-1 flex items-center ">
              <StarIcon className=" h-5 text-yellow-600 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className=" h-5 w-5 text-gray-400 " />

              <div className="flex gap-2 text-gray-400 items-center my-2">
                <p className="mx-2 text-sm font-thin text-blue-950">
                  5.0 (325 reviews)
                </p>
                <EyeIcon className="w-5 h-5" />
                <p className="text-sm">2589 Students watched</p>
              </div>
            </div>
            <p className="text-md my-1 font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              molestiae?{" "}
            </p>
            <p className="text-xs   text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, dignissimos?
            </p>
          </div>
        </div>
        <div className="3 flex items-center">
          <div className="w-full h-10 rounded-md text-white px-2 py-3 flex items-center bg-teal-400">
            <p className="text-sm">7 video Classes | 4 hrs</p>
          </div>
          <ChevronDownIcon
            className=" h-8 mx-1 w-8 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="flex justify-between gap-8 my-10">
        <div className="1 flex items-center">
          <img
            className="w-10"
            src="/play.png"
            alt=""
          />
        </div>
        <div className="2">
          <div className="px-3">
            <div className="my-1 flex items-center ">
              <StarIcon className=" h-5 text-yellow-600 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className=" h-5 w-5 text-gray-400 " />

              <div className="flex gap-2 text-gray-400 items-center my-2">
                <p className="mx-2 text-sm font-thin text-blue-950">
                  5.0 (325 reviews)
                </p>
                <EyeIcon className="w-5 h-5" />
                <p className="text-sm">2589 Students watched</p>
              </div>
            </div>
            <p className="text-md my-1 font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              molestiae?{" "}
            </p>
            <p className="text-xs   text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, dignissimos?
            </p>
          </div>
        </div>
        <div className="3 flex items-center">
          <div className="w-full h-10 rounded-md text-white px-2 py-3 flex items-center bg-teal-400">
            <p className="text-sm">7 video Classes | 4 hrs</p>
          </div>
          <ChevronDownIcon
            className=" h-8 mx-1 w-8 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="flex justify-between gap-8 my-10">
        <div className="1 flex items-center">
          <img
            className="w-10"
            src="/play.png"
            alt=""
          />
        </div>
        <div className="2">
          <div className="px-3">
            <div className="my-1 flex items-center ">
              <StarIcon className=" h-5 text-yellow-600 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className="text-yellow-600 h-5 w-5 " />
              <StarIcon className=" h-5 w-5 text-gray-400 " />

              <div className="flex gap-2 text-gray-400 items-center my-2">
                <p className="mx-2 text-sm font-thin text-blue-950">
                  5.0 (325 reviews)
                </p>
                <EyeIcon className="w-5 h-5" />
                <p className="text-sm">2589 Students watched</p>
              </div>
            </div>
            <p className="text-md my-1 font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              molestiae?{" "}
            </p>
            <p className="text-xs   text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, dignissimos?
            </p>
          </div>
        </div>
        <div className="3 flex items-center">
          <div className="w-full h-10 rounded-md text-white px-2 py-3 flex items-center bg-teal-400">
            <p className="text-sm">7 video Classes | 4 hrs</p>
          </div>
          <ChevronDownIcon
            className=" h-8 mx-1 w-8 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default QualityFeatures;
