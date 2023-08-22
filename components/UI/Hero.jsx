"use client";
import Image from "next/image";
import React from "react";
import Frame90 from "../../Assets/svgs/Frame90.svg";
import fb from "../../Assets/svgs/fb.svg";
import ig from "../../Assets/svgs/ig.svg";
import Twitter from "../../Assets/svgs/Twitterlogo.svg";
import whatsapp from "../../Assets/svgs/whatsapp.svg";
import frame from "../../Assets/images/Frame.png";
import women from "../../Assets/images/ladies2.png";
import "animate.css";

export const Hero = () => {
  return (
    <div className="h-full w-full pb-96 md:pb-0">
      <div className="relative">
        <Image
          src={frame}
          alt="background image"
          className="w-full object-cover h-full mix-blend-normal"
        />
        <div className="absolute top-0 mt-[4rem] md:flex flex-1 md:flex-row ">
          <div className="md:max-w-xl md:px-10 px-6">
            <div className="md:pl-10 pl-5 pt-[4px]">
              <Image
                src={Frame90}
                alt="Grid box"
                className="w-[136px] h-[58px] md:w-auto md:h-auto"
              />
            </div>

            <div className="space-y-12 md:space-y-20 max-w-2xl">
              <h1 className="font-normal md:font-bold md:text-[52px] text-[32px]">
                Find your dream roommate and your next best friend
              </h1>
              <h3 className="text-2xl md:flex hidden font-normal">
                Accessing a trusted roommate in your school at a small price.
              </h3>
              <h3 className="md:hidden flex">
                Access to Accessing a trusted roommate in your school at a small
                price. a trusted roommate in your school at a small price
              </h3>

              <div className=" flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0">
                <button className="sm:w-[264px] w-[150px] h-[45px] bg-orange10 sm:h-[60.1px] rounded-xl">
                  Request RoomMate
                </button>
                <button className="sm:w-[264px] w-[150px] h-[45px] border border-orange10 sm:h-[60.1px] rounded-xl">
                  Request RoomMate
                </button>
              </div>

              <div className="flex flex-row space-x-[20px] md:space-x-20">
                <div>
                  <Image src={fb} alt="fb" />
                </div>
                <div>
                  <Image src={ig} alt="ig" />
                </div>
                <div>
                  <Image src={Twitter} alt="tw" />
                </div>
                <div>
                  <Image src={whatsapp} alt="wh" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <Image
              src={women}
              alt="two african women"
              className=" md:h-[686px] md:w-[952px] h-auto w-auto animate__animated animate__fadeIn object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
