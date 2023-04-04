import Image from "next/image";
import React from "react";
import group_pix from "../../public/assets/images/Groupimage.png";

export default function Bg_image() {
  return (
    <div className="py-[17rem] relative ">
      <div className="h-full w-full absolute top-0 z-50">
        <Image src={group_pix} alt="group pix" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="">
          Would You Like To Know How To Get A Friend Or Roommate On
          Studentrealestate?
        </h1>
        <p>
          Click on the link button below to know more about getting a roommate.
        </p>
        <div>
          <button className=" bg-orange_light w-[35.8rem] z-94 text-2xl h-10 border border-orange10 text-orange10 rounded-xl">
            Guides on how to request a friend or roommate
          </button>
        </div>
      </div>
    </div>
  );
}
