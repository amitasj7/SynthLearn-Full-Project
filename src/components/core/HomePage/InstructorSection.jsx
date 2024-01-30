import React from "react";
import InstructorImage from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";

const InstructorSection = () => {
  return (
    <div className="bg-richblack-700 mt-16 w-full flex flex-row justify-center items-center gap-5">
      <div className="bg-blue-900 w-[30%]">
        <img
          src={InstructorImage}
          alt="InstructorImage"
          className="shadow-white object-fit-cover w-full h-full"
        />
      </div>
      <div className="bg-blue-400 flex flex-col gap-5 items-start w-[40%]">
        <div className="text-4xl font-bold w-[40%]">
          Become an <HighlightText text={"Instructor"}></HighlightText>
        </div>

        <div className="">
          Instructor from around the world teach millions of students on
          SynthLearn. We Provides the tools and skills to teach what you love.
        </div>

        <div className="">
          <Button active={true} linkto={"/signup"}>
            <div className="flex items-center gap-2">
              Start Learning Today
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
