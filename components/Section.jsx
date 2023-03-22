import Image from "next/image";
import React from "react";
import image from "../public/assets/images/Frame 96(1).png";
import image2 from "../public/assets/images/Frame 96(2).png";

export const Section = () => {
  return (
    <div className="py-20 px-16 h-screen w-full font-['Ubuntu']">
      <div className="text-center ">
        <h1 className=" text-[52px] font-bold">Our Interest</h1>
        <p className="text-2xl">
          At studentrealestates we major in two things which are...
        </p>
      </div>

      <div className="py-20">
        <div className="flex justify-between items-center">
          <div className="space-y-5 h-full justify-center items-center">
            <h1 className="text-[2.625rem] font-bold">Find a Roommate</h1>
            <p className="max-w-md text-2xl font-normal">
              Our database is updated every day with new profiles of potential
              roommates you can find around you. Sign up, fill out your profile
              and get paired to your dream roommate.
            </p>
            <button className="w-[264px] bg-orange10 h-[60.1px] rounded-xl">
              Request Roomate
            </button>
          </div>
          <div>
            <Image src={image} alt="" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <Image src={image2} alt="" />
          </div>
          <div className="space-y-5 h-full justify-center items-center">
            <h1 className="text-[2.625rem] font-bold">Find a Friend</h1>
            <p className="max-w-md text-2xl font-normal">
              Studentrealestates is the perfect place to meet new friends,
              especially if you are looking for people who have the same
              specific interests as you.
            </p>
            <button className="w-[264px] bg-orange10 h-[60.1px] rounded-xl">
              Request Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};