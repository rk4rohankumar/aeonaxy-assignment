import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const TestimonialCard = ({ data }) => {
  const { name, text, img, heading } = data;
  return (
    <div className="w-full bg-white">
      <div className="bg-white rounded-lg overflow-hidden mx-auto max-w-md md:max-w-xl">
        {/* Heading */}
        <h1 className="font-bold text-black text-center my-6 text-2xl md:text-4xl p-4">
          {heading}
        </h1>

        {/* Middle Section */}
        <div className="flex items-center p-4">
          {/* Image */}
          <div className="mr-4">
            <div
              style={{
                width: "100px", // Set the width and height as per your requirement
                height: "100px",
                borderRadius: "50%", // Make it a circle
                overflow: "hidden", // Hide overflowing content
                border: "2px solid #000", // Optional: add border for better visibility
              }}
            >
              <img
                src={img}
                alt="image"
                style={{
                  width: "100%", // Ensure image covers the container
                  height: "100%", // Ensure image covers the container
                  objectFit: "cover", // Cover the container while maintaining aspect ratio
                  objectPosition: "center", // Center the image within the container
                }}
              />
            </div>
          </div>

          {/* Text and Name */}
          <div>
            <p className="text-black">{text}</p>
            <h2 className="text-base md:text-lg text-black font-semibold mt-2">
              {name}
            </h2>
          </div>
        </div>

        {/* Button */}
        <button className="white text-black px-4 py-2 rounded-md mx-auto mb-4 block">
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
