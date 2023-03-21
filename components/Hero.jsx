"use client";
import Image from "next/image";
import React from "react";
import frame90 from "../public/assets/svg/Frame90.svg";
import frame from "../public/assets/images/Frame.png";
import women from "../public/assets/images/ladies.png";
import circle1 from "../public/assets/svg/Ellipse15.svg";
import circle2 from "../public/assets/svg/Ellipse16.svg";
import circle3 from "../public/assets/svg/Ellipse17.svg";

export const Hero = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Image src={frame} alt="" className="w-full" />
        </div>
        <div className="">
          <Image
            src={frame90}
            alt=" "
            className=""
          />
          <div className=" ">
            <div className=" ">
              <h1 className="">
                Find your dream roommate and your next bestfriend.
              </h1>
              <div className="">
                <h3 className="">
                  Acccessing a trusted roommate in your school at a small price.
                </h3>
              </div>
              <div className="space-x-6">
                <button className="w-[264px] bg-orange10 h-[60.1px] rounded-xl">
                  Request Roomate
                </button>
                <button className="w-[264px] border border-orange10 h-[60.1px] rounded-xl">
                  Request Friend
                </button>
              </div>
            </div>

            <div className="">
              <Image
                src={women}
                alt="two african women"
                className="l"
              />

              <div className="">
                <Image
                  className=""
                  src={circle1}
                  alt="circle1"
                />
                <Image className="" src={circle2} alt="circle2" />
                <Image className="" src={circle3} alt="circle3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
