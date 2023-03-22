import Image from "next/image";
import React from "react";
import image3 from "../public/assets/images/Isolation Mode.png";

export const Isolation = () => {
  return (
    <div className="pt-40 relative h-screen w-full">
      <Image src={image3} className="w-full h-screen" alt="isolation" />
      <div className="absolute">
        <h1 className="font-bold text-[24px] sm:text-[52px]">
          University on Studentrealestates
        </h1>
        <div className="">
          <h1>University of Lagos</h1>
          <h1>University of Lagos</h1>
          <h1>University of Lagos</h1>
          <h1>University of Lagos</h1>
          <h1>University of Lagos</h1>
        </div>
      </div>
    </div>
  );
};
