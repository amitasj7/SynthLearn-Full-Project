import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";

import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";

import ExploreMore from "../components/core/HomePage/ExploreMore";
import Navbar from "../components/common/Navbar";

function Home() {
  return (
    <div>
      
      {/* Section 1 */}
      <div className="bg-pink-600 relative mx-auto flex flex-col w-11/12 items-center justify-between text-white">
        <Link to={"/signup"}>
          <div className="group bg-richblack-800 mt-16 p-1 mx-auto rounded-full font-bold text-richblack-300 transition-all duration-200 hove:scale-95 w-fit">
            <div className=" bg-brown-300 text-white flex flex-row items-center gap-3 justify-center group-hover:bg-richblack-900 ">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="bg-blue-500 text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="bg-blue-600 mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          Instructors.
        </div>

        <div className="bg-blue-400 mt-10 flex gap-10">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Watch a demo
          </CTAButton>
        </div>

        <div className="bg-blue-200 mx-3 my-12 shadow-blue-800 p-6">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
          {/* TODO: video shadow effect lgana hai */}
        </div>

        {/* code Section - 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential "} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience"
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
            </head>
            <body>
              
            </body>
            </html>`}
            codeColor={`text-yellow-25`}
          />
        </div>

        {/* code Section - 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential "} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience"
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
            </head>
            <body>
              
            </body>
            </html>`}
            codeColor={`text-yellow-25`}
          />
        </div>

        <ExploreMore></ExploreMore>
      </div>
      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="bg-blue-400 w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="bg-black h-[150px]"></div>
            <div className="bg-pink-400 flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="bg-yellow-100 flex flex-col">
          <div className="bg-blue-300 flex flex-row justify-center w-[70%] mx-auto gap-9">
            <div className=" bg-pink-500 text-4xl">
              Get the Skills you need for a
              <HighlightText text={`job that is in demand`} />
            </div>
            <div className="text-[16px] bg-pink-500">
              The modern SynthLearn is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
              <div className="bg-black w-[35%] mt-3">
                <CTAButton active={true} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>
          <div className="bg-pink-300"></div>
        </div>

        <TimelineSection></TimelineSection>

        <LearningLanguageSection></LearningLanguageSection>
      </div>
      {/* Section 3 */}

      <div>
        <InstructorSection></InstructorSection>
      </div>
      {/* Footer */}
    </div>
  );
}

export default Home;
