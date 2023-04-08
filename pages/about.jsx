import React from "react";
import Image from "next/image";
import image from "../Assets/images/young_women.png";
import frame90 from "../Assets/svg/Frame90.svg";


import "animate.css";

export const metaData = {
  title: "About",
};

export default function about({props}) {
  return (
    <>
      <div className="md:py-[4.5rem] py-5 h-full w-full">
        <div className="relative">
          <div className="animate__animated animate__pulse bg-gradient-to-r from-[#FE5200] to-[#00A0E3] h-full w-full">
            <Image
              src={image}
              alt="ladies pix"
              className="h-[636px] w-full md:h-auto md:w-auto mix-blend-overlay opacity-50"
            />
          </div>

          <div className="absolute -top-2 w-full h-full left-0">
            <div className="md:pl-10 pl-5 pt-[4px]">
              <Image
                src={frame90}
                alt=""
                className="w-[136px] h-[58px] md:w-auto md:h-auto"
              />
            </div>

            <div className="flex justify-center items-center animate__animated animate__backInDown inset-0 left-0 h-full flex-col text-center w-full md:space-y-[105px]">
              <div className="max-w-xs md:max-w-[70rem] text-white">
                <h1 className="md:text-[3.3rem] font-bold text-[24px]">
                  Get a Roommate Of Your Choice and Make New Friend(s)
                </h1>
                <p className="text-sm">
                  <i>
                    Click on the link button below to know more about getting a
                    roommate.
                  </i>
                </p>
              </div>

              <div className=" flex md:flex-row  flex-col md:space-x-6 space-y-4 md:space-y-0">
                <button className="sm:w-[264px] w-[150px] h-[45px] text-white bg-orange10 sm:h-[60.1px] rounded-xl">
                  Request Roomate
                </button>
                <button className="sm:w-[264px] w-[150px] h-[45px] border text-orange10 border-orange10 sm:h-[60.1px] rounded-xl">
                  Request Roomate
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>Who We Are?</h1>
          <p>
            Studentrealestates is one of the most admired companies in the
            academic industry of Nigeria. We offer services that are themselves,
            benchmarks in their respective categories. Today, studentrealestates
            is the undisputed leader in the pairing of roommates across Nigerian
            institutions.
          </p>
        </div>
        <div>
          <h1>Who We Are?</h1>
          <p>
            Studentrealestates is one of the most admired companies in the
            academic industry of Nigeria. We offer services that are themselves,
            benchmarks in their respective categories. Today, studentrealestates
            is the undisputed leader in the pairing of roommates across Nigerian
            institutions.
          </p>
        </div>
      </div>
    </>
  );
}
