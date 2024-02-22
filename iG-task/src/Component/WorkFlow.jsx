import React from "react";

const WorkFlow = () => {
  return (
    <div className="mt-20 mx-auto">
      <div className="text-center ">
        <h2 className="text-yellow-600">Quality Features</h2>
        <p className="text-xl my-1 font-semibold text-blue-950">
          Tutorials That People Love most
        </p>
      </div>

      <div className="flex justify-between mt-10 gap-10">
        <div className="1">
          <button className="bg-gray-400 p-2 font-bold rounded-full">01</button>
          <h2 className="text-lg my-2 font-semibold text-blue-950">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quas!
          </p>
        </div>
        <div className="2">
        <button className="bg-gray-400 p-2 font-bold rounded-full">02</button>
          <h2 className="text-lg my-2 font-semibold text-blue-950">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quas!
          </p>
        </div>
        <div className="3">
        <button className="bg-gray-400 font-bold p-2 rounded-full">03</button>
          <h2 className="text-lg my-2 font-semibold text-blue-950">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quas!
          </p>
        </div>
        <div className="4">
        <button className="bg-gray-400 p-2 font-bold rounded-full">04</button>
          <h2 className="text-lg my-2 font-semibold text-blue-950">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
