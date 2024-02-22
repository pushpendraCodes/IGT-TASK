import { StarIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import ReactPlayer from 'react-player'
const Hero = () => {

    const [isPaused, setIsPaused] = useState(false);

    const handlePlay = () => {
      setIsPaused(false);
    };

    const handlePause = () => {
      setIsPaused(true);
    };

    const handleResume = () => {
      setIsPaused(false);
    };

  return (
    <div
      className="mt-20 flex gap-10 justify-center bg-[#EEEEDD
        ]">
      <div className="left w-1/2  ">
        <div className="my-5 flex items-center ">
          <StarIcon className=" h-5 w-5 " />
          <StarIcon className=" h-5 w-5 " />
          <StarIcon className=" h-5 w-5 " />
          <StarIcon className=" h-5 w-5 " />
          <StarIcon className=" h-5 w-5 text-gray-400 " />
          <p className="mx-2 font-thin text-blue-950">
            Trusted By over 4332 student
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-blue-950">
            Learn Design{" "}
          </h2>
          <h2 className="text-4xl  font-semibold text-blue-950 my-2">
            {" "}
            With Nia Motos{" "}
          </h2>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            recusandae quod praesentium voluptatum corporis, nesciunt quisquam
            ex mollitia! Tempora distinctio nesciunt cumque hic nihil quis.
          </p>
        </div>

        <div className="my-3">
          <div class="relative">
            <input
              type="text"
              placeholder="Search Course Name..."
              class="w-full pl-4 pr-10 py-4 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                class="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-5.2-5.2"></path>
                <path d="M15 10C15 14.4183 11.4183 18 7 18C2.58172 18 0 14.4183 0 10C0 5.58172 2.58172 2 7 2C11.4183 2 15 5.58172 15 10Z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="sponser flex gap-2 items-center my-5">
          <p className="font-thin text-blue-950">Sponser By:</p>

          <p className="font-semibold flex gap-1 mx-2 ">
            <img
              className="w-5 h-5"
              src="/paypal.png"
              alt=""
            />
            Paypal
          </p>
          <p className="font-semibold mx-2 ">Google</p>
          <p className="font-semibold flex gap-1 mx-2 ">
            <img
              className="w-5 h-5"
              src="/dropbox.png"
              alt=""
            />
            DropBox
          </p>
        </div>
      </div>
      <div className="right relative w-1/2 ">
      <ReactPlayer
       url="hero-v-1.mp4"
        playing={!isPaused}
        controls
        width="90%"
        height="360px"
        onPlay={handlePlay}
        onPause={handlePause}
      />

{isPaused && (
        <button
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={handleResume}
        >
          <img className="w-5" src="/play.png" alt="" />
        </button>
      )}
      </div>
    </div>
  );
};

export default Hero;
