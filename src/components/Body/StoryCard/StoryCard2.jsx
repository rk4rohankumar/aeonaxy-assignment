import React from "react";

const Card = ({ data }) => {
  const { heading, text, bottomText } = data;

  // Function to generate a string of 'M's based on count
  const generateMs = (count) => {
    return Array(count).fill("M").join("");
  };

  return (
    <div className="m-8 my-20 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
      <h1 className="text-2xl md:text-4xl">{heading}</h1>
      <div className="relative" style={{ lineHeight: 0 }}>
        <img
          src="https://i.ibb.co/1qzRCNc/del.jpg "
          className="bg-blend-multiply"
          alt=""
        />
      </div>
      <h2 className="pr-4 text-sm md:text-base">{bottomText}</h2>
    </div>
  );
};

export default Card;
