import React from "react";
import Tagline from "./Tagline";
import { DummyData } from "../../Data/Data";
import { DummyTestimonialData } from "../../Data/Data";
import TestimonialCard from "../Testimonial/TestimonialCard";
import BottomCard from "./BottomCard";
import StoryCard1 from "./StoryCard/StoryCard1";
import StoryCard2 from "./StoryCard/StoryCard2";

const Body = () => {
  return (
    <div className="bg-blue-500 text-white">
      <Tagline />
      <div className=" flex ">
        <StoryCard1 data={DummyData[0]} />
        <StoryCard2 data={DummyData[1]} />
      </div>
      <div>
        {DummyTestimonialData.map((item, index) => (
          <TestimonialCard key={index} data={item} />
        ))}
      </div>

      <BottomCard />
    </div>
  );
};

export default Body;
