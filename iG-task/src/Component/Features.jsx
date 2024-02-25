import { EyeIcon, StarIcon, ViewColumnsIcon } from "@heroicons/react/20/solid";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Features = () => {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <h2 className="text-yellow-600">Quality Features</h2>
        <p className="text-xl my-1 font-semibold text-blue-950">
          Tutorials That People Love most
        </p>
      </div>
      <div  className=" slide flex max-w-5xl  overflow-x-scroll mx-auto gap-5  justify-between mt-10">
        <div className="video-player min-w-fit ">
          <video
            width="320"
            height="240"
            controls>
            <source
              src="hero-v-1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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
            </div>
            <p className="text-md font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur{" "}
            </p>
            <p className="text-md font-semibold  text-blue-950">
              adipisicing elit. Unde, molestiae?
            </p>

            <div className="flex gap-2 text-gray-400 items-center my-2">
              <EyeIcon className="w-5 h-5" />
              <p className="text-sm">2589 Students watched</p>
            </div>
          </div>
        </div>
        <div className="video-player min-w-fit  ">
          <video
            width="320"
            height="240"
            controls>
            <source
              src="hero-v-1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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
            </div>
            <p className="text-md font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur{" "}
            </p>
            <p className="text-md font-semibold  text-blue-950">
              adipisicing elit. Unde, molestiae?
            </p>

            <div className="flex gap-2 text-gray-400 items-center my-2">
              <EyeIcon className="w-5 h-5" />
              <p className="text-sm">2589 Students watched</p>
            </div>
          </div>
        </div>
        <div className="video-player min-w-fit ">
          <video
            width="320"
            height="240"
            controls>
            <source
              src="hero-v-1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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
            </div>
            <p className="text-md font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur{" "}
            </p>
            <p className="text-md font-semibold  text-blue-950">
              adipisicing elit. Unde, molestiae?
            </p>

            <div className="flex gap-2 text-gray-400 items-center my-2">
              <EyeIcon className="w-5 h-5" />
              <p className="text-sm">2589 Students watched</p>
            </div>
          </div>
        </div>
        <div className="video-player  min-w-fit  ">
          <video
            width="320"
            height="240"
            controls>
            <source
              src="hero-v-1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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
            </div>
            <p className="text-md font-semibold text-blue-950">
              Lorem ipsum dolor, sit amet consectetur{" "}
            </p>
            <p className="text-md font-semibold  text-blue-950">
              adipisicing elit. Unde, molestiae?
            </p>

            <div className="flex gap-2 text-gray-400 items-center my-2">
              <EyeIcon className="w-5 h-5" />
              <p className="text-sm">2589 Students watched</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
