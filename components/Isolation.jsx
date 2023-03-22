import Image from "next/image";
import React from "react";
import image3 from "../public/assets/images/Isolation Mode.png";

export const Isolation = () => {
  return (
    <div className="py-40 relative h-screen w-full">
      <Image src={image3} className="w-full h-screen" />
      <div className="absolute top-2 left-0 right-0 text-center">
        <h1 className="font-bold text-[24px] sm:text-[52px]">
          University on Studentrealestates
        </h1>
      </div>
    </div>
  );
};
