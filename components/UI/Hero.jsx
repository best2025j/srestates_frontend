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

export const Hero = () => {
  return (
    <div className="">
      <div className="relative h-screen w-full">
        <Image src={frame} alt="" className="w-full object-cover h-auto" />
        <div className="absolute top-0 pt-20 flex flex-col sm:flex-row justify-between w-full h-screen">
          <div className="ml-20">
            <Image
              src={frame90}
              alt=""
              className="w-[136px] h-[58px] sm:w-[235px] sm:h-[100.65px]"
            />
            <div className="space-y-20">
              <h1 className="font-normal sm:font-bold sm:w-[671px] sm:h-[227px] sm:text-[68px] text-[32px] w-[298px] h-[105px]">
                Find your dream roommate and your next bestfriend
              </h1>
              <h3 className="text-2xl font-normal">
                Acccessing a trusted roommate in your school at a small price.
              </h3>
              {/* <h3 className="">
                Access toAcccessing a trusted roommate in your school at a small
                price. a trusted roommate in your school at a small price
              </h3> */}
            </div>
            <div className="sm:py-24 flex sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0">
              <button className="sm:w-[264px] w-[150px] h-[45px] bg-orange10 sm:h-[60.1px] rounded-xl">
                Request Roomate
              </button>
              <button className="sm:w-[264px] w-[150px] h-[45px] border border-orange10 sm:h-[60.1px] rounded-xl">
                Request Roomate
              </button>
            </div>
            <div className="flex flex-row space-x-5 sm:space-x-24">
              <Image src={image1} alt="fb" />
              <Image src={image2} alt="ig" />
              <Image src={image3} alt="tw" />
              <Image src={image4} alt="wh" />
            </div>
          </div>

          <div>
            <Image
              src={women}
              alt="two african women"
              className="w-[952px] h-[634px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="relative h-screen w-full ">
    //   <div className="">
    //     <Image src={frame} alt="" className="w-full" />
    //   </div>
    //   <Image src={frame90} alt="grid " className="w-6 h-6" />

    //   <div className="absolute py-20 top-0 flex flex-col sm:flex-row">
    //     <div className="space-y-20">
    //       <div className="w-[671px] h-[227px] text-[68px]">
    //         <h1 className=" font-bold">
    //           Find your dream roommate and your next bestfriend.
    //         </h1>
    //       </div>

    //       <div>
    //         <h3 className="text-2xl font-normal">
    //           Acccessing a trusted roommate in your school at a small price.
    //         </h3>
    //       </div>

    //       <div className="flex sm:flex-row flex-col sm:space-x-6 space-y-6 sm:space-y-0">
    //         <button className="sm:w-[264px] w-[150px] h-[45px] bg-orange10 sm:h-[60.1px] rounded-xl">
    //           Request Roomate
    //         </button>
    //         <button className="sm:w-[264px] w-[150  ] border border-orange10 h-[60.1px] rounded-xl">
    //           Request Friend
    //         </button>
    //       </div>

    //       <div className="flex flex-row space-x-10">
    //         <Image src={image1} alt="fb" />
    //         <Image src={image2} alt="ig" />
    //         <Image src={image3} alt="tw" />
    //         <Image src={image4} alt="wh" />
    //       </div>
    //     </div>
    //     <div>
    //       <Image src={women} alt="two african women" className="" />
    //     </div>
    //   </div>

    // </div>
  );
};
