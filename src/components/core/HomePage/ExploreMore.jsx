import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";

import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];
const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      <div className="text-4xl font-semibold text-center">
        Unlock the <HighlightText text={"Power of Code"}></HighlightText>
      </div>

      <p className="text-center text-richblack-300 text-sm text-[16px] mt-3">
        Learn to build anything you can Imagine
      </p>

      <div className="flex flex-row rounded-full items-center gap-2 bg-richblack-600 border mt-5 py-1 px-1">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[16px]  ${
                currentTab === element
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 hover:scale-90 duration-300 px-3 py-3 `}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
