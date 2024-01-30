import React from "react";
import HighlightText from "../HomePage/HighlightText";
import Knowyourprogress from "../../../assets/Images/Know_your_progress.png";
import ComparewithOther from "../../../assets/Images/Compare_with_others.png";
import Planyourlessons from "../../../assets/Images/Plan_your_lessons.png";

const LearningLanguageSection = () => {
  return (
    <div className="bg-pink-900 flex flex-col justify-center items-center">
      <div className="bg-blue-300 w-[50%] text-3xl font-bold text-black mt-20">
        <p>
          Your swiss knife for{" "}
          <HighlightText text={"learning any language"}></HighlightText>
        </p>
      </div>
      <div className="bg-pink-200 w-[50%] text-center">
        Using spin making learning multiple language easy. with 20+ languages
        realistic voice-over, progress tracking custom schedule and more
      </div>

      <div className="bg-pink-800  flex flex-row items-center justify-center  m-16">
        <img
          src={Knowyourprogress}
          alt="KnowyourprogressImage"
          className="object-contain -mr-32"
        />
        <img
          src={ComparewithOther}
          alt="ComparewithOtherImage"
          className="object-contain"
        />
        <img
          src={Planyourlessons}
          alt="PlanyourlessonsImage"
          className="object-contain -ml-36"
        />
      </div>
    </div>
  );
};

export default LearningLanguageSection;
