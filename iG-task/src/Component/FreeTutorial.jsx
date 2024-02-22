import React from "react";
import { CheckIcon, EyeIcon, StarIcon } from "@heroicons/react/20/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const FreeTutorial = () => {
  return (
    <div className="mt-20 w-5/6 mx-auto">
      <div className="grid grid-cols-2 gap-5 ">
        <Carousel
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          swipeable={true}
          className=" w-full">
          <div className="video-player">
            <img
              className="h-56"
              src="/work1.jpg"
            />

            <div className="px-3">
              <div className="my-5 flex  items-center ">
                <StarIcon className=" h-5 text-yellow-600 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className=" h-5 w-5 text-gray-400 " />
                <p className="mx-2 text-sm font-thin text-blue-950">
                  5.0 (325 reviews)
                </p>
                <div className="flex justify-end">
                  <button className="p-1 flex items-center gap-2 bg-green-600 rounded-md text-white  text-xs">
                    <CheckIcon className="w-4 h-4 bg-white text-green-400 rounded-full p-1" />
                    Free Tutorial
                  </button>
                </div>
              </div>
              <div className="">
                <p className="text-md flex justify-items-start font-semibold text-blue-950">
                  Lorem ipsum dolor, sit amet consectetur adipisicing Lorem
                  ipsum dolor, sit amet consectetur
                </p>
              </div>

              <div className="flex gap-2 text-gray-400 items-center my-2">
                <EyeIcon className="w-5 h-5" />
                <p className="text-sm">2589 Students watched</p>
              </div>
            </div>
          </div>
          <div className="video-player">
            <img
              className="h-56"
              src="/work2.jpg"
            />

            <div className="px-3">
              <div className="my-5 flex items-center ">
                <StarIcon className=" h-5 text-yellow-600 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className=" h-5 w-5 text-gray-400 " />
                <p className="mx-2 text-sm font-thin text-blue-950">
                  5.0 (325 reviews)
                </p>
                <div className="flex justify-end">
                  <button className="p-1 flex items-center gap-2 bg-green-600 rounded-md text-white  text-xs">
                    <CheckIcon className="w-4 h-4 bg-white text-green-400 rounded-full p-1" />
                    Free Tutorial
                  </button>
                </div>
              </div>
              <div className="">
                <p className="text-md flex justify-items-start font-semibold text-blue-950">
                  Lorem ipsum dolor, sit amet consectetur adipisicing . Lorem ipsum dolor, sit amet consectetur
                </p>

              </div>

              <div className="flex gap-2 text-gray-400 items-center my-2">
                <EyeIcon className="w-5 h-5" />
                <p className="text-sm">2589 Students watched</p>
              </div>
            </div>
          </div>
          <div className="video-player">
            <img
              className="h-56"
              src="/work3.jpg"
            />

            <div className="px-3">
              <div className="my-5 flex items-center ">
                <StarIcon className=" h-5 text-yellow-600 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className="text-yellow-600 h-5 w-5 " />
                <StarIcon className=" h-5 w-5 text-gray-400 " />
                <p className="mx-2 text-sm font-thin text-blue-950">
                  5.0 (325 reviews)
                </p>

                <div className="flex justify-end">
                  <button className="p-1 flex items-center gap-2 bg-green-600 rounded-md text-white  text-xs">
                    <CheckIcon className="w-4 h-4 bg-white text-green-400 rounded-full p-1" />
                    Free Tutorial
                  </button>
                </div>
              </div>
              <div className="">
                <p className="text-md flex justify-items-start font-semibold text-blue-950">
                  Lorem ipsum dolor, sit amet consectetur adipisicing .
                </p>

              </div>

              <div className="flex gap-2 text-gray-400 items-center my-2">
                <EyeIcon className="w-5 h-5" />
                <p className="text-sm">2589 Students watched</p>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="1 px-5 ">
          <p className="text-yellow-600 text-xs">Free Tutorial</p>
          <h2 className="text-2xl my-3 font-semibold text-blue-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            eius!
          </h2>
          <p className="text-sm my-4  leading-loose text-blue-950">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            officia ut laudantium soluta reiciendis eaque? officia ut laudantium
            soluta reiciendis eaque?
          </p>
          <button className=" rounded-md text-xs bg-[#edd6bd] text-[#ff7400] px-14 py-2">
            Explore Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTutorial;
