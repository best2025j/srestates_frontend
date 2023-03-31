"use client";
import Image from "next/image";
import React from "react";
import frame90 from "../../public/assets/svg/Frame90.svg";
import image1 from "../../public/assets/svg/fb.svg";
import image2 from "../../public/assets/svg/ig.svg";
import image3 from "../../public/assets/svg/Twitter.svg";
import image4 from "../../public/assets/svg/Whatsapp.svg";
import frame from "../../public/assets/images/Frame.png";
import women from "../../public/assets/images/ladies2.png";
import "animate.css";

export const Hero = () => {
  return (
    <div className="h-screen w-full pb-40 md:pb-0">
      <div className="relative">
        <Image
          src={frame}
          alt=""
          className="w-full object-cover h-full mix-blend-normal"
        />

        <div className="absolute top-0 mt-20 md:flex md:flex-row justify-between px-[38px]">
          <div className="">
            <div className="md:pl-10 pt-[5px]">
              <Image
                src={frame90}
                alt=""
                className="w-[136px] h-[58px] md:w-[235px] md:h-[100.65px]"
              />
            </div>

            <div className="space-y-12 md:space-y-20">
              <h1 className="font-normal md:font-bold md:w-[671px] md:h-[227px] md:text-[68px] text-[32px] w-[298px] h-[105px]">
                Find your dream roommate and your next bestfriend
              </h1>
              <h3 className="text-2xl md:flex hidden font-normal">
                Acccessing a trusted roommate in your school at a small price.
              </h3>
              <h3 className="md:hidden flex">
                Access toAcccessing a trusted roommate in your school at a small
                price. a trusted roommate in your school at a small price
              </h3>

              <div className=" flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0">
                <button className="sm:w-[264px] w-[150px] h-[45px] bg-orange10 sm:h-[60.1px] rounded-xl">
                  Request Roomate
                </button>
                <button className="sm:w-[264px] w-[150px] h-[45px] border border-orange10 sm:h-[60.1px] rounded-xl">
                  Request Roomate
                </button>
              </div>

              <div className="flex flex-row space-x-[36px] md:space-x-24">
                <Image src={image1} alt="fb" />
                <Image src={image2} alt="ig" />
                <Image src={image3} alt="tw" />
                <Image src={image4} alt="wh" />
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <Image
              src={women}
              alt="two african women"
              className=" md:h-[686px] md:w-[952px] animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
