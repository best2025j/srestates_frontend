import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import man from "../../Assets/images/man.png";
import { Button } from "@mantine/core";
import "animate.css";

const Pagination = () => {
  return (
    <div className="h-full w-full py-20">
      <div className="mx-auto py-6 space-y-[10px] text-center md:max-w-3xl max-w-xs">
        <div className="">
          <h1 className="md:text-[3.2rem] text-[26px] font-bold">
            Check Out Our Recent Reviews
          </h1>
        </div>
        <p className="font-normal md:text-2xl text-xs">
          Our reviews are from individuals like you who have similar interest.
        </p>
      </div>

      <div className="flex text-center justify-center py-16 items-center h-full w-full ">
        <Button className="bg-orange10" disabled>
          <FaAngleLeft size={20} className="" />
        </Button>
        <div className="space-y-12 max-w-[866px]">
          <div className="font-bold text-">
            <h1>Found A Roommate</h1>
          </div>
          <i className="text-2xl ">
            “I’m very pleased with this website. I came across it 2022 and I had
            no regrets whatsoever. I’ve recommended it to so many friends and
            family. I got my roommate from here and there is no issue. I just
            wish Studentrealestates becomes viral because it makes roommate
            pairing easier.”
          </i>
        </div>
        <Button className="bg-orange10">
          <FaAngleRight size={20} />
        </Button>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div>
          <Image src={man} alt="man" className="w-16 h-16" />
        </div>
        <div>
          <h3 className="font-bold md:text-2xl">Leonard Italy</h3>
          <i className="">Chemistry Student EKSU</i>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
