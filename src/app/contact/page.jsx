import Image from 'next/image';
import React from 'react'
import image from "../../../Assets/images/hand-phone.png";
import frame90 from "../../../Assets/svg/Frame90.svg";



export default function ContactPage() {
  return (
    <div className="h-screen bg-white w-full py-20">
      <div className="relative">
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
          <div className="max-w-xs md:max-w-[70rem] ">
            <h1 className="md:text-[3.3rem] font-bold text-[24px]">
              Get a Roommate Of Your Choice and Make New Friend(s)
            </h1>
            <p className="text-sm">
              <i>
                Click on the link button below to know more about getting a
                roommate.
              </i>
            </p>
          </div>

          <div className=" flex md:flex-row  flex-col md:space-x-6 space-y-4 md:space-y-0">
            <button className="sm:w-[264px] w-[150px] h-[45px] bg-orange10 sm:h-[60.1px] rounded-xl">
              Request RoomMate
            </button>
            <button className="sm:w-[264px] w-[150px] h-[45px] border border-orange10 sm:h-[60.1px] rounded-xl">
              Request RoomMate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

