"use client";
import React from "react";
import Form from "../Form";

export default function DirectMessage() {
  return (
    <div className="flex flex-col w-full h-full  justify-center items-center mx-auto ">
      <div className="text-center">
        <h1 className="text-[3.2rem] font-bold max-w-3xl"> Shoot Us a Direct Message If You Need Any Help</h1>
        <p className="text-2xl font-[400]">At Studentrealestate we major in two things, which are...</p>
      </div>
      <div className="bg-orange_light dark:bg-black md:py-20 py-10 my-20 md:w-[900px] h-full rounded-xl">
        <Form />
        <div className="flex justify-center items-center pt-28 text-white">
          <button className="sm:w-[264px] w-[150px] h-[45px]  bg-orange10 sm:h-[60.1px] rounded-xl">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
