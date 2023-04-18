"use client";
import Image from "next/image";
import React from "react";
import image from "../../../Assets/images/Frame 96(1).png";
import image2 from "../../../Assets/images/Frame 96(2).png";

export const Section = () => {
  return (
    <div className="w-full h-full md:mt-40 my-52 px-8">
      <div className="text-center">
        <h1 className="text-[26px] md:text-[52px] font-bold">Our Interest</h1>
        <h1 className="md:text-2xl text-xs font-normal">
          At studentrealestates we major in two things which are...
        </h1>
      </div>

      <div className="py-20 md:flex justify-between items-center">
        <div className="flex md:flex-row flex-col">
          <div className="space-y-5 h-full">
            <h1 className="md:text-[2.625rem] text-xl font-bold">
              Find a Roommate
            </h1>
            <p className="md:max-w-md max-w-[253px] text-sm md:text-2xl font-normal">
              Our database is updated every day with new profiles of potential
              roommates you can find around you. Sign up, fill out your profile
              and get paired to your dream roommate.
            </p>
            <button className="w-[150px] h-[45px] md:w-[264px] bg-orange10 md:h-[60.1px] rounded-xl">
              Request Roomate
            </button>
          </div>
        </div>
        <div>
          <Image src={image} alt="" />
        </div>
      </div>

      <div className="md:flex justify-between md:flex-row-reverse items-center">
        <div className="flex md:flex-row flex-col">
          <div className="space-y-5 h-full">
            <h1 className="sm:text-[2.625rem] text-xl font-bold">
              Find a Friend
            </h1>
            <p className="sm:max-w-md max-w-[253px] text-sm md:text-2xl font-normal">
              Studentrealestates is the perfect place to meet new friends,
              especially if you are looking for people who have the same
              specific interests as you.
            </p>
            <button className="w-[150px] h-[45px] sm:w-[264px] bg-orange10 sm:h-[60.1px] rounded-xl">
              Request Friend
            </button>
          </div>
        </div>

        <div>
          <Image src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};
