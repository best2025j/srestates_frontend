"use client";
import React from "react";
import Form from "../Form";

export default function DirectMessage() {
  return (
    <div className="flex flex-col w-full h-full pt-14 justify-center items-center mx-auto">
      <div className="text-center max-w-xs md:max-w-3xl space-y-[10px]">
        <h1 className="md:text-[3.2rem] text-[1.63rem] font-bold ">
          Shoot Us a Direct Message If You Need Any Help
        </h1>
        <p className="md:text-2xl font-[400] text-xs">
          At Studentrealestate we major in two things, which are...
        </p>
      </div>

      <div className="bg-orange_light dark:bg-black md:py-20 py-10 my-20 md:w-[900px] w-[22.8rem] border border-[#00A0E3] h-full rounded-xl">
        <Form />
        <div className="flex justify-center items-center pt-28 text-white">
          <button className="sm:w-[264px] w-[150px] h-[45px] bg-orange10 sm:h-[60.1px] rounded-xl">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
