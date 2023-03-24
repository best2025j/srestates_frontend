import Image from "next/image";
import React from "react";
import image3 from "../public/assets/images/Isolation Mode.png";

export const Isolation = () => {
  return (
      <div className="h-auto w-full">
        <Image
          src={image3}
          className="w-full h-full object-cover mix-blend-overlay"
          alt="isolation"
        />
      </div>
      // {/* <div className="text-center justify-center absolute top-2 mx-auto h-screen w-full ">
      //   <h1 className="font-bold text-[24px] sm:text-[52px]">
      //     University on Studentrealestates
      //   </h1>
      //   <div className="grid grid-cols-4 text-2xl ">
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //     <h1>University of Lagos</h1>
      //   </div>
      // </div> */}
  );
};
