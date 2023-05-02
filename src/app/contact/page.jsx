"use client";
import Image from "next/image";
import React from "react";
import image from "../../../Assets/images/hand-phone.png";
import frame90 from "../../../Assets/svg/Frame90.svg";
import image1 from "../../../Assets/svg/fb.svg";
import image2 from "../../../Assets/svg/ig.svg";
import image3 from "../../../Assets/svg/Twitter logo.svg";
import image4 from "../../../Assets/svg/whatsapp.svg";
import DirectMessage from "@/components/UI/DirectMessage";
import Pagination from "@/components/UI/Pagination";
import Bg_image from "@/components/UI/Bg_image";

export const metaData = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="h-full dark:text-white w-full py-[4rem]">
      <div className="relative pb-10">
        <div className="animate__animated animate__pulse bg-gradient-to-r from-[#FE5200] to-[#00A0E3] h-full w-full">
          <Image
            width="auto"
            height="auto"
            src={image}
            alt="ladies pix"
            className="h-[636px] w-full md:h-auto md:w-auto mix-blend-overlay opacity-50"
          />
        </div>
        <div className="md:pl-10 pl-5 pt-[4px] absolute top-0">
          <Image
            width="auto"
            height="auto"
            src={frame90}
            alt=""
            className="w-[136px] h-[58px] md:w-auto md:h-auto"
          />
        </div>

        <div className="flex justify-center items-center text-white animate__animated animate__backInDown inset-0 left-0 h-full flex-col absolute top-0 text-center w-full md:space-y-[105px]">
          <div className="max-w-xs md:max-w-[50rem] space-y-[30px]">
            <h1 className="md:text-7xl font-bold text-[24px]">Contact Us</h1>
            <p className="text-2xl">
              <i>
                You can reach out to us through our social media handle or
                direct office number and you can also shoot us a direct message
                below
              </i>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-28 flex flex-col justify-center items-center">
        <div className="space-y-12 font-bold">
          <h1 className="text-4xl"> You Can Call Us On Our Direct Line:</h1>
          <div className="flex space-x-[32px] justify-center">
            <h1 className="text-3xl">070 222 32 574 </h1>
            <h1 className="text-3xl">070 341 32 798</h1>
          </div>
        </div>

        <div className="space-y-20 pb-20 max-w-3xl">
          <h1 className="font-bold text-5xl text-center">
            Our Social Media Handle Are Also Very Active
          </h1>
          <div className="flex flex-row space-x-[12px] md:space-x-20 justify-center">
            <div>
              <Image width="auto" height="auto" src={image1} alt="fb" />
            </div>
            <div>
              <Image width="auto" height="auto" src={image2} alt="ig" />
            </div>
            <div>
              <Image width="auto" height="auto" src={image3} alt="tw" />
            </div>
            <div>
              <Image width="auto" height="auto" src={image4} alt="wh" />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
      <DirectMessage />
      <Bg_image />
    </div>
  );
}
