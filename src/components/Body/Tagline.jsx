import React from "react";
const Tagline = () => {
  return (
    <div className="w-full py-12 bg-blue-500 border-b-2">
      <h1 className="text-center text-4xl md:text-6xl lg:text-8xl  mb-8 crimson-text-italic ">
        Fuel great thinking.
      </h1>

      <div className="flex justify-center">
        <h2 className="text-center px-4 md:px-0 md:w-8/12 lg:w-6/12 xl:w-4/12">
          Become a member to enjoy unlimited access and directly support the
          writers you read most
        </h2>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-white text-black rounded-full px-6 py-2 font-semibold">
          Get unlimited access
        </button>
      </div>
    </div>
  );
};

export default Tagline;
