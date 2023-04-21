import Image from "next/image";
import React from "react";
import image from "../../../Assets/images/hand-phone.png";
import frame90 from "../../../Assets/svg/Frame90.svg";
import image1 from "../../../Assets/svg/fb.svg";
import image2 from "../../../Assets/svg/ig.svg";
import image3 from "../../../Assets/svg/Twitter logo.svg";
import image4 from "../../../Assets/svg/whatsapp.svg";

export default function ContactPage() {
  return (
    <div className="h-full bg-white w-full py-[4rem]">
      <div className="relative pb-10">
        <div className="animate__animated animate__pulse bg-gradient-to-r from-[#FE5200] to-[#00A0E3] h-full w-full">
          <Image
            src={image}
            alt="ladies pix"
            className="h-[636px] w-full md:h-auto md:w-auto mix-blend-overlay opacity-50"
          />
        </div>
        <div className="md:pl-10 pl-5 pt-[4px] absolute top-0">
          <Image
            src={frame90}
            alt=""
            className="w-[136px] h-[58px] md:w-auto md:h-auto"
          />
        </div>

        <div className="flex justify-center items-center animate__animated animate__backInDown inset-0 left-0 h-full flex-col absolute top-0 text-center w-full md:space-y-[105px]">
          <div className="max-w-xs md:max-w-[65rem] space-y-[30px]">
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


      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-[52px] font-bold"> You Can Call Us On Our Direct Line:</h1>
          <div className="flex items">
            <span className="">070 222 32 574 </span>
            <span className="">070 341 32 798</span>
          </div>
        </div>

        
        <div className="space-y-6">
          <h1> Our Social Media Handle Are Also Very Active</h1>
          <div className="flex flex-row space-x-[20px] md:space-x-20">
            <div>
              <Image src={image1} alt="fb" />
            </div>
            <div>
              <Image src={image2} alt="ig" />
            </div>
            <div>
              <Image src={image3} alt="tw" />
            </div>
            <div>
              <Image src={image4} alt="wh" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
