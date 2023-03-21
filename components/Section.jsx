import React from "react";
// import Image from "next/image";
// import image from "../public/assets/images/";
// import image from "../public/assets/images/";

export const Section = () => {
  return (
    <div className="py-20 px-16 h-screen w-full font-['Ubuntu']">
      <div className="text-center ">
        <h1 className=" text-[52px] font-bold">Our Interest</h1>
        <p className="text-2xl">
          At studentrealestates we major in two things which are...
        </p>
      </div>

      <div>
        <div>
          <div>
            <h1>Find a Roommate</h1>
            <p>
              Our database is updated every day with new profiles of potential
              roommates you can find around you. Sign up, fill out your profile
              and get paired to your dream roommate.
            </p>
            <button className="w-[264px] bg-orange10 h-[60.1px] rounded-xl">
              Request Roomate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
