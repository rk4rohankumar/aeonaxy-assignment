import React from "react";

const BottomCard = () => {
  const words = window.innerWidth < 768 ? [1, 2, 3] : [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="relative justify-center text-black bg-sky-200 py-4 md:py-8 lg:py-16">
      <h1 className="text-center px-2 md:px-8 lg:px-16 text-lg md:text-4xl lg:text-8xl">
        Take your mind in new directions
      </h1>

      <div className="flex justify-center mt-4 md:mt-8">
        <button className="bg-black text-white rounded-full px-4 py-2 md:py-2 md:px-6 lg:px-8 text-sm md:text-lg">
          Get Unlimited Access
        </button>
      </div>
      <div className="py-6 md:py-14">
        {/* Left Pyramid */}
        <div className="absolute bottom-0 left-0 w-full text-center">
          {words.map((count, index) => (
            <div key={index} className="text-left">
              {Array.from({ length: count }, (_, i) => (
                <span
                  key={i}
                  className="text-black text-sm md:text-base lg:text-lg"
                >
                  Discover&nbsp;
                </span>
              ))}
              <br />
            </div>
          ))}
        </div>

        {/* Right Pyramid */}
        <div className="absolute bottom-0 right-0 text-center">
          {words.map((count, index) => (
            <div key={index} className="text-right">
              {Array.from({ length: count }, (_, i) => (
                <span
                  key={i}
                  className="text-black text-sm md:text-base lg:text-lg"
                >
                  Explore&nbsp;
                </span>
              ))}
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
