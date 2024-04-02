import React from "react";

const Card = ({ data }) => {
  const { heading,  bottomText } = data;
  return (
    <div className="m-8 border-r-2 my-20 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
      <h1 className="text-2xl md:text-4xl">{heading}</h1>
      {/* <p className="w-full md:w-1/2">{text}</p>
       */}
      <img src="https://i.ibb.co/9t98xmZ/Capture2.jpg" alt="" />
      <h2 className="pr-4 text-sm md:text-base">{bottomText}</h2>
    </div>
  );
};

export default Card;
