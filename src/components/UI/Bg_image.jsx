"use client";
import Image from "next/image";
import { BackgroundImage } from "@mantine/core";
import React from "react";
import group_pix from "../../../Assets/images/Groupimage.png";

export default function Bg_image() {
  return (
    <div className="md:py-[17rem] py-[8.3rem] dark:text-black text-white">
      <div className="relative">
        <Image
          src={group_pix}
          alt="bg-image"
          className="h-[363px] w-full md:h-auto md:w-auto"
        />
        <div className="flex justify-center items-center h-full flex-col absolute top-0 text-center w-full md:space-y-[105px]">
          <div className="max-w-xs md:max-w-[70rem] ">
            <h1 className="md:text-[3.3rem] font-bold text-[24px]">
              Would You Like To Know How To Get A Friend Or Roommate On
              Student-real-estate?
            </h1>
            <p className="text-xs md:text-2xl">
              <i>
                Click on the link button below to know more about getting a
                roommate.
              </i>
            </p>
          </div>

          <div className="">
            <button className=" bg-orange_light md:w-[35.8rem] w-full h-full z-94 md:text-2xl md:h-14 border border-orange10 text-orange10 rounded-xl">
              Guides on how to request a friend or roommateZZ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
