import Image from "next/image";
import React from "react";
import frame90 from "../public/assets/svg/Frame90.svg";
import frame from "../public/assets/images/Frame.png";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <Image src={frame} alt="" className="" />
        <div className="absolute top-0 left-16">
          <Image src={frame90} alt=" " className="left-20" />
          <div>
            <h1>Find your dream roommate and your next bestfriend.</h1>
            <h5>
              Acccessing a trusted roommate in your school at a small price.
            </h5>
          </div>
        </div>
      </div>
      <div>Hero</div>
    </div>
  );
};

export default Hero;
