import { InputBase } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import image3 from "../../public/assets/images/isolation mode.png";

const SearchSchools = () => {
  return (
    <div className="h-full w-full relative md:mt-20 ">
      <div>
        <Image src={image3} className="w-full h-full" alt="isolation" />
      </div>

      {/* <div className="space-y-10 h-full justify-center top-0 absolute w-full mx-auto flex flex-col pt-[20rem]"> */}
      <div className="h-full justify-center top-0 absolute w-full flex py-32 flex-col space-y-[64px]">
        <div className="text-2xl md:text-6xl text-center font-bold">
          <h1>University on Studentrealestates</h1>
        </div>
        <div className="hidden md:grid md:grid-cols-5 text-center gap-8 w-[90%] mx-auto">
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
        </div>
        
        <div className=" md:hidden grid grid-cols-2 text-center gap-6 w-[90%] mx-auto">
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative md:mt-2">
            <input
              type="text"
              placeholder="David Niti"
              className="pl-14 md:w-96 md:h-[40px] h-[35px] w-80 bg-white rounded md:rounded-[22px]"
            />
            <div className="absolute top-2 insert-y-0 left-0 flex items-center pl-4">
              <AiOutlineSearch className="text-black/80 h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSchools;
