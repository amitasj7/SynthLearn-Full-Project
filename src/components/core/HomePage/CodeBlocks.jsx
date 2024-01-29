import React from "react";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`bg-blue-500 flex ${position} my-20 justify-between`}>
      {/* hello world */}
      {/* Section 1 */}
      <div className="bg-pink-900 w-[50%] flex flex-col gap-8">
        {heading}
        <div className="bg-blue-900 text-richblack-300 font-bold">
          {subheading}
        </div>
        <div className="bg-blue-800 flex flex-row justify-center gap-10 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="bg-pink-500 h-fit flex flex-row text-[11px]  py-4 w-[50%] lg:w-[500px] ">
        {/* hellow world */}
        {/* TODO: BG gradients */}
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
        </div>
        <div
          className={`bg-black w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
